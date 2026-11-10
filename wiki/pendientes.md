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
- **Pendiente:** validar por catálogo vigente los nombres, presentaciones, claims, ingredientes, beneficios, precios y disponibilidad que aparecen en `PAGINA WEB/src/data/distrigomezData.ts`.
- **Confirmado para el decolorante Kaya:** con autorización de la cliente, la ficha ahora usa el nombre e información visibles en `DOCS/IMG_3178.PNG`; se omitieron ingredientes y precios no entregados. En cotización mayorista se oculta la presentación en texto. El peso impreso sigue visible dentro de la imagen del envase.
- **Pendiente:** decidir si las historias con nombres, ciudades, resultados y cifras de clientes de esa fuente son reales y están autorizadas. No presentarlas como testimonios verificados. Hay también una historia genérica de ejemplo en el texto empresarial.
- **Pendiente de seguridad antes de producción:** `AuthContext.tsx` incluye usuarios y contraseñas de demostración en el código del navegador y guarda las contraseñas de registro en texto legible dentro de `localStorage`. El flujo no es autenticación segura ni un backend; revisar y retirar/reemplazar antes de usar cuentas reales o presentar datos de clientes.
- **Pendiente:** confirmar si nombres municipales y tiempos de entrega por departamento del código corresponden a una política logística aprobada.

## Preparación y calidad técnica

- **Bloqueado durante la instalación:** `npm install` quedó sin salida ni archivos creados por más de un minuto y se interrumpió; no hay lockfile ni `node_modules/`. La causa no quedó confirmada. Repetir npm install cuando pueda completarse; no instalar dependencias globales.
- **Pendiente:** ejecutar compilación y lint. Scripts declarados: `npm run build`, `npm run lint`.
- **Pendiente:** arrancar `npm run dev` y comprobar la landing en escritorio/móvil, navegación, botones y cargas de imágenes. Algunas rutas apuntan a `/src/assets/...` o `/public/assets/...`; validar en navegador, no corregir a ciegas.
- **Pendiente:** verificar visualmente el nuevo arte del decolorante en catálogo, detalle y destacado después de instalar dependencias; validar también el texto de WhatsApp para cotización mayorista.
- **Pendiente:** averiguar si el sitio está publicado. No se realizó publicación ni acceso remoto.
- **Pendiente:** extraer texto estructurado del PDF si se requiere búsqueda literal; se revisó visualmente el render de sus siete páginas, pero no se encontró `pdftotext` para extracción automatizada.
- **Pendiente:** revisar el ZIP `tratamiento-datos-landing.zip` si la cliente lo solicita; se identificó en el paquete, pero no se instaló ni se inspeccionó su contenido.
