import React from 'react';
import { MessageCircle, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/public/assets/aistudio/Logo__1__f718972f.jpeg"
                alt="Logo Distrigomez"
                className="w-12 h-12 rounded-full object-cover border border-neutral-700"
              />
              <div>
                <span className="text-lg font-bold tracking-tight text-white block">
                  Distrigomez Salud y Belleza
                </span>
                <span className="text-xs text-pink-400 font-medium">
                  Comercializadora Distrigomez S.A.S
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Distribuidora y comercializadora de productos para el cuidado personal, belleza y cuidado capilar al por mayor y al detal. Empresa familiar fundada el 31 de enero de 2019.
            </p>

            <div className="pt-2 text-xs font-semibold text-pink-300">
              “SALUD Y BELLEZA, PRECIO AL ALCANCE DE TODOS”
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Navegación
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#nosotros" className="hover:text-pink-400 transition-colors">
                  Nosotros (Historia, Misión, Valores)
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-pink-400 transition-colors">
                  Todos nuestros productos
                </a>
              </li>
              <li>
                <a href="#emprende" className="hover:text-pink-400 transition-colors">
                  Distrigomez Emprende
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-pink-400 transition-colors">
                  Contáctanos y Cobertura
                </a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Contacto Directo
            </div>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#EC0A8C] shrink-0" />
                <a
                  href="https://wa.me/573156557198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: 315 655 7198
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A84D8A] shrink-0" />
                <a
                  href="mailto:distrigomezsaludybelleza@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  distrigomezsaludybelleza@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>
                  Cobertura en Cesar, La Guajira, Magdalena, Córdoba, Sucre, Atlántico, Bolívar y Antioquia.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 Comercializadora Distrigomez S.A.S · Distrigomez Salud y Belleza ·{' '}
            <a
              href="https://www.distrigomez.com.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors underline"
            >
              www.distrigomez.com.co
            </a>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
