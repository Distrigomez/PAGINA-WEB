export interface Product {
  id: string;
  name: string;
  category: 'capilar' | 'tratamientos' | 'shampoo' | 'kits';
  categoryLabel: string;
  presentation: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  ingredients?: string;
  isFeatured?: boolean;
  image: string;
  wholesaleRef?: string;
  suggestedWholesalePrice?: number;
  suggestedRetailPrice?: number;
}

export const PRODUCTS: Product[] = [
  // 1
  {
    id: 'shampoo-cebolla-ajo',
    name: 'Shampoo Cebolla y Ajo',
    category: 'shampoo',
    categoryLabel: 'Línea Cebolla & Ajo',
    presentation: 'Envase 450 ml / 1000 ml',
    shortDesc: 'Estimula el crecimiento folicular, frena la caída y fortalece la hebra desde la raíz sin dejar olor.',
    fullDesc: 'Fórmula enriquecida con extracto natural de cebolla roja y ajo desodorizado. Actúa directamente sobre el folículo piloso acelerando el ciclo de crecimiento capilar, mejorando la circulación del cuero cabelludo y previniendo el quiebre.',
    benefits: [
      'Estimula el crecimiento rápido y saludable',
      'Reduce notablemente la caída por quiebre',
      'Limpia en profundidad sin resecar la fibra capilar',
      'Fórmula 100% desodorizada con fragancia floral fresca'
    ],
    isFeatured: true,
    image: '/src/assets/images/product_shampoo_cebolla_ajo_1794079444759.jpg',
    suggestedWholesalePrice: 13500,
    suggestedRetailPrice: 24000
  },
  // 2
  {
    id: 'shampoo-coctel-regenerador',
    name: 'Shampoo Cóctel Regenerador x 450ml (Kaya Profesional)',
    category: 'shampoo',
    categoryLabel: 'Línea Profesional & Brillo',
    presentation: 'Envase 450 ml / 15.2 fl. oz',
    shortDesc: 'Hidratante sin sal, libre de parabenos. Con coco, vitamina E y óleos botánicos. Fortalece, nutre, repara y aporta brillo extremo.',
    fullDesc: 'Shampoo hidratante sin sal Kaya Profesional Cóctel Regenerador. Fórmula especializada para cabellos maltratados y deshidratados. Libre de sal y parabenos. Limpia delicadamente mientras fortalece, nutre y repara la hebra capilar, aportando sedosidad y brillo extremo.',
    benefits: [
      'Fórmula hidratante 100% sin sal y libre de parabenos',
      'Enriquecido con extracto de coco y cápsulas de Vitamina E',
      'Triple acción: fortalece, nutre y repara la fibra capilar',
      'Aporta brillo extremo y sedosidad duradera',
      'Contenido neto original 450 ml (15.2 fl. oz)'
    ],
    isFeatured: true,
    image: '/public/assets/aistudio/IMG_3136_1c4c9b80.PNG',
    suggestedWholesalePrice: 14000,
    suggestedRetailPrice: 25000
  },
  // 3
  {
    id: 'mascarilla-cebolla-ajo',
    name: 'Mascarilla Tratamiento Capilar 4 en 1 Cebolla & Ajo x 600 mL (Kaya Profesional)',
    category: 'tratamientos',
    categoryLabel: 'Línea Cebolla & Ajo',
    presentation: 'Pote 600 mL',
    shortDesc: 'Tratamiento capilar 4 en 1 con cebolla y ajo. Acelera el crecimiento, fortalece el cabello, previene la caída y da brillo.',
    fullDesc: 'Mascarilla tratamiento capilar Kaya Profesional Cebolla & Ajo en presentación de 600 mL con fórmula 4 en 1. Previene la caída y estimula el crecimiento capilar acelerado. Fortalece la hebra capilar desde la raíz, aporta suavidad profunda y un brillo radiante sin dejar olor a cebolla.',
    benefits: [
      'Fórmula 4 en 1: acelera el crecimiento, fortalece, previene la caída y da brillo',
      'Estimula el folículo piloso para nacimiento de hebras más resistentes',
      'Fortalece cabellos delgados, quebradizos o debilitados',
      'Nutrición y suavidad profunda sin olor a cebolla',
      'Presentación profesional en pote de 600 mL'
    ],
    isFeatured: true,
    image: '/public/assets/aistudio/IMG_3172_1f0970e9.PNG',
    suggestedWholesalePrice: 16500,
    suggestedRetailPrice: 30000
  },
  // 4
  {
    id: 'kit-emprendedor-capilar',
    name: 'Kit Emprendedor Capilar Inicio',
    category: 'kits',
    categoryLabel: 'Distrigomez Emprende',
    presentation: 'Pack surtido 24 unidades',
    shortDesc: 'El combo perfecto para iniciar tu negocio de reventa capilar con el mejor margen de ganancia garantizado.',
    fullDesc: 'Selección de los productos más vendidos de Distrigomez: 10 Shampoos Cebolla y Ajo, 8 Mascarillas Reparadoras y 6 Shampoos Cóctel Regenerador. Incluye catálogo físico, asesoría de precios y material digital para tus estados de WhatsApp.',
    benefits: [
      'Margen de ganancia estimado entre 45% y 65%',
      'Productos de alta rotación comprobada en la Costa Atlántica',
      'Acompañamiento personalizado de un asesor comercial asignado',
      'Material de apoyo digital listo para compartir en redes'
    ],
    isFeatured: true,
    image: '/src/assets/images/emprende_hair_salon_1794079446884.jpg',
    suggestedWholesalePrice: 298000,
    suggestedRetailPrice: 560000
  },
  // 5
  {
    id: 'mascarilla-coctel-regenerador-600ml',
    name: 'Mascarilla Tratamiento Capilar Cóctel Regenerador x 600 mL (Kaya Profesional)',
    category: 'tratamientos',
    categoryLabel: 'Línea Profesional & Salón',
    presentation: 'Pote 600 mL',
    shortDesc: 'Tratamiento capilar intensivo que fortalece, nutre, repara y aporta brillo extremo. Con aceite de coco, extracto de zanahoria, macadamia, keratina y vitamina E.',
    fullDesc: 'Mascarilla tratamiento capilar Kaya Profesional Cóctel Regenerador en presentación de 600 mL. Fórmula avanzada con aceite de coco, extracto de zanahoria, macadamia, keratina y cápsulas activas de vitamina E. Fortalece la fibra capilar, nutre en profundidad y repara cabellos maltratados o deshidratados, dejando sedosidad duradera y brillo extremo.',
    benefits: [
      'Triple acción comprobada: fortalece, nutre y repara la hebra capilar',
      'Enriquecida con aceite de coco, extracto de zanahoria, macadamia y keratina',
      'Cápsulas activas de Vitamina E para nutrición antioxidante',
      'Aporta brillo extremo y desenredo sedoso inmediato',
      'Presentación profesional en pote de 600 mL'
    ],
    isFeatured: true,
    image: '/public/assets/aistudio/IMG_3145_ad47cde2.PNG',
    suggestedWholesalePrice: 16500,
    suggestedRetailPrice: 30000
  },
  // 6
  {
    id: 'tonico-capilar-anticaida',
    name: 'Tratamiento Capilar Anticaída Romero y Pantenol (Caja x 10 und x 20 mL) - Kaya Profesional',
    category: 'tratamientos',
    categoryLabel: 'Línea Profesional & Salón',
    presentation: 'Caja 10 und x 20 mL',
    shortDesc: 'Tratamiento capilar anticaída con romero y pantenol. Control ultra drops con acción reforzante que fortalece el folículo y frena la caída.',
    fullDesc: 'Tratamiento capilar profesional anticaída Kaya Profesional en presentación de caja con 10 unidades individuales de 20 mL (Control Ultra Drops). Fórmula reforzante con romero y pantenol. Oxigena el folículo, fortalece la raíz capilar y frena la caída prematura, estimulando el crecimiento de hebras más resistentes.',
    benefits: [
      'Control Ultra Drops con acción reforzante folicular intensiva',
      'Enriquecido con extracto puro de Romero y Pantenol (Pro-Vitamina B5)',
      'Fórmula no grasa de rápida absorción sin enjuague',
      'Fortalece la raíz capilar y reduce la caída por quiebre',
      'Presentación en caja de 10 unidades individuales de 20 mL con spray'
    ],
    isFeatured: true,
    image: '/public/assets/aistudio/IMG_3183_575b8016.PNG',
    suggestedWholesalePrice: 28000,
    suggestedRetailPrice: 48000
  },
  // 7
  {
    id: 'termo-protector-bifasico',
    name: 'Termoprotector y Desenredante Bifásico',
    category: 'capilar',
    categoryLabel: 'Cuidado Capilar',
    presentation: 'Spray 250 ml',
    shortDesc: 'Escudo térmico hasta 230°C para uso con secador o plancha, con filtro UV y brillo espejo.',
    fullDesc: 'Fórmula bifásica que une una fase hídrica de hidratación profunda y una fase lipídica de protección contra el calor extremo.',
    benefits: [
      'Protege contra el calor de planchas y secadores',
      'Evita que las puntas se abran o quemen',
      'Aroma fresco y duradero'
    ],
    image: '/src/assets/images/product_coctel_regenerador_1794079446893.jpg',
    suggestedWholesalePrice: 14000,
    suggestedRetailPrice: 25000
  },
  // 8
  {
    id: 'kit-duo-bomba-capilar',
    name: 'Dúo Bomba Capilar Cebolla y Ajo',
    category: 'kits',
    categoryLabel: 'Kits & Promos',
    presentation: 'Shampoo 450 ml + Mascarilla 300 g',
    shortDesc: 'La combinación estelar de Distrigomez para frenar la caída y recuperar el volumen en 21 días.',
    fullDesc: 'El tratamiento más solicitado por salones y clientes finales. Uso continuado para resultados visibles en fuerza, densidad y brillo.',
    benefits: [
      'Rutina completa de lavado y nutrición profunda',
      'Precio especial en combo para consumidor o reventa',
      'Resultados clínicamente apreciables en 3 semanas'
    ],
    image: '/src/assets/images/product_shampoo_cebolla_ajo_1794079444759.jpg',
    suggestedWholesalePrice: 26000,
    suggestedRetailPrice: 46000
  },
  // 9
  {
    id: 'polvo-decolorante-plex-500g',
    name: 'Polvo Decolorante con Plex x500g (Kaya Profesional)',
    category: 'tratamientos',
    categoryLabel: 'Coloración & Decoloración',
    presentation: 'Pote 500 g / 17.6 oz',
    shortDesc: 'Aclara hasta 9 tonos con Plex Technology. Fórmula compacta 1:2 de uso profesional que cuida la fibra capilar.',
    fullDesc: 'Decolorante Silver en Polvo Kaya Profesional de máximo poder aclarante de hasta 9 tonos. Su tecnología Plex avanzada protege y refuerza la estructura interna del cabello durante el proceso de decoloración, minimizando el quiebre y la porosidad. Fórmula compacta homogénea 1:2 (dust-free) con acción matizadora silver anti-amarillo.',
    benefits: [
      'Poder aclarante supremo de hasta 9 tonos reales',
      'Plex Technology que preserva la integridad y fuerza de la hebra',
      'Fórmula compacta 1:2 libre de polvo volátil (dust-free)',
      'Acción silver neutralizante contra reflejos cálidos y dorados',
      'Presentación profesional de 500 gramos de alto rendimiento'
    ],
    isFeatured: true,
    image: '/public/assets/aistudio/21_abd13ca9.PNG',
    suggestedWholesalePrice: 39000,
    suggestedRetailPrice: 68000
  },
  // 10
  {
    id: 'bombonera-coctel-regenerador-2000ml',
    name: 'Bombonera de Mascarilla Cóctel Regenerador x 2.000 mL (Kaya Profesional)',
    category: 'tratamientos',
    categoryLabel: 'Línea Profesional & Salón',
    presentation: 'Bombonera de 2.000 mL',
    shortDesc: 'Tratamiento capilar intensivo profesional en bombonera de 2.000 mL. Fortalece, nutre, repara y aporta brillo extremo.',
    fullDesc: 'Mascarilla tratamiento capilar Kaya Profesional Cóctel Regenerador en presentación Bombonera de 2.000 mL (2 Litros) de alto rendimiento para salones y peluquerías. Fórmula especializada que fortalece, nutre y repara profundamente la hebra capilar, dejando un brillo extremo y sedosidad duradera.',
    benefits: [
      'Presentación Bombonera profesional de 2.000 mL de máximo rendimiento para salón',
      'Triple acción comprobada: fortalece, nutre y repara la fibra capilar',
      'Enriquecida con cápsulas activas de Vitamina E',
      'Aporta brillo extremo y suavidad táctil desde la primera aplicación',
      'Ideal para hidrataciones profundas, repolarizaciones y servicio en tocador'
    ],
    isFeatured: true,
    image: '/public/assets/aistudio/IMG_3146_8a94c402.PNG',
    suggestedWholesalePrice: 42000,
    suggestedRetailPrice: 75000
  },
  // 11
  {
    id: 'oleo-reparador-puntas-seda',
    name: 'Óleo Reparador Puntas de Seda',
    category: 'capilar',
    categoryLabel: 'Finalizadores & Óleos',
    presentation: 'Frasco gotero 60 ml',
    shortDesc: 'Serum concentrado antifrizz de rápida absorción para puntas secas y abiertas.',
    fullDesc: 'Fórmula ligera no grasosa que alinea las cutículas capilares y aporta un velo protector contra la humedad y el sol tropical.',
    benefits: [
      'Cierra puntas abiertas al instante',
      'No deja sensación pesada ni grasosa',
      'Fragancia seductora y brillo cristalino'
    ],
    image: '/src/assets/images/hero_haircare_beauty_1794079444093.jpg',
    suggestedWholesalePrice: 11000,
    suggestedRetailPrice: 20000
  },
  // 12
  {
    id: 'shampoo-romero-quina',
    name: 'Shampoo Romero y Quina Crecimiento',
    category: 'shampoo',
    categoryLabel: 'Línea Botánica Natural',
    presentation: 'Envase 450 ml',
    shortDesc: 'Estimulante botánico tradicional que fortalece el folículo y controla el exceso de grasa.',
    fullDesc: 'Elaborado con infusión pura de hojas de romero y corteza de quina colombiana. Limpia el exceso de sebo permitiendo una correcta oxigenación capilar.',
    benefits: [
      'Equilibra la producción de grasa en el cuero cabelludo',
      'Aporta cuerpo y volumen a cabellos finos',
      'Aroma fresco herbal tonificante'
    ],
    image: '/src/assets/images/product_shampoo_cebolla_ajo_1794079444759.jpg',
    suggestedWholesalePrice: 13000,
    suggestedRetailPrice: 23000
  },
  // 13
  {
    id: 'mascarilla-macadamia-murumuru-600ml',
    name: 'Mascarilla Restauradora Intensiva 2 en 1 Macadamia & Murumuru x 600 mL (Kaya Profesional)',
    category: 'tratamientos',
    categoryLabel: 'Línea Profesional & Salón',
    presentation: 'Pote 600 mL',
    shortDesc: 'Mascarilla restauradora intensiva 2 en 1 con mantequilla de macadamia y murumuru. Nutre, repara y fortalece el cabello dejándolo más suave y brillante.',
    fullDesc: 'Mascarilla tratamiento capilar Kaya Profesional Restauradora Intensiva 2 en 1 en presentación de 600 mL. Formulada con aceites naturales y mantequilla pura de macadamia y murumuru. Nutre profundamente, repara la fibra capilar dañada y fortalece cada hebra, devolviendo vitalidad, suavidad sedosa y brillo saludable.',
    benefits: [
      'Fórmula 2 en 1 con aceites naturales y mantecas botánicas',
      'Enriquecida con mantequilla de macadamia y murumuru',
      'Nutre, repara y fortalece la estructura capilar de raíz a puntas',
      'Deja el cabello notablemente más suave, brillante y saludable',
      'Presentación profesional en pote de 600 mL'
    ],
    isFeatured: true,
    image: '/public/assets/aistudio/IMG_3148_0f1234b9.PNG',
    suggestedWholesalePrice: 16500,
    suggestedRetailPrice: 30000
  },
  // 14
  {
    id: 'crema-peinar-rizos-definidos',
    name: 'Crema para Peinar Rizos Definidos',
    category: 'capilar',
    categoryLabel: 'Línea Curly & Rizos',
    presentation: 'Envase con válvula 350 ml',
    shortDesc: 'Define ondas y rizos sin dejar efecto acartonado, con manteca de mango y karité.',
    fullDesc: 'Apta para método curly. Brinda fijación flexible y nutrición profunda a cabellos crespos, ondulados y afro, protegiéndolos de la humedad costera.',
    benefits: [
      'Rizos definidos, elásticos y con rebote natural',
      'Sin sulfatos agresivos ni siliconas pesadas',
      'Controla el encrespamiento todo el día'
    ],
    image: '/src/assets/images/hero_haircare_beauty_1794079444093.jpg',
    suggestedWholesalePrice: 14500,
    suggestedRetailPrice: 25000
  },
  // 15
  {
    id: 'shampoo-coco-hidratante-kaya',
    name: 'Shampoo con Coco Hidratante Sin Sal x 450ml (Kaya Profesional)',
    category: 'shampoo',
    categoryLabel: 'Línea Profesional & Nutrición',
    presentation: 'Envase 450 ml / 15.2 fl. oz',
    shortDesc: 'Hidratante sin sal con coco, libre de parabenos. Ideal para cabellos secos o maltratados por procesos químicos.',
    fullDesc: 'Shampoo hidratante sin sal Kaya Profesional con coco. Diseñado especialmente para recuperar y nutrir cabellos secos, porosos o maltratados por procesos químicos como tinturas, alisados o decoloraciones. Fórmula libre de sal y parabenos que aporta hidratación profunda, suavidad y elasticidad.',
    benefits: [
      'Fórmula hidratante 100% sin sal y libre de parabenos',
      'Enriquecido con extracto natural de coco',
      'Ideal para cabellos secos o maltratados por procesos químicos',
      'Aporta nutrición intensiva, suavidad táctil y brillo',
      'Contenido neto original 450 mL (15.2 fl. oz)'
    ],
    isFeatured: true,
    image: '/public/assets/aistudio/IMG_3137_3546389f.PNG',
    suggestedWholesalePrice: 14000,
    suggestedRetailPrice: 25000
  },
  // 16
  {
    id: 'mascarilla-coco-tratamiento-kaya',
    name: 'Mascarilla Tratamiento Capilar Coco x 600 mL (Kaya Profesional)',
    category: 'tratamientos',
    categoryLabel: 'Línea Profesional & Nutrición',
    presentation: 'Pote 600 mL',
    shortDesc: 'Tratamiento intensivo con coco ideal para cabello seco o maltratado por procesos químicos. Restaura la fibra capilar y aporta brillo.',
    fullDesc: 'Mascarilla tratamiento capilar Kaya Profesional con Coco en presentación de 600 mL. Tratamiento intensivo diseñado para restaurar la fibra capilar de cabellos secos o maltratados por procesos químicos como decoloraciones, tintes y alisados. Aporta hidratación profunda, elasticidad y brillo duradero.',
    benefits: [
      'Ideal para cabellos secos o maltratados por procesos químicos',
      'Restaura y sella la fibra capilar dañada',
      'Enriquecida con extracto concentrado de coco',
      'Aporta sedosidad táctil inmediata y brillo espejo',
      'Presentación en pote de 600 mL de excelente rendimiento'
    ],
    isFeatured: true,
    image: '/public/assets/aistudio/IMG_3144_bf0659a0.PNG',
    suggestedWholesalePrice: 16500,
    suggestedRetailPrice: 30000
  },
  // 17
  {
    id: 'kit-emprendedor-premium-salon',
    name: 'Kit Emprendedor Premium Salón',
    category: 'kits',
    categoryLabel: 'Distrigomez Emprende',
    presentation: 'Pack surtido 48 unidades',
    shortDesc: 'El paquete mayorista completo para abastecer peluquerías, salones y distribuidores regionales.',
    fullDesc: 'Incluye toda la gama de alta rotación de Distrigomez: 20 Shampoos surtidos, 16 Mascarillas reparadoras, 8 Termoprotectores y 4 Óleos de Argán. Máxima rentabilidad y precio de distribuidor directo de fábrica.',
    benefits: [
      'Descuento máximo de distribuidor mayorista',
      'Envío prioritario bonificado a cabeceras municipales',
      'Piezas publicitarias personalizadas para tu local',
      'Asesoría técnica y soporte telefónico directo'
    ],
    isFeatured: true,
    image: '/src/assets/images/emprende_hair_salon_1794079446884.jpg',
    suggestedWholesalePrice: 580000,
    suggestedRetailPrice: 1100000
  },
  // 18
  {
    id: 'spray-brillo-seda-instantaneo',
    name: 'Spray Brillo de Seda Instantáneo',
    category: 'capilar',
    categoryLabel: 'Finalizadores & Óleos',
    presentation: 'Aerosol / Spray 150 ml',
    shortDesc: 'Toque final de salón que aporta un velo de brillo luminoso y neutraliza olores ambientales.',
    fullDesc: 'Micro-bruma ultraligera que se pulveriza a 20 cm sobre el cabello peinado. Deja un reflejo brillante instantáneo sin apelmazar el cabello.',
    benefits: [
      'Brillo deslumbrante en segundos',
      'Protege contra el humo y olores de cocina o tabaco',
      'No aporta peso ni grasa'
    ],
    image: '/src/assets/images/hero_haircare_beauty_1794079444093.jpg',
    suggestedWholesalePrice: 12500,
    suggestedRetailPrice: 22000
  },
  // 19
  {
    id: 'shampoo-anticaspa-control-grasa',
    name: 'Shampoo Anticaspa y Control Grasa',
    category: 'shampoo',
    categoryLabel: 'Cuidado Capilar',
    presentation: 'Envase 400 ml',
    shortDesc: 'Elimina la descamación, alivia la picazón y purifica el cuero cabelludo sin resecar.',
    fullDesc: 'Fórmula dermatológicamente testeada con piritionato de zinc y árbol de té. Combate el hongo causante de la caspa desde la primera aplicación.',
    benefits: [
      'Alivio instantáneo de la irritación y comezón',
      'Controla la caspa seca y la caspa grasa',
      'Deja una sensación refrescante de menta'
    ],
    image: '/src/assets/images/product_shampoo_cebolla_ajo_1794079444759.jpg',
    suggestedWholesalePrice: 14000,
    suggestedRetailPrice: 25000
  },
  // 20
  {
    id: 'bombonera-mascarilla-macadamia-rizos',
    name: 'Bombonera de Mascarilla Macadamia & Vitamina E Define Rizos x 2.000 mL (Kaya Profesional)',
    category: 'tratamientos',
    categoryLabel: 'Línea Profesional & Salón',
    presentation: 'Bombonera de 2.000 mL',
    shortDesc: 'Bombonera gigante de 2.000 mL para cabello con rizos. Define rizos, controla el frizz, recupera la fibra y previene el envejecimiento prematuro.',
    fullDesc: 'Mascarilla tratamiento capilar Kaya Profesional Define Rizos con Macadamia & Vitamina E en presentación Bombonera de 2.000 mL (2 Litros). Ideal para salones de belleza y peluquerías. Formulada para definir el rizo natural, controlar el frizz ante la humedad, nutrir intensamente y recuperar la fibra capilar.',
    benefits: [
      'Presentación Bombonera profesional de 2.000 mL de máximo rendimiento',
      'Especializada en definir rizos naturales con movimiento y sin rigidez',
      'Controla el frizz rebelde y protege contra la humedad',
      'Recupera la fibra capilar y previene el envejecimiento prematuro',
      'Enriquecida con Macadamia nutritiva y cápsulas de Vitamina E',
      'Ideal para servicios de hidratación profunda y definición en salón'
    ],
    isFeatured: true,
    image: '/public/assets/aistudio/IMG_3171_4812d66b.PNG',
    suggestedWholesalePrice: 42000,
    suggestedRetailPrice: 75000
  },
  // 21
  {
    id: 'gel-cera-moldeadora-brillo',
    name: 'Cera Gel Moldeadora Fijación y Brillo',
    category: 'capilar',
    categoryLabel: 'Cuidado Capilar',
    presentation: 'Pote 200 g',
    shortDesc: 'Fijación duradera sin residuos blancos para peinados pulidos, baby hairs y trenzas.',
    fullDesc: 'Fórmula a base de agua con provitamina B5. Ideal para estilizar bordes, baby hairs, peinados recogidos y moños elegantes con acabado brillante.',
    benefits: [
      'No deja caspa ni residuos blancos al secar',
      'Fijación fuerte resistente al calor y sudor',
      'Se retira fácilmente con agua'
    ],
    image: '/src/assets/images/hero_haircare_beauty_1794079444093.jpg',
    suggestedWholesalePrice: 9500,
    suggestedRetailPrice: 17000
  },
  // 22
  {
    id: 'tratamiento-galon-maxi-loe',
    name: 'Tratamiento Capilar Galón Maxi-Loe Hidratación Profunda & Brillo Intenso',
    category: 'tratamientos',
    categoryLabel: 'Línea Profesional & Salón',
    presentation: 'Galón 3.800 mL / 4 Litros',
    shortDesc: 'Tratamiento capilar en galón garrafa profesional. Hidratación profunda y brillo intenso con keratina, aminoácidos, argán y aloe vera.',
    fullDesc: 'Tratamiento capilar profesional Maxi-Loe en presentación Galón (garrafa de alto rendimiento). Formulado para lavacabezas y salones de belleza de alto flujo. Combina keratina y aminoácidos con el poder nutritivo del aceite de argán y el aloe vera para brindar hidratación profunda y brillo intenso.',
    benefits: [
      'Presentación Galón profesional de máximo rendimiento para salones y lavacabezas',
      'Fórmula con Keratina y Aminoácidos de absorción rápida',
      'Enriquecido con aceite puro de Argán y Aloe Vera hidratante',
      'Aporta hidratación profunda y brillo intenso efecto espejo',
      'Excelente rentabilidad y costo por servicio en peluquería'
    ],
    isFeatured: true,
    image: '/public/assets/aistudio/IMG_3149_b8543999.PNG',
    suggestedWholesalePrice: 48000,
    suggestedRetailPrice: 85000
  },
  // 23
  {
    id: 'cascada-revitalizante-hialuronico-12und',
    name: 'Tratamiento Capilar Cascada Revitalizante con Ácido Hialurónico (Caja x 12 und x 15 mL) - Kaya Profesional',
    category: 'tratamientos',
    categoryLabel: 'Línea Profesional & Salón',
    presentation: 'Caja 12 und x 15 mL',
    shortDesc: 'Tratamiento capilar intensivo revitalizante con ácido hialurónico (HA). Dosis concentradas para rellenar la fibra, aportar brillo e hidratación.',
    fullDesc: 'Tratamiento capilar profesional Cascada Revitalizante de Kaya Profesional en presentación de caja con 12 unidades individuales de 15 mL. Enriquecido con ácido hialurónico de alta pureza. Rellena las microfisuras de la fibra capilar, devolviendo elasticidad, hidratación profunda y un brillo radiante sin sensación grasa.',
    benefits: [
      'Enriquecido con Ácido Hialurónico (HA) para relleno y revitalización de la hebra',
      'Hidratación profunda que devuelve la elasticidad a cabellos secos o tratados',
      'Efecto espejo de brillo inmediato y sedosidad táctil',
      'Presentación en caja de 12 unidades individuales de 15 mL de fácil aplicación',
      'Ideal para servicios de hidratación y revitalización exprés en salón'
    ],
    isFeatured: true,
    image: '/public/assets/aistudio/IMG_3186_d177665e.PNG',
    suggestedWholesalePrice: 28000,
    suggestedRetailPrice: 48000
  },
  // 24
  {
    id: 'kit-maxi-loe-liss-3pasos',
    name: 'Kit Alisado Progresivo Maxi-Loe Liss 3 Pasos (Kaya Profesional)',
    category: 'kits',
    categoryLabel: 'Kits & Alisados',
    presentation: 'Kit 3 Pasos (70 mL + 70 mL + 90 mL)',
    shortDesc: 'Sistema de alisado progresivo y nutrición en 3 pasos con aminoácidos, argán y aloe vera. Liso extremo sin amoniaco, fuerza y brillo.',
    fullDesc: 'Kit alisador capilar y tratamiento profesional Maxi-Loe Liss de Kaya Profesional en 3 pasos continuos. Paso 1: Shampoo Hidratante Sin Sal (70 mL) para limpieza profunda y flexibilidad. Paso 2: Tratamiento Alisador con aminoácidos sin amoniaco (70 mL) para liso extremo y fuerza. Paso 3: Mascarilla Nutritiva (90 mL) para un cabello sano, suave, brillante y rejuvenecido.',
    benefits: [
      'Sistema profesional completo en 3 pasos continuos listos para aplicar',
      'Paso 1 (70 mL): Shampoo sin sal con argán y aloe vera para limpieza profunda',
      'Paso 2 (70 mL): Alisador con aminoácidos sin amoniaco para liso extremo',
      'Paso 3 (90 mL): Mascarilla nutritiva selladora para brillo y suavidad',
      'Enriquecido con activos naturales de Argán y Aloe Vera',
      'Resultados profesionales de salón con aspecto rejuvenecedor'
    ],
    isFeatured: true,
    image: '/public/assets/aistudio/IMG_3182_c79d2072.PNG',
    suggestedWholesalePrice: 22000,
    suggestedRetailPrice: 38000
  },
  // 25
  {
    id: 'shampoo-cabellos-rizados-curly',
    name: 'Shampoo Low-Poo Rizos & Ondas',
    category: 'shampoo',
    categoryLabel: 'Línea Curly & Rizos',
    presentation: 'Envase 400 ml',
    shortDesc: 'Lavado suave con tensioactivos suaves que respetan el patrón natural de tus rizos.',
    fullDesc: 'Especialmente formulado sin sulfatos fuertes, siliconas insolubles ni aceites minerales. Limpia el cuero cabelludo preservando los rizos hidratados.',
    benefits: [
      'No reseca el patrón de rizo ni produce frizz',
      'Aporta elasticidad y rebote',
      'Con aloe vera refrescante'
    ],
    image: '/src/assets/images/product_shampoo_cebolla_ajo_1794079444759.jpg',
    suggestedWholesalePrice: 14000,
    suggestedRetailPrice: 25000
  },
  // 26
  {
    id: 'perfume-capilar-brillo-glamour',
    name: 'Perfume Capilar Fragancia & Brillo Glamour',
    category: 'capilar',
    categoryLabel: 'Finalizadores & Óleos',
    presentation: 'Frasco spray 100 ml',
    shortDesc: 'Aroma delicado y duradero con destellos de brillo sin alcohol desnaturalizante.',
    fullDesc: 'Mantiene tu cabello con aroma a flores exóticas y vainilla dulce durante todo el día, neutralizando olores de la calle y protegiendo contra los rayos solares.',
    benefits: [
      'No contiene alcohol resecante',
      'Aroma de alta fijación hasta por 24 horas',
      'Aporta brillo sutil y suavidad'
    ],
    image: '/src/assets/images/hero_haircare_beauty_1794079444093.jpg',
    suggestedWholesalePrice: 12000,
    suggestedRetailPrice: 22000
  },
  // 27
  {
    id: 'tratamiento-chocolate-keratina',
    name: 'Mascarilla Nutritiva Chocolate & Keratina',
    category: 'tratamientos',
    categoryLabel: 'Tratamientos & Brillo',
    presentation: 'Pote 500 g',
    shortDesc: 'Tratamiento a base de cacao puro para devolver brillo, cuerpo y fuerza a cabellos castaños y oscuros.',
    fullDesc: 'El cacao es rico en antioxidantes y magnesio, revitalizando el color natural de cabellos oscuros y sellando puntas con un aroma delicioso a chocolate.',
    benefits: [
      'Intensifica los reflejos en cabellos castaños y negros',
      'Nutre intensamente la fibra desnutrida',
      'Aroma chocolatoso adictivo'
    ],
    image: '/src/assets/images/product_mascarilla_cebolla_ajo_1794079445983.jpg',
    suggestedWholesalePrice: 15000,
    suggestedRetailPrice: 27000
  },
  // 28
  {
    id: 'gotas-de-seda-cristal',
    name: 'Gotas de Seda Cristal Antifrizz',
    category: 'capilar',
    categoryLabel: 'Finalizadores & Óleos',
    presentation: 'Frasco dosificador 30 ml',
    shortDesc: 'Fórmula clásica de rápida acción para sellar peinados y controlar cabellos voladores.',
    fullDesc: 'Basta una gota en la palma de las manos para domar el frizz en cualquier momento del día. Muy popular en carteras y neceseres de toda la Costa.',
    benefits: [
      'Tamaño práctico de cartera',
      'Efecto seda al tacto instantáneo',
      'Precio de impulso muy fácil de vender'
    ],
    image: '/src/assets/images/hero_haircare_beauty_1794079444093.jpg',
    suggestedWholesalePrice: 7000,
    suggestedRetailPrice: 14000
  },
  // 29
  {
    id: 'acondicionador-manzanilla-miel',
    name: 'Acondicionador Manzanilla & Miel Iluminador',
    category: 'capilar',
    categoryLabel: 'Cuidado Capilar',
    presentation: 'Envase 450 ml',
    shortDesc: 'Aclara gradualmente de manera natural y aporta reflejos dorados y brillo cálido.',
    fullDesc: 'Ideal para niños y adultos con cabellos rubios o castaños claros. Desenreda suavemente y potencia los reflejos dorados con extracto natural de manzanilla.',
    benefits: [
      'Realza los tonos dorados y rubios naturales',
      'Fórmula suave no irritante',
      'Aporta suavidad y brillo sedoso'
    ],
    image: '/src/assets/images/product_coctel_regenerador_1794079446893.jpg',
    suggestedWholesalePrice: 13000,
    suggestedRetailPrice: 23000
  },
  // 30
  {
    id: 'kit-trio-crecimiento-anticaida',
    name: 'Trío Crecimiento Acelerado & Anticaída',
    category: 'kits',
    categoryLabel: 'Kits & Promos',
    presentation: 'Shampoo 450ml + Mascarilla 300g + Tónico 120ml',
    shortDesc: 'La terapia integral de 3 pasos para frenar la caída y potenciar el nacimiento capilar.',
    fullDesc: 'El tratamiento más completo de Distrigomez. Paso 1: Limpieza folicular con Shampoo. Paso 2: Nutrición y sellado con Mascarilla. Paso 3: Estimulación diaria con Tónico.',
    benefits: [
      'Tratamiento intensivo de 3 fases clínicamente respaldado',
      'Mayor ahorro al comprar la rutina completa',
      'El kit favorito para regalar o emprender'
    ],
    isFeatured: true,
    image: '/src/assets/images/product_shampoo_cebolla_ajo_1794079444759.jpg',
    suggestedWholesalePrice: 38000,
    suggestedRetailPrice: 65000
  }
];

export const DEPARTMENTS_COVERAGE = [
  {
    name: 'Cesar',
    capital: 'Valledupar',
    cities: 'Valledupar, Aguachica, Agustín Codazzi, Bosconia, Curumaní, La Paz',
    days: '24 a 48 horas',
    highlights: 'Cobertura directa de rutas comerciales semanales.'
  },
  {
    name: 'La Guajira',
    capital: 'Riohacha',
    cities: 'Riohacha, Maicao, San Juan del Cesar, Fonseca, Villanueva',
    days: '24 a 48 horas',
    highlights: 'Despachos programados para mayoristas y salones.'
  },
  {
    name: 'Magdalena',
    capital: 'Santa Marta',
    cities: 'Santa Marta, Ciénaga, Fundación, El Banco, Plato',
    days: '24 a 48 horas',
    highlights: 'Rutas activas en toda la costa y municipios del sur.'
  },
  {
    name: 'Córdoba',
    capital: 'Montería',
    cities: 'Montería, Cereté, Lorica, Sahagún, Montelíbano, Planeta Rica',
    days: '24 a 48 horas',
    highlights: 'Amplia red de distribuidores y tiendas de belleza.'
  },
  {
    name: 'Sucre',
    capital: 'Sincelejo',
    cities: 'Sincelejo, Corozal, San Marcos, Sampués, Tolú',
    days: '24 a 48 horas',
    highlights: 'Atención cercana a emprendedoras y salones.'
  },
  {
    name: 'Atlántico',
    capital: 'Barranquilla',
    cities: 'Barranquilla, Soledad, Malambo, Sabanalarga, Baranoa',
    days: '24 horas',
    highlights: 'Entrega prioritaria y atención personalizada.'
  },
  {
    name: 'Bolívar',
    capital: 'Cartagena',
    cities: 'Cartagena, Magangué, El Carmen de Bolívar, Turbaco, Arjona',
    days: '24 a 48 horas',
    highlights: 'Despachos constantes a distribuidores y comercios.'
  },
  {
    name: 'Antioquia',
    capital: 'Medellín',
    cities: 'Medellín, Bello, Itagüí, Envigado, Rionegro, Apartadó, Caucasia',
    days: '48 a 72 horas',
    highlights: 'Envíos consolidados a todo el departamento.'
  }
];

export const ENTREPRENEURS_STORIES = [
  {
    name: 'Yurleidis Morales',
    location: 'Barranquilla, Atlántico',
    role: 'Emprendedora Capilar & Asesora',
    achievement: 'Comenzó con 12 Shampoos de Cebolla y Ajo y hoy surte a más de 45 clientas en su barrio.',
    story: 'Empecé ofreciéndolo a mis hermanas y vecinas por WhatsApp. Les encantó que no deja olor a cebolla y frena la caída de verdad. Distrigomez me capacitó en cómo explicar los beneficios y siempre me entrega puntual.',
    stats: '+45 clientas fijas · 2 años vendiendo'
  },
  {
    name: 'Carlos Andrés Díaz',
    location: 'Valledupar, Cesar',
    role: 'Propietario de Salón & Tienda de Belleza',
    achievement: 'Añadió la línea de Tratamiento Cóctel Regenerador a sus servicios de cepillado y repolarización.',
    story: 'Los precios al por mayor de Distrigomez me permitieron duplicar la ganancia por cada servicio. Las clientas sienten el cabello suave y se llevan el producto a casa para mantenerlo.',
    stats: '60% de margen de ganancia en salón'
  },
  {
    name: 'Marelvis Quintana',
    location: 'Montería, Córdoba',
    role: 'Distribuidora Independiente',
    achievement: 'Genera ingresos mensuales para los estudios de sus hijos distribuyendo kits en su municipio.',
    story: 'Tenía miedo de que los productos no rotaran, pero la gente los pide sola. La atención de los asesores de Distrigomez es muy cercana, como de familia.',
    stats: 'De 1 kit mensual a pedidos semanales'
  }
];

export const COMPANY_VALUES = [
  {
    title: 'Respeto',
    description: 'Valoramos la dignidad de cada persona y promovemos el trato digno en cada interacción con nuestros clientes y equipo.'
  },
  {
    title: 'Honestidad',
    description: 'Actuamos con total transparencia e integridad en nuestras relaciones comerciales, precios y asesorías.'
  },
  {
    title: 'Trabajo en equipo',
    description: 'Integramos conocimientos y esfuerzos con nuestros distribuidores para alcanzar metas compartidas de crecimiento.'
  },
  {
    title: 'Compromiso',
    description: 'Respondemos con puntualidad y responsabilidad a las necesidades de abastecimiento de nuestros clientes.'
  },
  {
    title: 'Vocación de servicio',
    description: 'Brindamos una atención amable, respetuosa y oportuna, orientada a generar relaciones comerciales duraderas.'
  }
];

export const ORGANIGRAMA_DATA = [
  {
    role: 'Gerencia General',
    desc: 'Liderazgo estratégico, dirección corporativa y expansión territorial en la Costa Atlántica y Colombia.',
    subordinates: [
      {
        role: 'Gerencia Administrativa',
        desc: 'Gestión operativa, logística de despachos y administración de inventarios.',
        staff: ['Aux. Administrativa', 'Auxiliar de Bodega']
      },
      {
        role: 'Gerencia Comercial',
        desc: 'Relacionamiento con clientes mayoristas, expansión de cobertura y soporte al emprendedor.',
        staff: ['Asesores Comerciales', 'Impulsadoras de Ventas']
      },
      {
        role: 'Gerencia Financiera',
        desc: 'Planificación fiscal, costos, políticas de precios justos y sostenibilidad del negocio.',
        staff: ['Contador', 'Auxiliar Contable']
      }
    ]
  }
];
