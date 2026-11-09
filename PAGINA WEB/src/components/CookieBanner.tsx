import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('distrigomez_cookies_consent');
    if (!consent) {
      // Delay showing so it's not aggressive
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('distrigomez_cookies_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:max-w-md z-40 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-neutral-200/90 animate-fadeIn">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-pink-50 rounded-xl text-[#EC0A8C] shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 flex-1">
          <h4 className="text-xs font-bold text-neutral-900">
            Nos tomamos en serio su privacidad.
          </h4>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Este sitio usa cookies para ofrecerte una mejor experiencia de navegación.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-lg transition-colors"
            >
              Aceptar
            </button>
            <button
              onClick={() => setVisible(false)}
              className="px-3 py-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-neutral-400 hover:text-neutral-700 p-1"
          aria-label="Cerrar aviso de cookies"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
