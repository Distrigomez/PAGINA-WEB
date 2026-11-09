import React from 'react';
import { MessageCircle, Sparkles, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Product } from '../data/distrigomezData';

interface ProductSpotlightProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
}

export const ProductSpotlight: React.FC<ProductSpotlightProps> = ({
  product,
  onOpenDetails,
  onAddToQuote
}) => {
  const waLink = `https://wa.me/573156557198?text=${encodeURIComponent(
    'Hola Distrigomez, me interesa cotizar el Polvo Decolorante Silver con Plex 9 Tonos Kaya Profesional x 500g al por mayor para mi salón.'
  )}`;

  return (
    <div className="mb-14 rounded-3xl overflow-hidden bg-gradient-to-br from-[#111111] via-[#1a0a14] to-[#2b0820] text-white shadow-2xl border border-pink-900/40 relative">
      
      {/* Ambient background glow matching the fuchsia silk */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EC0A8C]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#A84D8A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
        
        {/* Left Column: Editorial & Tech Specs */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#EC0A8C]" />
            Línea Profesional Destacada · Salón & Color
          </div>

          <div>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-1">
              Kaya Profesional
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Decolorante Silver en Polvo <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC0A8C] via-pink-400 to-[#A84D8A]">
                9 Tonos con Plex Technology
              </span>
            </h3>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed max-w-xl">
            Aclaración extrema y segura. La tecnología Plex protege y refuerza la estructura interna del cabello durante el proceso químico, permitiendo rubios más limpios y resistentes. Fórmula compacta 1:2 sin desprendimiento de polvo volátil.
          </p>

          {/* Key Advantages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="flex items-center gap-2.5 text-xs text-neutral-200">
              <CheckCircle2 className="w-4 h-4 text-[#EC0A8C] shrink-0" />
              <span>Aclara hasta 9 tonos reales</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-200">
              <CheckCircle2 className="w-4 h-4 text-[#EC0A8C] shrink-0" />
              <span>Protección activa con Plex</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-200">
              <CheckCircle2 className="w-4 h-4 text-[#A84D8A] shrink-0" />
              <span>Acción silver anti-amarillo</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-200">
              <CheckCircle2 className="w-4 h-4 text-[#A84D8A] shrink-0" />
              <span>Pote profesional de 500 gramos</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Cotizar al por mayor por WhatsApp
            </a>

            <button
              onClick={() => onOpenDetails(product)}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 rounded-xl border border-white/10 transition-all"
            >
              Ver detalles completos
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Right Column: Full-Bleed Product Image with the Silk Background */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            onClick={() => onOpenDetails(product)}
            className="group relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-pink-500/30 cursor-pointer bg-gradient-to-b from-pink-900/30 to-black/60 aspect-[4/5] sm:aspect-[4/4.8]"
          >
            {/* The real user photograph with its silky fuchsia background completely filling the space */}
            <img
              src="/public/assets/aistudio/21_abd13ca9.PNG"
              alt="Polvo Decolorante con Plex Kaya Profesional 500g"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />

            {/* Subtle gloss overlay & bottom badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-pink-100 flex items-center justify-between text-neutral-900">
              <div>
                <span className="text-[10px] font-bold text-[#EC0A8C] uppercase tracking-wider block">
                  Poder aclarante 9 tonos
                </span>
                <span className="text-xs font-extrabold block">
                  Pote 500 g / 17.6 oz
                </span>
              </div>
              <span className="text-xs font-bold text-[#EC0A8C] flex items-center gap-1">
                Consultar
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
