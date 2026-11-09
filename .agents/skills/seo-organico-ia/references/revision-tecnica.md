---
tipo: referencia-de-skill
estado: vigente
creado: 2026-11-04
actualizado: 2026-11-04
tags: [seo, contenido, react, verificacion]
fuentes: ["https://developers.google.com/search/docs/fundamentals/seo-starter-guide", "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics", "https://schema.org/"]
---

# Revisión técnica y de contenido

## Hoja de trabajo del agente

| Revisión | Qué hacer en el proyecto | Evidencia mínima |
|---|---|---|
| Título y descripción | Describir la página y el negocio con texto específico y comprensible; evitar valores de plantilla y títulos idénticos en páginas diferentes. | HTML o DOM revisado y ruta afectada. |
| Estructura | Un encabezado principal reconocible y subtítulos que organicen los servicios; usar HTML semántico y texto real. | Lectura de la jerarquía y revisión visible. |
| Servicios y contacto | Explicar qué se ofrece, para quién y cómo contactar; conservar condiciones y datos confirmados. | Comparación con el contexto y la fuente empresarial. |
| Imágenes | Usar fotos autorizadas, nombres útiles, dimensiones adecuadas y texto alternativo contextual; reservar espacio para reducir saltos de diseño. | Archivo y revisión visual; no describir una foto solo por su nombre. |
| Enlaces y rutas | Hacer que las páginas pertinentes sean alcanzables con enlaces reales; corregir enlaces rotos y destinos del CTA. | Recorrido comprobado; no basta la existencia de un `onClick`. |
| Canónica | Resolver la URL principal con dominio real y coherencia con redirecciones y rutas. No apuntar todas las páginas distintas a la portada. | HTML y URL publicada, o pendiente si aún no hay dominio. |
| Sitemap | Listar únicamente URL públicas, canónicas y pertinentes; actualizarlo al cambiar rutas. | XML válido y revisión de los destinos publicados. |
| Robots e indexación | Revisar `robots.txt`, metadatos robots y cabeceras HTTP; mantener privadas las áreas que deban serlo. | Reglas por agente y respuesta HTTP observadas. |
| Datos estructurados | Elegir un tipo que corresponda al contenido y al negocio real; enlazar entidades coherentemente cuando aplique. | JSON válido, contraste con texto visible y validación externa si está disponible. |

La [guía inicial de Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) sirve para revisar claridad, rastreo y presentación del contenido. Los cambios deben responder al sitio concreto: no hay un número universal de palabras, imágenes o repeticiones que garantice posicionamiento.

## React y páginas exportadas de generadores

1. Identifica el framework y los comandos del proyecto. Verifica si la exportación contiene páginas HTML con contenido o un contenedor que se rellena en el navegador.
2. Compara el HTML recibido con el contenido que ve el visitante tras ejecutar JavaScript. Revisa errores de red, rutas, enlaces, metadatos y estados de carga.
3. No presentes un HTML inicial vacío como prueba de que Google jamás verá el contenido. Tampoco presentes una captura del navegador como prueba de que todos los rastreadores lo interpretarán igual.
4. Si la inspección muestra un problema, conserva el proyecto y elige el ajuste mínimo que pueda verificarse. El prerender puede convenir a una landing estable; SSR u otra arquitectura solo se justifican por necesidades demostradas.
5. Comprueba que las URL internas puedan abrirse directamente y que un recurso inexistente no se muestre siempre como una página correcta. Las respuestas HTTP y el contenido importan además de la apariencia.

Google documenta el procesamiento de JavaScript y sus límites en [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics). Usa esa fuente para diagnosticar el caso; no apliques una migración de framework como receta universal.

## Datos estructurados sin inventar el negocio

Consulta [Schema.org](https://schema.org/) y, para la elegibilidad en Google, la [documentación de datos estructurados](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data). El vocabulario admitido por Schema.org y las funciones concretas de Google no son equivalentes.

Usa el nombre, URL, dirección, teléfonos y horarios reales que estén confirmados. No crees puntuaciones, reseñas, precios, disponibilidad, credenciales profesionales o personas. Una reseña que el cliente aún no ha recibido no puede aparecer como prueba social.

Las preguntas frecuentes pueden ayudar a la persona aunque no produzcan un resultado enriquecido. No prometas estrellas ni resultados FAQ por añadir JSON-LD. Comprueba las condiciones vigentes de cada función antes de recomendarla.

## Salida útil para una persona no técnica

Explica cada cambio como una mejora concreta: «el título ahora dice qué servicio prestas y dónde», «el menú lleva a la sección correcta» o «falta que confirmes el horario». Distingue texto propuesto de dato confirmado. Una mejora de redacción no autoriza cambiar la oferta comercial ni presentar como real un precio de ejemplo.
