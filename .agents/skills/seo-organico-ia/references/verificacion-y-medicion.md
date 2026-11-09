---
tipo: referencia-de-skill
estado: vigente
creado: 2026-11-04
actualizado: 2026-11-04
tags: [seo, verificacion, medicion]
fuentes: ["https://developers.google.com/search/docs/monitor-debug/search-console-start", "https://pagespeed.web.dev/", "https://validator.schema.org/"]
---

# Verificación y medición

## No mezclar estados de éxito

| Estado | Qué permite afirmar | Qué todavía no acredita |
|---|---|---|
| Archivo inspeccionado | Elementos presentes en ese archivo local. | DOM renderizado, respuesta HTTP, publicación o indexación. |
| Compilación correcta | El proyecto produjo su salida sin ese error de compilación. | Contacto correcto, accesibilidad o visibilidad en buscadores. |
| Página renderizada revisada | Contenido y comportamiento observados en ese navegador y vista. | Lo que recibirán todos los rastreadores o cuentas. |
| Página publicada comprobada | Respuesta y contenido accesibles en la URL verificada. | Inclusión en un índice ni tráfico futuro. |
| Estado informado por el propietario | Una comprobación que realizó y comunicó la persona. | Observación directa del agente. |
| Search Console verificado | El estado concreto observado en la propiedad y fecha consultadas. | Una posición garantizada o permanencia futura. |

## Revisión antes y después

Para cada cambio importante, registra ruta, problema, corrección, prueba y resultado. Mantén evidencia breve; no guardes exportaciones completas con datos innecesarios. Si un test falla, corrige lo relacionado con el cambio o deja un bloqueo concreto antes de cerrar.

El inspector HTML incluido es de solo lectura. Revisa metadatos básicos, estructura estática, JSON-LD y los archivos públicos indicados. No carga JavaScript, no consulta servicios ni evalúa significado comercial. Sus hallazgos necesitan interpretación del agente.

Cuando sea posible, usa el navegador para recorrer menú y CTA, abrir URL internas directamente y revisar el contenido móvil. Usa [Schema Markup Validator](https://validator.schema.org/) para vocabulario y sintaxis, y [Rich Results Test](https://search.google.com/test/rich-results) para funciones compatibles de Google; son comprobaciones diferentes.

Revisa rendimiento con las herramientas del proyecto o [PageSpeed Insights](https://pagespeed.web.dev/) cuando la URL sea pública y exista acceso. Una medición de laboratorio no es una promesa de experiencia idéntica para todos. Conserva fecha, URL, dispositivo y herramienta de la medición, sin inventar puntuaciones.

## Seguimiento sin anuncios ni herramientas pagas obligatorias

El propietario puede usar [Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start) para observar descubrimiento y consultas, y el canal empresarial para registrar contactos válidos. Si no hay analítica autorizada, describe esa limitación y usa la información realmente disponible.

Compara periodos de igual duración y definición; separa visitas, consultas y contactos. Registra una línea base cuando exista y evita atribuir cualquier variación exclusivamente al SEO si hubo promociones, cambios de oferta o estacionalidad. La ausencia de datos no significa cero rendimiento.

No es necesario comprar anuncios para aplicar esta skill. El dominio, alojamiento y tiempo de operación pueden tener costos independientes; esta entrega no los elimina ni contrata servicios.

## Informe breve de salida

| Cambio o hallazgo | Fuente o ruta | Prueba y fecha | Estado | Próxima acción y responsable |
|---|---|---|---|---|
| Describir el resultado concreto. | Referencia mínima necesaria. | Solo lo que se ejecutó u observó. | Comprobado, informado o pendiente. | Acción realizable, sin credenciales ni datos privados. |

Actualizar el checklist y la subwiki seleccionados. No volver a procesar toda la documentación para registrar una corrección pequeña.
