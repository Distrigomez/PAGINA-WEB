import React, { useState } from 'react';
import { MessageCircle, X, Store, ShoppingBag, HelpCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick Menu Popover */}
      {menuOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-neutral-100 p-4 animate-fadeIn space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <img
                src="/public/assets/aistudio/Logo__1__f718972f.jpeg"
                alt="Distrigomez"
                className="w-7 h-7 rounded-full object-cover"
              />
              <span className="text-xs font-bold text-neutral-900">Distrigomez Asesoría</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-1 text-neutral-400 hover:text-neutral-700 rounded-lg"
              aria-label="Cerrar opciones WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-neutral-500 leading-tight">
            Hola, ¿en qué podemos ayudarte hoy? Elige una opción para atenderte:
          </p>

          <div className="space-y-1.5">
            <a
              href="https://wa.me/573156557198?text=Hola%20Distrigomez,%20quiero%20conocer%20precios%20y%20hacer%20un%20pedido%20al%20por%20mayor."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2 rounded-lg bg-neutral-50 hover:bg-pink-50 text-neutral-800 hover:text-[#EC0A8C] text-xs font-medium flex items-center gap-2 transition-colors border border-neutral-200/60"
            >
              <ShoppingBag className="w-4 h-4 text-[#EC0A8C]" />
              Cotizar al por mayor
            </a>

            <a
              href="https://wa.me/573156557198?text=Hola%20Distrigomez,%20quiero%20informaci%C3%B3n%20para%20emprender%20con%20sus%20productos."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2 rounded-lg bg-neutral-50 hover:bg-pink-50 text-neutral-800 hover:text-[#EC0A8C] text-xs font-medium flex items-center gap-2 transition-colors border border-neutral-200/60"
            >
              <Store className="w-4 h-4 text-[#A84D8A]" />
              Quiero emprender
            </a>

            <a
              href="https://wa.me/573156557198?text=Hola%20Distrigomez,%20tengo%20una%20consulta%20sobre%20un%20producto."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2 rounded-lg bg-neutral-50 hover:bg-pink-50 text-neutral-800 hover:text-[#EC0A8C] text-xs font-medium flex items-center gap-2 transition-colors border border-neutral-200/60"
            >
              <HelpCircle className="w-4 h-4 text-[#EC0A8C]" />
              Consulta sobre un producto
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#EC0A8C] hover:bg-[#B5006B] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        aria-label="Abrir WhatsApp Distrigomez"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline text-xs font-bold whitespace-nowrap">
          Pide por WhatsApp
        </span>
      </button>

    </div>
  );
};
