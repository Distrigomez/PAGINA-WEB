---
tipo: estado-del-proyecto
estado: activo
creado: 2026-11-09
actualizado: 2026-11-10
tags: [landing, vite, react]
fuentes: [../PAGINA WEB/package.json, ../PAGINA WEB/README.md, ../distrigomez-salud-y-belleza.zip]
---

# Estado del proyecto

## Sitio

- **Confirmado:** existe una landing exportada de Google AI Studio en `PAGINA WEB/`. Usa Vite, React 19 y TypeScript; conserva secciones de portada, catálogo, empresa, emprendimiento, cobertura y contacto.
- **Confirmado:** el ZIP `../distrigomez-salud-y-belleza.zip` contiene la misma aplicación que `PAGINA WEB/`; sus 64 entradas pasan la comprobación de confinamiento de rutas. El ZIP se conserva sin modificar.
- **Confirmado (2026-11-10):** el catálogo local contiene 38 fichas. La ficha de ácido hialurónico usa el nombre “Ampolla de Ácido Hialurónico” y presentación caja de 12 unidades x 15 ml, según indicación de la cliente y texto del empaque; no la presenta como unidad individual ni incluye “Cascada Revitalizante” en el texto. El arte aún contiene ese rótulo y queda pendiente reemplazarlo.
- **Confirmado (2026-11-10):** la ficha del tratamiento Maxi-Loe de 2.000 ml usa el arte de `DOCS/IMG_3149.PNG`; la imagen `DOCS/IMG_3179.PNG` está separada como “Maxi-Loe Sellante Galón”. Ambas fichas ocultan su presentación textual en la cotización mayorista.
- **Confirmado (2026-11-10):** el navbar muestra “Productos” sin inventario; se retiró de la sección Nosotros la paleta y sus códigos visibles, conservando los estilos de marca. El conteo de artículos seleccionados en una cotización se conserva porque es la cantidad elegida por el usuario, no el inventario público.
- **Confirmado (2026-11-10):** `package.json` y `package-lock.json` están disponibles; dependencias instaladas con npm. `npm run build` y `npm run lint` pasaron después de los cambios de producto. Hay una advertencia de Vite sobre `__dirname` en `vite.config.ts`; no impidió compilar.
- **Pendiente de revisión:** autenticación, perfiles, cotizaciones, testimonios, afirmaciones de beneficios y precios en el código podrían ser demostrativos o requerir autorización; no deben tratarse como aprobados por el solo hecho de estar en la exportación.

## Entorno y Git

- **Confirmado:** Node.js v24.22.1, npm 11.19.1, pnpm 11.25.0 y Git están disponibles.
- **Confirmado:** la aplicación declara `dev`, `build`, `preview`, `lint` y `clean` en `package.json`.
- **Confirmado:** `package-lock.json` y `node_modules/` se generaron tras resolver el conflicto de peer dependency elevando `esbuild` a `^0.28.0`.
- **Confirmado (2026-11-10):** repositorio Git en `main`, autoría local configurada como DISTRIGOMEZ y `origin` apunta a `https://github.com/Distrigomez/PAGINA-WEB.git`. Los cambios de catálogo, activos y wiki están enviados a `origin/main`; la copia en GitHub no significa que la landing esté publicada.
- **Confirmado:** `DOCS/`, el ZIP original y los materiales fuente de `PLAN-MEJORA/` están excluidos del repositorio. El checklist solicitado se añadió como único archivo seleccionado de esa carpeta para que el enlace de la wiki funcione. La plantilla de validación, el mensaje y los ZIP originales siguen locales; el ZIP de tratamiento de datos no se abrió.
- **Confirmado:** instaladas las skills locales `emil-design-eng` y `seo-organico-ia` en `.agents/skills/`. El script incluido en la skill SEO no se ejecutó. No se instalaron otras skills.
- **Confirmado:** creado y versionado `PLAN-MEJORA/24-comercializadora-distrigomez-sas/plan-mejoras-cliente.md` con los cuatro puntos solicitados y oportunidades sujetas a aprobación. No se modificó la landing.
- **Confirmado (2026-11-10):** ficha actualizada para “Decolorante Kaya Profesional con Plex, 9 tonos”; se quitó precio, ingredientes y claims no respaldados. La presentación se oculta en cotizaciones mayoristas; el arte adjunto conserva el peso impreso en el envase. Ver [[documentos-y-activos]] y el checklist.
- **Confirmado (2026-11-10):** añadido “Maxi-Loe Liss Tratamiento Alisador Capilar Paso 2” con base en `DOCS/IMG_3219.PNG`; no se añadió precio y se omiten ingredientes y presentación de la ficha y texto de cotización mayorista. La imagen conserva textos de ingredientes y 1.000 ml impresos.
- **Confirmado (2026-11-10):** actualizada la imagen de “Shampoo Hidratante sin Sal Cebolla & Ajo (Kaya Profesional)” con `DOCS/IMG_3221.PNG`. Se retiró la descripción anterior no respaldada y se ocultó la presentación textual en cotización mayorista; no se tocó el precio previamente registrado.
- **Confirmado:** la vista previa local corre en `http://127.0.0.1:3000/` y está abierta en el navegador de Codex. En la revisión estrecha de página apareció desplazamiento horizontal; falta revisar y corregirlo después de aislar la causa. La vista previa no equivale a publicación.

## Publicación y comprobaciones

- **Confirmado:** la página se revisó en el navegador local después de las modificaciones. El navbar no muestra cantidad de inventario y la sección Nosotros ya no presenta la paleta. Aún falta revisar la sección de productos y la presentación mayorista a detalle; no se probó el envío real de WhatsApp ni la recepción del formulario.
- **Pendiente:** los filtros siguen antes del destacado y todavía no se implementa paginación de 8 productos; permanecen en el checklist para una instrucción expresa.
- **Confirmado:** se observó una barra de desplazamiento horizontal en una captura estrecha del catálogo. Revisar el desbordamiento en celular como siguiente mejora local.
- **Confirmado:** se inspeccionó la estructura, package scripts, fuentes empresariales, logo, paleta y las 19 imágenes de producto; se renderizaron visualmente las 7 páginas del PDF institucional.
- **Siguiente paso:** continuar recibiendo fotos para las fichas pendientes y, cuando la cliente lo indique, realizar los puntos pendientes del checklist. La landing sigue sin publicar.
