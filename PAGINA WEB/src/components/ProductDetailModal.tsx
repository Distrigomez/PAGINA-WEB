import React from 'react';
import { Product } from '../data/distrigomezData';
import { X, MessageCircle, Plus, Check, CheckCircle2, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product) => void;
  isInQuote: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToQuote,
  isInQuote
}) => {
  const { user } = useAuth();
  if (!product) return null;

  const includePresentation = !(user?.isWholesaleVerified && product.hidePresentationForWholesale);

  const waLink = `https://wa.me/573156557198?text=${encodeURIComponent(
    `Hola Distrigomez, me interesa conocer más detalles y precios de: ${product.name}${includePresentation ? ` (${product.presentation})` : ''}.`
  )}`;

  const isBottleProduct =
    product.image.startsWith('/public/assets/aistudio/') ||
    product.image.startsWith('/assets/aistudio/');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-neutral-100 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-neutral-100 rounded-full text-neutral-600 transition-colors shadow-sm"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Image side */}
          <div
            className={`md:col-span-5 relative min-h-[340px] md:min-h-full overflow-hidden flex items-center justify-center ${
              isBottleProduct
                ? 'bg-white p-2 sm:p-4'
                : 'bg-gradient-to-br from-pink-100 via-white to-purple-100'
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full ${
                isBottleProduct
                  ? 'object-contain max-h-[390px] p-2 drop-shadow-md'
                  : 'object-cover'
              } object-center transition-all duration-300`}
              referrerPolicy="no-referrer"
            />
            {includePresentation && (
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-neutral-800 shadow-sm border border-neutral-200/50">
                {product.presentation}
              </div>
            )}
            {product.isFeatured && (
              <div className="absolute top-3 right-3 bg-[#EC0A8C] text-white px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm">
                Destacado
              </div>
            )}
          </div>

          {/* Details side */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-bold text-[#EC0A8C] uppercase tracking-wider">
                  {product.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 mt-0.5">
                  {product.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {product.fullDesc}
              </p>

              {/* Benefits list */}
              {product.benefits.length > 0 && <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#EC0A8C]" />
                  Beneficios Clave
                </h4>
                <ul className="space-y-1.5">
                  {product.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EC0A8C] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>}

            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-neutral-100 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onAddToQuote(product)}
                  className={`w-full py-2.5 px-3 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                    isInQuote
                      ? 'bg-emerald-600 text-white'
                      : 'bg-neutral-900 hover:bg-[#111111] text-white'
                  }`}
                >
                  {isInQuote ? (
                    <>
                      <Check className="w-4 h-4" />
                      En cotización
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      Agregar a lista
                    </>
                  )}
                </button>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 text-xs font-bold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Pedir por WhatsApp
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
