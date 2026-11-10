import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, ShieldCheck, Truck, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface HeroProps {
  onSelectProduct: (productId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProduct }) => {
  const { user } = useAuth();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50/40 via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Quiet unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EC0A8C]">
              <span>Comercializadora Distrigomez S.A.S</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="text-[#A84D8A]">Desde 2019</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.15] text-balance">
              Salud y belleza, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC0A8C] via-[#B5006B] to-[#A84D8A]">
                precio al alcance de todos
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed text-pretty">
              Productos de belleza para el cuidado de tu cabello, al por mayor y al detal. 
              Pide por WhatsApp para tener el gusto de atenderte.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/573156557198?text=Hola%20Distrigomez,%20quiero%20hacer%20un%20pedido%20de%20productos%20para%20el%20cuidado%20capilar."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                Pedir por WhatsApp
              </a>

              <a
                href="#productos"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-800 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-xl transition-all"
              >
                Ver catálogo
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </a>
            </div>

            {/* Star Highlighted Products Pills / Links */}
            <div className="pt-4 border-t border-neutral-200/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                Línea capilar más solicitada:
              </p>
              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={() => onSelectProduct('shampoo-cebolla-ajo')}
                  className="px-3.5 py-1.5 text-xs font-medium bg-neutral-100 hover:bg-pink-100/70 hover:text-[#EC0A8C] text-neutral-800 rounded-lg transition-colors border border-neutral-200/60 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#EC0A8C]" />
                  Shampoo cebolla y ajo
                </button>
                <button
                  onClick={() => onSelectProduct('shampoo-coctel-regenerador')}
                  className="px-3.5 py-1.5 text-xs font-medium bg-neutral-100 hover:bg-pink-100/70 hover:text-[#EC0A8C] text-neutral-800 rounded-lg transition-colors border border-neutral-200/60 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#A84D8A]" />
                  Shampoo cóctel regenerador 450ml
                </button>
                <button
                  onClick={() => onSelectProduct('mascarilla-cebolla-ajo')}
                  className="px-3.5 py-1.5 text-xs font-medium bg-neutral-100 hover:bg-pink-100/70 hover:text-[#EC0A8C] text-neutral-800 rounded-lg transition-colors border border-neutral-200/60 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#B5006B]" />
                  Mascarilla cebolla y ajo 600ml
                </button>
                <button
                  onClick={() => onSelectProduct('tonico-capilar-anticaida')}
                  className="px-3.5 py-1.5 text-xs font-medium bg-teal-50 hover:bg-teal-600 text-teal-900 hover:text-white rounded-lg transition-colors border border-teal-200/80 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-teal-600 group-hover:text-white" />
                  Anticaída romero x10
                </button>
                <button
                  onClick={() => onSelectProduct('shampoo-coco-hidratante-kaya')}
                  className="px-3.5 py-1.5 text-xs font-medium bg-neutral-100 hover:bg-pink-100/70 hover:text-[#EC0A8C] text-neutral-800 rounded-lg transition-colors border border-neutral-200/60 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#EC0A8C]" />
                  Shampoo con coco 450ml
                </button>
                <button
                  onClick={() => onSelectProduct('mascarilla-coco-tratamiento-kaya')}
                  className="px-3.5 py-1.5 text-xs font-medium bg-neutral-100 hover:bg-pink-100/70 hover:text-[#EC0A8C] text-neutral-800 rounded-lg transition-colors border border-neutral-200/60 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#A84D8A]" />
                  Mascarilla coco 600ml
                </button>
                <button
                  onClick={() => onSelectProduct('mascarilla-coctel-regenerador-600ml')}
                  className="px-3.5 py-1.5 text-xs font-medium bg-neutral-100 hover:bg-pink-100/70 hover:text-[#EC0A8C] text-neutral-800 rounded-lg transition-colors border border-neutral-200/60 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#EC0A8C]" />
                  Mascarilla cóctel 600ml
                </button>
                <button
                  onClick={() => onSelectProduct('mascarilla-macadamia-murumuru-600ml')}
                  className="px-3.5 py-1.5 text-xs font-medium bg-amber-50 hover:bg-amber-500 text-amber-900 hover:text-white rounded-lg transition-colors border border-amber-200/80 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 group-hover:text-white" />
                  Mascarilla macadamia 2 en 1 600ml
                </button>
                <button
                  onClick={() => onSelectProduct('bombonera-coctel-regenerador-2000ml')}
                  className="px-3.5 py-1.5 text-xs font-semibold bg-pink-100/80 hover:bg-[#EC0A8C] text-[#EC0A8C] hover:text-white rounded-lg transition-colors border border-pink-300/80 flex items-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Bombonera de cóctel 2.000ml
                </button>
                <button
                  onClick={() => onSelectProduct('bombonera-mascarilla-macadamia-rizos')}
                  className="px-3.5 py-1.5 text-xs font-semibold bg-lime-100/80 hover:bg-lime-600 text-lime-900 hover:text-white rounded-lg transition-colors border border-lime-300/80 flex items-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-lime-600 group-hover:text-white" />
                  Bombonera de rizos 2.000ml
                </button>
                <button
                  onClick={() => onSelectProduct('tratamiento-galon-maxi-loe')}
                  className="px-3.5 py-1.5 text-xs font-semibold bg-emerald-50 hover:bg-emerald-600 text-emerald-900 hover:text-white rounded-lg transition-colors border border-emerald-300/80 flex items-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                  Galón Maxi-Loe 3.800ml
                </button>
                <button
                  onClick={() => onSelectProduct('kit-maxi-loe-liss-3pasos')}
                  className="px-3.5 py-1.5 text-xs font-semibold bg-lime-50 hover:bg-lime-600 text-lime-900 hover:text-white rounded-lg transition-colors border border-lime-300/80 flex items-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-lime-600 group-hover:text-white" />
                  Kit Maxi-Loe Liss 3 pasos
                </button>
                <button
                  onClick={() => onSelectProduct('cascada-revitalizante-hialuronico-12und')}
                  className="px-3.5 py-1.5 text-xs font-semibold bg-emerald-50 hover:bg-emerald-600 text-emerald-900 hover:text-white rounded-lg transition-colors border border-emerald-300/80 flex items-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                  Cascada Revitalizante x12
                </button>
                <button
                  onClick={() => onSelectProduct('polvo-decolorante-plex-500g')}
                  className="px-3.5 py-1.5 text-xs font-semibold bg-pink-50 hover:bg-[#EC0A8C] text-[#EC0A8C] hover:text-white rounded-lg transition-colors border border-pink-200/80 flex items-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Polvo decolorante con plex x500g
                </button>
              </div>
            </div>

            {/* Quick Proof strip */}
            <div className="grid grid-cols-3 gap-4 pt-2 text-neutral-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#EC0A8C] shrink-0" />
                <span className="text-xs font-medium">Marcas líderes garantizadas</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#A84D8A] shrink-0" />
                <span className="text-xs font-medium">Envíos a 8 departamentos</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#B5006B] shrink-0" />
                <span className="text-xs font-medium">Asesoría a emprendedores</span>
              </div>
            </div>

          </div>

          {/* Right Image Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-200/50 via-purple-200/40 to-pink-100/60 rounded-3xl blur-xl opacity-70 -z-10" />

              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-pink-100/60 bg-white aspect-[4/3] lg:aspect-[4/3.8]">
                <img
                  src="/src/assets/images/hero_haircare_beauty_1794079444093.jpg"
                  alt="Cuidado capilar y belleza Distrigomez"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Top Floating Logo Watermark Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl py-1.5 px-3 shadow-md border border-neutral-100 flex items-center gap-2">
                  <img
                    src="/public/assets/aistudio/Logo__1__f718972f.jpeg"
                    alt="Logo Distrigomez"
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-xs font-bold text-neutral-900">Distrigomez Oficial</span>
                </div>
                
                {/* Floating pill highlight */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-neutral-100/80 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-[#EC0A8C] uppercase tracking-wider">
                      Distrigomez Cuidado Capilar
                    </div>
                    <div className="text-xs font-extrabold text-neutral-900">
                      Ventas al por mayor y al detal
                    </div>
                  </div>
                  <a
                    href="#contacto"
                    className="text-xs font-semibold text-neutral-700 hover:text-[#EC0A8C] transition-colors flex items-center gap-1"
                  >
                    Atención directa
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Floating Luxury Decolorante con Plex Product Showcase Card */}
              <div
                onClick={() => onSelectProduct('polvo-decolorante-plex-500g')}
                className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-2xl border border-pink-200/80 items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300 z-20 group max-w-[280px]"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm border border-pink-200">
                  <img
                    src="/assets/aistudio/IMG_3178.PNG"
                    alt="Decolorante Silver Kaya Profesional con Plex Technology"
                    className="w-full h-full object-contain bg-white object-center group-hover:scale-[1.03] transition-transform duration-200"
                  />
                </div>
                <div className="min-w-0 pr-1">
                  <span className="text-[10px] font-bold text-[#EC0A8C] uppercase tracking-wider block">
                    Kaya Profesional
                  </span>
                  <span className="text-xs font-extrabold text-neutral-900 block truncate group-hover:text-[#EC0A8C] transition-colors">
                    Decolorante Plex 9 Tonos
                  </span>
                  {!user?.isWholesaleVerified && (
                    <span className="text-[11px] text-neutral-500 block">
                      Hasta 9 tonos
                    </span>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
