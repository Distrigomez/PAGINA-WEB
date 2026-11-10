---
tipo: pendientes
estado: abierto
creado: 2026-11-09
actualizado: 2026-11-10
tags: [pendientes, verificacion]
fuentes: [../DOCS/, ../PAGINA WEB/src/]
---

# Pendientes

## Confirmaciones empresariales

- **Pendiente:** confirmar fecha oficial de fundación. El texto empresarial señala 31 de enero de 2019; el PDF institucional señala 21 de febrero de 2017. Ver [[empresa]] y [[documentos-y-activos]].
- **Pendiente:** verificar vigencia del horario, WhatsApp, correo, cobertura y dominio antes de publicar ajustes.
- **Pendiente:** validar por catálogo vigente los nombres, presentaciones, claims, ingredientes, beneficios y precios que aparecen en `PAGINA WEB/src/data/distrigomezData.ts`. No se mostrará inventario disponible como conteo público.
- **Confirmado para el decolorante Kaya:** con autorización de la cliente, la ficha ahora usa el nombre e información visibles en `DOCS/IMG_3178.PNG`; se omitieron ingredientes y precios no entregados. En cotización mayorista se oculta la presentación en texto. El peso impreso sigue visible dentro de la imagen del envase.
- **Confirmado para Maxi-Loe Liss Paso 2:** se añadió una ficha distinta del kit de 3 pasos, a partir de `DOCS/IMG_3219.PNG`. No se incluyeron ingredientes ni precio en texto; la presentación se oculta al cotizar al por mayor. La imagen contiene ingredientes y 1.000 ml impresos, por lo que esa información sigue visible en el arte.
- **Confirmado para Shampoo Kaya Cebolla & Ajo:** la nueva imagen `DOCS/IMG_3221.PNG` actualiza la ficha existente. El arte recibido muestra 450 ml; el registro previo también incluye 1.000 ml, presentación que queda por verificar. El precio previo se conservó.
- **Confirmado por corrección de la cliente:** el tratamiento Maxi-Loe asociado a `DOCS/IMG_3149.PNG` es de 2.000 ml, no de galón. La imagen `DOCS/IMG_3179.PNG` es otro producto: Maxi-Loe Sellante Galón. Sus fichas quedaron separadas; no hay precio incorporado para ellas.
- **Confirmado para fotos recientes:** `DOCS/IMG_3184.PNG` muestra Cascada Revitalizante con ácido hialurónico y reemplaza su arte anterior. `DOCS/IMG_3185.PNG` muestra Ultra Reestructurante Kaya Profesional; se creó una ficha nueva a partir de la etiqueta. Ambas presentaciones se ocultan en cotización mayorista.
- **Pendiente:** revisar exactitud de precios y claims heredados del catálogo original antes de publicación. Las imágenes pueden contener presentaciones o textos que permanecen impresos en el empaque aunque se omitan en la ficha mayorista.
- **Pendiente:** decidir si las historias con nombres, ciudades, resultados y cifras de clientes de esa fuente son reales y están autorizadas. No presentarlas como testimonios verificados. Hay también una historia genérica de ejemplo en el texto empresarial.
- **Pendiente de seguridad antes de producción:** `AuthContext.tsx` incluye usuarios y contraseñas de demostración en el código del navegador y guarda las contraseñas de registro en texto legible dentro de `localStorage`. El flujo no es autenticación segura ni un backend; revisar y retirar/reemplazar antes de usar cuentas reales o presentar datos de clientes.
- **Pendiente:** confirmar si nombres municipales y tiempos de entrega por departamento del código corresponden a una política logística aprobada.

## Preparación y calidad técnica

- **Confirmado:** `npm run build` y `npm run lint` finalizaron correctamente el 2026-11-10, tras resolver el peer dependency de esbuild.
- **Pendiente:** corregir el desbordamiento horizontal que se observó en una vista estrecha y completar revisión visual en escritorio y celular.
- **Pendiente:** validar presentación y precios originales de otras fichas, incluido el tamaño 1.000 ml de Shampoo Cebolla & Ajo, que no aparece en la imagen actual.
- **Confirmado:** la vista local no demuestra publicación. No se realizó publicación ni se verificó URL pública.
- **Pendiente:** extraer texto estructurado del PDF si se requiere búsqueda literal; se revisó visualmente el render de sus siete páginas, pero no se encontró `pdftotext` para extracción automatizada.
- **Pendiente:** revisar el ZIP `tratamiento-datos-landing.zip` si la cliente lo solicita; se identificó en el paquete, pero no se instaló ni se inspeccionó su contenido.
