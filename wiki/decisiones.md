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
- **2026-11-09 — Inicializar Git local y usar identidad local.** Tras la solicitud explícita de conectar y publicar en `Distrigomez/PAGINA-WEB`, se creó `main` y el commit inicial `2b6e862` con el nombre/correo proporcionados, configurados solo en `.git/config`. No se cambió la identidad global. El remoto está configurado; el push sigue pendiente de autenticación. Fuente: solicitud actual y `git status`/commit local.
- **2026-11-09 — Mantener nuevos materiales fuera del remoto hasta revisarlos.** `PLAN-MEJORA/` y su ZIP raíz aparecieron sin seguimiento durante la preparación. Se ignoran para evitar subir documentos posiblemente privados sin revisión ni solicitud expresa. Fuente: inventario de rutas locales; contenido pendiente.
- **2026-11-09 — Instalar solo las dos skills pedidas en la raíz del proyecto.** `emil-design-eng` se copió del repositorio oficial citado en la guía; `seo-organico-ia` se instaló desde el ZIP recibido. No instalar `tratamiento-datos-landing`, `mobile-native` ni otras skills citadas solo en los materiales. Fuente: solicitud actual y árbol local de skills.
- **2026-11-09 — Mantener el checklist como propuesta aparte.** Se creó `PLAN-MEJORA/24-comercializadora-distrigomez-sas/plan-mejoras-cliente.md` para conservar intacto el plan recibido y registrar los cambios pedidos ahora. No aplicar los puntos hasta una instrucción expresa. Fuente: solicitud actual.
