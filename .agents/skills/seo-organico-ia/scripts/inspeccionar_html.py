"""Inspección SEO estática de archivos locales; no modifica ni consulta la red."""
from __future__ import annotations

import argparse
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys
from urllib.parse import urlparse
import xml.etree.ElementTree as ET


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.lang = ""
        self.titles = []
        self.headings = []
        self.metas = []
        self.canonicals = []
        self.images = []
        self.jsonld = []
        self.anchors_without_href = 0
        self.app_container = False
        self._title = None
        self._h1 = None
        self._jsonld = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get("id") in {"root", "app", "__next"}:
            self.app_container = True
        if tag == "html":
            self.lang = a.get("lang", "") or ""
        elif tag == "title":
            self._title = []
        elif tag == "h1":
            self._h1 = []
        elif tag == "meta":
            self.metas.append(a)
        elif tag == "link" and "canonical" in (a.get("rel", "") or "").lower().split():
            self.canonicals.append(a.get("href", "") or "")
        elif tag == "img":
            self.images.append(a)
        elif tag == "a" and not a.get("href"):
            self.anchors_without_href += 1
        elif tag == "script" and (a.get("type", "") or "").split(";")[0].strip().lower() == "application/ld+json":
            self._jsonld = []

    def handle_data(self, data):
        if self._title is not None:
            self._title.append(data)
        if self._h1 is not None:
            self._h1.append(data)
        if self._jsonld is not None:
            self._jsonld.append(data)

    def handle_endtag(self, tag):
        if tag == "title" and self._title is not None:
            self.titles.append(" ".join("".join(self._title).split()))
            self._title = None
        elif tag == "h1" and self._h1 is not None:
            self.headings.append(" ".join("".join(self._h1).split()))
            self._h1 = None
        elif tag == "script" and self._jsonld is not None:
            self.jsonld.append("".join(self._jsonld))
            self._jsonld = None


def absolute_http(value):
    parsed = urlparse(value)
    return parsed.scheme in {"http", "https"} and bool(parsed.netloc)


def inspect(html_path: Path, site_root: Path):
    page = Page()
    page.feed(html_path.read_text(encoding="utf-8-sig"))
    findings = []

    def add(check, state, detail):
        findings.append({"revision": check, "estado": state, "detalle": detail})

    descriptions = [a.get("content", "") or "" for a in page.metas if (a.get("name", "") or "").lower() == "description"]
    robot_meta = [a.get("content", "") or "" for a in page.metas if (a.get("name", "") or "").lower() in {"robots", "googlebot"}]
    add("titulo", "presente" if len(page.titles) == 1 and page.titles[0] else "revisar", {"cantidad": len(page.titles), "valores": page.titles})
    add("descripcion", "presente" if len(descriptions) == 1 and descriptions[0].strip() else "revisar", {"cantidad": len(descriptions), "valores": descriptions})
    add("idioma", "presente" if page.lang else "revisar", page.lang or "No encontrado en el HTML estático.")
    viewport = [a.get("content", "") for a in page.metas if (a.get("name", "") or "").lower() == "viewport"]
    add("viewport", "presente" if viewport else "revisar", viewport)
    valid_canonical = len(page.canonicals) == 1 and absolute_http(page.canonicals[0])
    add("canonica", "presente" if valid_canonical else "revisar", {"valores": page.canonicals, "nota": "Verificar además dominio, redirecciones y equivalencia del contenido."})
    if page.app_container and not page.headings:
        add("contenido_renderizado", "pendiente", "Posible shell de aplicación: renderizar y comparar DOM, rutas y contenido antes de concluir sobre los encabezados.")
    else:
        add("encabezado_principal", "presente" if len(page.headings) == 1 and page.headings[0] else "revisar", page.headings)
    missing_alt = [i + 1 for i, a in enumerate(page.images) if "alt" not in a]
    empty_alt = [i + 1 for i, a in enumerate(page.images) if a.get("alt") == ""]
    add("imagenes", "revisar" if missing_alt else "presente", {"total": len(page.images), "sin_atributo_alt": missing_alt, "alt_vacio_revisar_si_decorativa": empty_alt, "nota": "La calidad y correspondencia de la descripción requieren revisión visual."})
    add("enlaces", "revisar" if page.anchors_without_href else "inspeccionado", {"anclas_sin_href": page.anchors_without_href, "nota": "No se han visitado los destinos."})
    noindex = any("noindex" in re.split(r"[\s,]+", x.strip().lower()) for x in robot_meta)
    add("robots_meta", "revisar" if noindex else "inspeccionado", {"valores": robot_meta, "nota": "No se han leído cabeceras HTTP; valorar si la página debe indexarse."})
    errors = []
    for i, content in enumerate(page.jsonld, 1):
        try:
            json.loads(content)
        except json.JSONDecodeError as exc:
            errors.append({"bloque": i, "linea": exc.lineno, "columna": exc.colno})
    add("jsonld", "revisar" if errors else "sintaxis_inspeccionada", {"bloques": len(page.jsonld), "errores": errors, "nota": "Ni ausencia ni sintaxis válida prueban pertinencia, elegibilidad o resultado enriquecido."})
    robots = site_root / "robots.txt"
    if robots.is_file():
        groups = []
        current = {"agentes": [], "reglas": []}
        sitemaps = []
        for raw in robots.read_text(encoding="utf-8-sig").splitlines():
            line = raw.split("#", 1)[0].strip()
            if ":" not in line:
                continue
            key, value = (x.strip() for x in line.split(":", 1))
            key = key.lower()
            if key == "sitemap":
                sitemaps.append(value)
            elif key == "user-agent":
                if current["reglas"]:
                    groups.append(current)
                    current = {"agentes": [], "reglas": []}
                current["agentes"].append(value)
            elif key in {"allow", "disallow"}:
                current["reglas"].append({"tipo": key, "ruta": value})
        if current["agentes"] or current["reglas"]:
            groups.append(current)
        add("robots_archivo", "inspeccionado", {"grupos": groups, "sitemaps": sitemaps, "nota": "Interpretar reglas y agentes; este informe no simula la decisión de un rastreador."})
    else:
        add("robots_archivo", "no_encontrado", "No está en la carpeta indicada; comprobar la URL publicada. Su ausencia no demuestra un bloqueo.")
    sitemap = site_root / "sitemap.xml"
    if sitemap.is_file():
        try:
            xml = ET.fromstring(sitemap.read_bytes())
            locations = [x.text or "" for x in xml.iter() if x.tag.rsplit("}", 1)[-1] == "loc"]
            invalid = [x for x in locations if not absolute_http(x)]
            duplicates = len(locations) - len(set(locations))
            add("sitemap", "revisar" if invalid or not locations or duplicates else "sintaxis_inspeccionada", {"entradas": len(locations), "duplicadas": duplicates, "url_no_absolutas": invalid, "nota": "No se verificó acceso HTTP, canónica ni indexación de los destinos."})
        except ET.ParseError as exc:
            add("sitemap", "revisar", {"error_xml": str(exc)})
    else:
        add("sitemap", "no_encontrado", "No está en la carpeta indicada; comprobar si se genera por otra ruta o en el servidor.")
    return {"archivo": str(html_path.resolve()), "carpeta_publica": str(site_root.resolve()), "alcance": "Lectura estática local; sin red, renderizado, cabeceras HTTP ni prueba de indexación.", "hallazgos": findings}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("html", type=Path)
    parser.add_argument("--site-root", type=Path, help="Carpeta donde buscar robots.txt y sitemap.xml; por defecto, la del HTML.")
    args = parser.parse_args()
    try:
        if not args.html.is_file():
            raise ValueError("El argumento HTML debe ser un archivo local existente.")
        root = args.site_root or args.html.parent
        if not root.is_dir():
            raise ValueError("La carpeta pública indicada no existe.")
        result = inspect(args.html, root)
    except (OSError, UnicodeError, ValueError) as exc:
        print(json.dumps({"error": str(exc)}, ensure_ascii=False))
        return 2
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    raise SystemExit(main())
