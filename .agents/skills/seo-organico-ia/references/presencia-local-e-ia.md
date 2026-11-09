---
tipo: referencia-de-skill
estado: vigente
creado: 2026-11-04
actualizado: 2026-11-04
tags: [seo-local, busquedas-ia, robots]
fuentes: ["https://developers.google.com/search/docs/appearance/ai-features", "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide", "https://developers.openai.com/api/docs/bots", "https://support.google.com/business/answer/7091"]
---

# Presencia local y búsquedas con IA

## Hacer reconocible a la empresa

Revisa coherencia entre web y datos confirmados: nombre comercial, ubicación o zona de atención, teléfono, horarios, oferta y canales. Si hay varias sedes, cada una debe mostrar sus propios datos sin inventar presencia en ciudades donde no se presta el servicio.

La página puede explicar cómo llegar, qué servicio se presta en cada sede y qué debe preparar el visitante. No publiques direcciones privadas ni datos personales de empleados por inferencia. El Perfil de Empresa debe administrarlo su titular autorizado: guía su verificación o revisión, sin afirmar que se completó si no hay evidencia.

Las reseñas se solicitan a clientes reales mediante un proceso permitido; no se fabrican ni se compran. No se ofrece una posición en el mapa como resultado garantizado. [Orientación oficial de Google para resultados locales](https://support.google.com/business/answer/7091).

## Google Search y sus funciones de IA

La documentación de Google mantiene los fundamentos de búsqueda para sus experiencias de IA: contenido accesible, útil y rastreable, organización comprensible y datos consistentes. No exige un tipo nuevo de marcado ni un archivo especial de IA para participar. La elegibilidad tampoco asegura que una página sea rastreada, indexada o mostrada. [Funciones de IA y la web](https://developers.google.com/search/docs/appearance/ai-features).

Por ello, esta skill no convierte `llms.txt` en un requisito, no fragmenta artificialmente todo el contenido ni recomienda menciones falsas para perseguir respuestas de IA. Una empresa debe aportar información propia y comprobable, no texto intercambiable que repita lo que ya existe. [Guía de Google sobre optimización para IA](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

## OpenAI: búsqueda y entrenamiento son decisiones distintas

Antes de modificar `robots.txt`, identificar la intención del propietario y las reglas actuales:

| Agente | Uso descrito por OpenAI | Decisión que debe registrarse |
|---|---|---|
| `OAI-SearchBot` | Descubrimiento para resultados de búsqueda de ChatGPT. | Permitir o restringir la participación en esa búsqueda. |
| `GPTBot` | Recopilación que puede utilizarse para entrenamiento de modelos. | Permitir o restringir ese uso de entrenamiento. |
| `ChatGPT-User` | Accesos activados por acciones de usuarios. | No tratarlo como sustituto de las reglas del rastreador de búsqueda. |

La [documentación oficial de OpenAI](https://developers.openai.com/api/docs/bots) explica que los controles de búsqueda y entrenamiento son independientes. No hagas ambos cambios como si fueran una sola autorización. Revisa también bloqueos del servidor o CDN cuando exista acceso; una regla en el archivo no prueba que las solicitudes puedan llegar.

No prometas que permitir un rastreador producirá una mención. Una consulta aislada a ChatGPT tampoco permite medir una posición permanente.

## Evaluación de recursos compartidos en redes

Trata cada recurso como una propuesta que se contrasta con documentación oficial y con el proyecto. Registra enlace, fecha, afirmación y resultado de la comprobación. Descarta recomendaciones que dependan de reseñas ficticias, enlaces artificiales, contenido engañoso o garantías de ranking.

El enlace `https://marbuilds.dev/resources/seo-web-con-ia` no pudo leerse mediante la herramienta web en la revisión del 04/11/2026. Por tanto, su contenido y sus recomendaciones quedan **no verificados**. No se presenta el fallo de acceso como prueba de que el autor o el recurso sean incorrectos. Una revisión posterior podrá incorporar el texto si está disponible y si sus afirmaciones se contrastan.
