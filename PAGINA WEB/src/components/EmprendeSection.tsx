import React, { useState } from 'react';
import { ENTREPRENEURS_STORIES } from '../data/distrigomezData';
import {
  MessageCircle,
  TrendingUp,
  Store,
  Users2,
  Calculator,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Share2
} from 'lucide-react';

interface EmprendeSectionProps {
  onOpenStoryModal: () => void;
}

export const EmprendeSection: React.FC<EmprendeSectionProps> = ({ onOpenStoryModal }) => {
  // Profit simulator state
  const [packUnits, setPackUnits] = useState<number>(24);
  const [wholesaleUnitCost, setWholesaleUnitCost] = useState<number>(14000);
  const [retailUnitPrice, setRetailUnitPrice] = useState<number>(24000);

  const totalInvestment = packUnits * wholesaleUnitCost;
  const totalGrossRevenue = packUnits * retailUnitPrice;
  const estimatedProfit = totalGrossRevenue - totalInvestment;
  const marginPercentage = totalGrossRevenue > 0 ? Math.round((estimatedProfit / totalGrossRevenue) * 100) : 0;

  return (
    <section id="emprende" className="py-16 lg:py-24 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EC0A8C] mb-2">
            <span>Oportunidad de Negocio</span>
            <span aria-hidden="true">·</span>
            <span>Comercializadora Distrigomez</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Distrigomez Emprende
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Inicia o potencia tu negocio capilar con productos de alta demanda y precios mayoristas accesibles.
          </p>
        </div>

        {/* 1. Productos para Emprender Callout */}
        <div className="bg-gradient-to-br from-pink-50/70 via-white to-purple-50/60 rounded-3xl p-6 sm:p-10 border border-pink-100 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#EC0A8C] uppercase tracking-wider">
                Productos para emprender
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight">
                Productos para revender, con sus beneficios. Escríbenos y te contamos el precio al por mayor.
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Nuestra línea de Cebolla y Ajo y Cóctel Regenerador tiene una rotación comprobada en peluquerías, salones de belleza, tiendas de cosméticos y ventas directas por catálogo en toda la Costa Atlántica.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/573156557198?text=Hola%20Distrigomez,%20quiero%20conocer%20la%20lista%20de%20precios%20al%20por%20mayor%20para%20emprender."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-xl shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Solicitar lista de precios mayorista
                </a>
                <a
                  href="#productos"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-xl transition-all"
                >
                  Explorar catálogo de reventa
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-pink-200/60 shadow-md">
                <img
                  src="/src/assets/images/emprende_hair_salon_1794079446884.jpg"
                  alt="Emprendedora con salón de belleza y productos Distrigomez"
                  className="w-full h-64 object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>

        {/* 2. Tu Negocio Comienza Aquí (4 Steps) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#EC0A8C] uppercase tracking-wider">
              Paso a Paso
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
              Tu negocio comienza aquí
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Así empiezas a vender con Distrigomez:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="relative bg-neutral-50 p-6 rounded-2xl border border-neutral-200/80 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#EC0A8C] font-bold text-sm flex items-center justify-center mb-4">
                  01
                </div>
                <h4 className="text-base font-bold text-neutral-900 mb-2">
                  Escríbenos por WhatsApp
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Cuéntanos qué negocio quieres armar, tu ciudad y si tienes salón, tienda o venta independiente.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-200/60 text-[11px] font-medium text-[#EC0A8C]">
                Asesoría inmediata
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-neutral-50 p-6 rounded-2xl border border-neutral-200/80 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#EC0A8C] font-bold text-sm flex items-center justify-center mb-4">
                  02
                </div>
                <h4 className="text-base font-bold text-neutral-900 mb-2">
                  Elige los productos
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Selecciona los productos que quieres revender. Puedes elegir kits armados o cajas por producto.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-200/60 text-[11px] font-medium text-[#EC0A8C]">
                Flexibilidad total
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-neutral-50 p-6 rounded-2xl border border-neutral-200/80 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#A84D8A] font-bold text-sm flex items-center justify-center mb-4">
                  03
                </div>
                <h4 className="text-base font-bold text-neutral-900 mb-2">
                  Recibe tu pedido
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Despachamos oportunamente a tu municipio en 24 a 48 horas con empaque seguro y sellado.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-200/60 text-[11px] font-medium text-[#A84D8A]">
                Despacho ágil
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative bg-pink-50/60 p-6 rounded-2xl border border-pink-200/80 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EC0A8C] text-white font-bold text-sm flex items-center justify-center mb-4">
                  04
                </div>
                <h4 className="text-base font-bold text-neutral-900 mb-2">
                  Haz crecer tu negocio
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Con la asesoría constante de nuestro equipo comercial, material publicitario e incentivos por volumen.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-pink-200/80 text-[11px] font-bold text-[#EC0A8C]">
                Crecimiento continuo
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/573156557198?text=Hola%20Distrigomez,%20quiero%20emprender%20con%20ustedes.%20%C2%BFC%C3%B3mo%20podemos%20empezar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-xl shadow-md transition-all"
            >
              <Store className="w-4 h-4" />
              Quiero emprender con ustedes
            </a>
          </div>
        </div>

        {/* Interactive Simulator: Calculadora de Ganancias */}
        <div className="bg-[#111111] text-white rounded-3xl p-6 sm:p-10 mb-20 shadow-xl border border-neutral-800">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-pink-400 uppercase tracking-widest mb-1">
              <Calculator className="w-4 h-4" />
              Simulador Interactivo para Emprendedores
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Calcula tu ganancia estimada con Distrigomez
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2">
              Ajusta la cantidad de unidades y los precios estimados para proyectar tu retorno de inversión.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders and controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Preset buttons */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-neutral-400">Packs sugeridos:</span>
                <button
                  onClick={() => {
                    setPackUnits(12);
                    setWholesaleUnitCost(15000);
                    setRetailUnitPrice(24000);
                  }}
                  className={`px-3 py-1 text-xs rounded-lg border transition-all ${
                    packUnits === 12
                      ? 'bg-pink-600 border-pink-500 text-white font-bold'
                      : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  Caja inicial 12 unid.
                </button>
                <button
                  onClick={() => {
                    setPackUnits(24);
                    setWholesaleUnitCost(14000);
                    setRetailUnitPrice(24000);
                  }}
                  className={`px-3 py-1 text-xs rounded-lg border transition-all ${
                    packUnits === 24
                      ? 'bg-pink-600 border-pink-500 text-white font-bold'
                      : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  Pack Emprendedor 24 unid.
                </button>
                <button
                  onClick={() => {
                    setPackUnits(48);
                    setWholesaleUnitCost(13000);
                    setRetailUnitPrice(24000);
                  }}
                  className={`px-3 py-1 text-xs rounded-lg border transition-all ${
                    packUnits === 48
                      ? 'bg-pink-600 border-pink-500 text-white font-bold'
                      : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  Mayorista Salón 48 unid.
                </button>
              </div>

              {/* Pack units slider */}
              <div>
                <div className="flex justify-between text-xs font-medium text-neutral-300 mb-2">
                  <span>Cantidad de unidades a comercializar:</span>
                  <span className="font-bold text-white text-sm tabular-nums">{packUnits} unidades</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="120"
                  step="6"
                  value={packUnits}
                  onChange={(e) => setPackUnits(Number(e.target.value))}
                  className="w-full accent-[#EC0A8C] cursor-pointer"
                />
              </div>

              {/* Wholesale cost per unit */}
              <div>
                <div className="flex justify-between text-xs font-medium text-neutral-300 mb-2">
                  <span>Costo distribuidor por unidad aprox.:</span>
                  <span className="font-bold text-pink-400 text-sm tabular-nums">
                    ${wholesaleUnitCost.toLocaleString('es-CO')} COP
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="25000"
                  step="1000"
                  value={wholesaleUnitCost}
                  onChange={(e) => setWholesaleUnitCost(Number(e.target.value))}
                  className="w-full accent-[#EC0A8C] cursor-pointer"
                />
              </div>

              {/* Retail price */}
              <div>
                <div className="flex justify-between text-xs font-medium text-neutral-300 mb-2">
                  <span>Precio de venta al público sugerido:</span>
                  <span className="font-bold text-emerald-400 text-sm tabular-nums">
                    ${retailUnitPrice.toLocaleString('es-CO')} COP
                  </span>
                </div>
                <input
                  type="range"
                  min="18000"
                  max="40000"
                  step="1000"
                  value={retailUnitPrice}
                  onChange={(e) => setRetailUnitPrice(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

            </div>

            {/* Results card */}
            <div className="lg:col-span-5 bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Proyección Financiera
              </div>

              <div className="space-y-3 pb-4 border-b border-neutral-800 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Tu inversión total:</span>
                  <span className="text-white font-semibold tabular-nums">
                    ${totalInvestment.toLocaleString('es-CO')} COP
                  </span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Venta total estimada:</span>
                  <span className="text-white font-semibold tabular-nums">
                    ${totalGrossRevenue.toLocaleString('es-CO')} COP
                  </span>
                </div>
              </div>

              <div>
                <div className="text-xs text-neutral-400 mb-1">Tu ganancia neta estimada:</div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300 tabular-nums">
                  ${estimatedProfit.toLocaleString('es-CO')} COP
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Margen de ganancia: {marginPercentage}%
                </div>
              </div>

              <a
                href={`https://wa.me/573156557198?text=${encodeURIComponent(
                  `Hola Distrigomez, me interesa iniciar con un pedido estimado de ${packUnits} unidades para emprender.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-xs font-bold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-xl flex items-center justify-center gap-2 transition-all mt-4"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Cotizar este lote con un asesor
              </a>
            </div>

          </div>
        </div>

        {/* 3. Emprendedores que Inspiran (Testimonials) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-[#EC0A8C] uppercase tracking-wider">
                Casos Reales
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
                Emprendedores que inspiran
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Historias de clientes que venden nuestros productos y hacen crecer su negocio.
              </p>
            </div>
            
            <button
              onClick={onOpenStoryModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors shrink-0"
            >
              <Share2 className="w-3.5 h-3.5" />
              Cuéntanos tu historia
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENTREPRENEURS_STORIES.map((story) => (
              <div
                key={story.name}
                className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200/80 flex flex-col justify-between hover:border-[#EC0A8C]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                    <span className="font-semibold text-neutral-800">{story.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{story.role}</span>
                  </div>

                  <h4 className="text-base font-bold text-neutral-900 mb-2">
                    {story.name}
                  </h4>

                  <p className="text-xs text-neutral-700 italic leading-relaxed mb-4">
                    "{story.story}"
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200/60">
                  <span className="text-[11px] font-semibold text-[#EC0A8C]">
                    {story.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Consejos para Vender Más */}
        <div className="bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200/80">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#A84D8A] uppercase tracking-wider">
              Guía de Éxito
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
              Consejos para vender más
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Ideas simples para conseguir clientes y organizar tus ganancias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Advice 1 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/70 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-pink-100 flex items-center justify-center text-[#EC0A8C] mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 mb-2">
                Consigue clientes
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Empieza por familiares, vecinos y conocidos. Cuéntales qué vendes, pide que te recomienden y ofrece resolver sus dudas sobre cada producto.
              </p>
            </div>

            {/* Advice 2 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/70 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center text-[#A84D8A] mb-4">
                <Share2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 mb-2">
                Promociona por WhatsApp y redes
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Publica fotos de los productos en tus estados e historias, explica para qué sirve cada uno y responde rápido. Comparte el catálogo de esta página con tus clientes.
              </p>
            </div>

            {/* Advice 3 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/70 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-pink-100 flex items-center justify-center text-[#EC0A8C] mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 mb-2">
                Organiza tus ganancias
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Anota cada compra y cada venta. Separa el dinero del negocio del personal y guarda una parte para volver a comprar producto.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
