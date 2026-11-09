import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

interface EntrepreneurStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EntrepreneurStoryModal: React.FC<EntrepreneurStoryModalProps> = ({
  isOpen,
  onClose
}) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [story, setStory] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `¡Hola Distrigomez! Quiero compartir mi historia con ustedes:
*Nombre:* ${name}
*Ciudad:* ${city}
*Tipo de negocio:* ${businessType}
*Mi historia de crecimiento:*
${story}`;

    const url = `https://wa.me/573156557198?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-100 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-neutral-600 transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#EC0A8C] uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            Distrigomez Emprende
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
            Cuéntanos tu historia
          </h3>
          <p className="text-xs text-neutral-600 mt-1">
            ¿Vendes productos Distrigomez en tu salón, tienda o con tus conocidos? Comparte tu experiencia y sé parte de nuestros emprendedores destacados.
          </p>
        </div>

        {sent ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-neutral-900">
              ¡Muchas gracias por compartir!
            </h4>
            <p className="text-xs text-neutral-600 max-w-xs mx-auto">
              Tu mensaje ha sido enviado por WhatsApp a nuestro equipo de comunicaciones y asesoría.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold bg-neutral-900 text-white rounded-lg hover:bg-neutral-800"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Tu Nombre Completo
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Carmen Rodríguez"
                className="w-full px-3.5 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#EC0A8C]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Ciudad o Municipio
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ej. Santa Marta"
                  className="w-full px-3.5 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#EC0A8C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Tipo de Negocio
                </label>
                <input
                  type="text"
                  required
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  placeholder="Ej. Salón de belleza, reventa..."
                  className="w-full px-3.5 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#EC0A8C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Tu experiencia (cómo empezaste, qué lograste)
              </label>
              <textarea
                rows={4}
                required
                value={story}
                onChange={(e) => setStory(e.target.value)}
                placeholder="Cuéntanos cómo conociste Distrigomez, qué productos son tus favoritos y cómo te ha ayudado a generar ingresos..."
                className="w-full px-3.5 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#EC0A8C]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-xs font-bold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Compartir testimonio por WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
