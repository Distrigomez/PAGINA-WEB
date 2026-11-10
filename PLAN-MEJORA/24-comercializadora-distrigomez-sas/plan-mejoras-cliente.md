---
tipo: checklist-de-mejoras
estado: propuesta-pendiente-de-aprobacion
creado: 2026-11-09
actualizado: 2026-11-10
tags: [landing, checklist, propuesta]
fuentes:
  - solicitud-de-la-cliente-2026-11-09
  - captura-de-google-ai-studio-adjunta-2026-11-09
  - ../../DOCS/Distrigomez Salud y Belleza.md
  - ../../PAGINA WEB/src/components/Navbar.tsx
  - ../../PAGINA WEB/src/components/ProductsCatalog.tsx
  - ../../PAGINA WEB/src/components/EmprendeSection.tsx
---

# Plan de mejora de la landing de Distrigomez

## Alcance y estado

Este archivo recoge los cambios solicitados y propuestas adicionales. **Es un plan, no una autorización para modificar la página.** No se aplicará ningún punto hasta que la cliente lo indique expresamente. Una casilla solo se marca `[x]` cuando la tarea se haya implementado, comprobado y explicado.

La captura adjunta muestra la vista de Google AI Studio. El código local está en `../../PAGINA WEB/`; antes de cada cambio se confirmará que la parte observada corresponde a esa versión.

## Skills solicitadas

- [x] Instalar `seo-organico-ia` en `../../.agents/skills/seo-organico-ia/`, con su archivo de instrucciones, referencias y script local.
- [x] Instalar `emil-design-eng` en `../../.agents/skills/emil-design-eng/` desde el repositorio oficial de Emil Kowalski.
- [ ] Integrar o ejecutar cualquiera de estas skills durante una mejora de la página. Requiere que la cliente autorice el cambio concreto.

## Cambios solicitados por la cliente

### 1. Etiqueta de Productos en el navbar

- [ ] Cambiar la etiqueta visible `Productos (30)` por `Productos`, sin mostrar la cantidad.
- [ ] Comprobar el enlace y su versión móvil.

**Interpretación provisional:** se conserva el resto de enlaces del navbar y solo se quita el conteo del enlace Productos. Si la solicitud significa dejar Productos como único enlace del menú, confirmar antes de implementarlo.

**Quedará comprobado cuando:** el menú muestre `Productos` sin cifra y lleve al catálogo tanto en escritorio como en móvil.

### 2. Aviso destacado, filtros y paginación del catálogo

- [ ] Colocar los filtros de categoría y búsqueda debajo de la publicidad o producto destacado de la línea profesional.
- [ ] Mostrar un máximo de 8 productos por página.
- [ ] Añadir controles de página anterior, siguiente y número de página, con estado desactivado cuando corresponda.
- [ ] Hacer que búsqueda y categoría se apliquen antes de paginar; recalcular el total de páginas y volver a la página 1 cuando cambie un filtro.
- [ ] Mostrar un estado claro cuando una búsqueda no encuentre productos y conservar la opción para restablecer filtros.
- [ ] Revisar el orden, los controles y el resultado en escritorio y móvil, también con combinaciones de filtros.

**Quedará comprobado cuando:** nunca aparezcan más de 8 resultados por página, todas las coincidencias se puedan recorrer y la paginación siga correcta al buscar o cambiar de categoría.

### 3. Quitar la paleta visible de la página

- [ ] Localizar la sección pública que presenta la paleta oficial, sus muestras y sus códigos de color; retirarla de la landing.
- [ ] Buscar otras menciones o imágenes públicas de la paleta y retirarlas también.
- [ ] Conservar intactos el original de `DOCS/` y los colores internos necesarios para mantener la identidad visual del diseño.
- [ ] Revisar la página local en escritorio y móvil para confirmar que no quede publicada la paleta.

**Quedará comprobado cuando:** la página ya no muestre la sección, los códigos ni una imagen de la paleta, y el diseño de marca siga usando sus estilos.

### 4. Aclaración en el simulador de costos/ganancias

- [ ] Añadir junto a los valores y resultados del simulador una aclaración visible: **«Valores sugeridos y estimados; pueden cambiar sin previo aviso. Consulta el precio vigente con un asesor.»**
- [ ] Comprobar que la nota se lea bien en celular y que quede asociada visualmente al simulador.
- [ ] Confirmar con la empresa que la redacción representa sus condiciones comerciales antes de publicar.

**Quedará comprobado cuando:** quien use el simulador entienda que los valores no son una cotización ni un precio garantizado.

## Oportunidades adicionales — requieren verificación y aprobación

Estas ideas **no están aprobadas para implementación**. Primero se revisará el alcance con la cliente; cada una se acepta, rechaza o ajusta antes de tocar el sitio.

### A. Revisar exactitud de catálogo y afirmaciones

- [ ] Verificar nombres, presentaciones, disponibilidad, beneficios, precios y márgenes frente al catálogo vigente de la empresa.
- [ ] Confirmar autorización de testimonios, nombres, ciudades, cifras y resultados mostrados en la página; retirar lo que no esté respaldado o autorizado.

### B. Revisar privacidad y funciones de cuenta

- [ ] Explicar que el inicio de sesión local del proyecto es demostrativo: las contraseñas se guardan en el navegador en texto legible y no hay autenticación de servidor.
- [ ] Acordar si se quitan esas pantallas de una landing pública o si se delimita un proyecto aparte para autenticación real. No convertir esta mejora en cuentas de clientes sin definir alcance.

### C. Accesibilidad y uso en celular

- [ ] Revisar navegación por teclado, foco visible, nombres accesibles, contraste, tamaño de botones, menú móvil, filtros y paginación.
- [ ] Probar las acciones principales con celular y teclado, y corregir solo los problemas observados que se aprueben.

### D. Imágenes y velocidad

- [ ] Medir qué imágenes pesan más y revisar carga diferida, dimensiones reservadas y formatos compatibles.
- [ ] Optimizar únicamente copias técnicas seleccionadas, conservando originales en `DOCS/`, y comparar la calidad visual antes de aprobar.

### E. SEO básico y presencia pública

- [ ] Revisar título, descripción, encabezados, textos alternativos, URL canónica, robots y sitemap con la skill `seo-organico-ia`.
- [ ] Confirmar dominio, horarios, zona atendida y datos comerciales antes de publicar marcado estructurado o cambios de indexación.
- [ ] Separar recomendaciones locales de cualquier acción en cuentas externas; no prometer posiciones ni resultados de búsqueda.

### F. Contacto y medición

- [ ] Verificar los destinos de los enlaces de WhatsApp y del correo, sin convertir WhatsApp en bot ni afirmar que un formulario recibe mensajes si no se comprueba.
- [ ] Si la empresa lo aprueba, definir una medición mínima de consultas sin recopilar datos innecesarios ni instalar herramientas pagas por iniciativa propia.

## Aprobación y registro

- [ ] Agregar/actualizar la ficha del decolorante Kaya con Plex, hasta 9 tonos, usando `DOCS/IMG_3178.PNG`; omitir ingredientes y no mostrar la presentación en la cotización al por mayor. No se añadió precio. Implementado; falta compilar y revisar visualmente.

- **Registro 2026-11-10 — producto autorizado:** se actualizó la ficha ya existente del catálogo y se copió la imagen exacta a `PAGINA WEB/public/assets/aistudio/IMG_3178.PNG`. Se quitó contenido no comprobado de la ficha. El peso de 500 g aún se ve impreso en la foto del envase. La verificación de compilación y visual está pendiente porque faltan dependencias (`node_modules/`).

- **Decisiones pendientes:** interpretación del navbar y aprobación individual de las oportunidades A–F.
- **Estado de implementación:** los cuatro cambios originales de la sección “Cambios solicitados por la cliente” siguen pendientes; la ficha del producto se actualizó por autorización expresa del 2026-11-10. Las oportunidades A–F siguen sujetas a verificación y aprobación.
- **Registro de avance:** anotar aquí fecha, punto autorizado, archivo cambiado, comprobaciones y resultado después de cada paso. Marcar `[x]` solo tras verificar.
