---
tipo: decisiones
estado: vigente
creado: 2026-11-09
actualizado: 2026-11-09
tags: [decisiones, proyecto]
fuentes: [../AGENTS.md, ../DOCS/]
---

# Decisiones

- **2026-11-09 — Mantener `DOCS/` en su ubicación actual.** Ya contiene los originales; Windows no distingue mayúsculas en nombres de carpeta y moverla para cambiar casing alteraría rutas. La wiki la documenta como fuente `Docs/`. Fuente: estado observado del directorio y regla de preservar originales. [[documentos-y-activos]]
- **2026-11-09 — No extraer el ZIP sobre una carpeta existente.** La exportación ya está disponible en `PAGINA WEB/`, coincide con el ZIP y sus 64 rutas fueron validadas dentro de un destino aislado; conservar el ZIP original sin cambios evita sobrescrituras. Fuente: inventario local.
- **2026-11-09 — No editar aún el contenido de la landing.** La petición activa configura el agente y la wiki; no pide una modificación visual específica. Queda sugerida una mejora pequeña tras comprobar la vista previa: revisar las rutas de imágenes. Fuente: alcance de la solicitud; ver [[estado-del-proyecto]].
- **2026-11-09 — No iniciar Git ni crear commit por ahora.** No existía repositorio ni identidad local/global configurada y esta primera entrega solo añade memoria; pedir nombre y correo antes de un commit. No cambiar configuración global. Fuente: verificación de Git en el entorno.
