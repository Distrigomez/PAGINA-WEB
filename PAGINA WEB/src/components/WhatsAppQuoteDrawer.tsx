import React, { useState, useEffect } from 'react';
import { Product, PRODUCTS } from '../data/distrigomezData';
import { X, MessageCircle, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export interface QuoteItem {
  product: Product;
  quantity: number;
}

interface WhatsAppQuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClear: () => void;
}

export const WhatsAppQuoteDrawer: React.FC<WhatsAppQuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClear
}) => {
  const { user, saveQuoteToHistory } = useAuth();
  const [customerType, setCustomerType] = useState<'mayor' | 'detal'>('mayor');
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');

  // Auto-fill from authenticated user profile
  useEffect(() => {
    if (user) {
      setCustomerName(user.name);
      if (user.city) setCustomerCity(user.city);
      if (user.role !== 'detal') setCustomerType('mayor');
    }
  }, [user]);

  if (!isOpen) return null;

  const handleSendToWhatsApp = () => {
    let orderListText = '';
    const summaryItems: string[] = [];

    items.forEach((item, index) => {
      const includePresentation = customerType !== 'mayor' || !item.product.hidePresentationForWholesale;
      const presentation = includePresentation ? ` (${item.product.presentation})` : '';
      orderListText += `\n${index + 1}. ${item.product.name}${presentation} - Cantidad: ${item.quantity} unidades`;
      summaryItems.push(`${item.quantity}x ${item.product.name}`);
    });

    const typeLabel =
      customerType === 'mayor'
        ? 'AL POR MAYOR (Emprendimiento / Salón / Tienda)'
        : 'AL DETAL (Uso Personal)';

    const text = `¡Hola Distrigomez Salud y Belleza!
Quiero cotizar mi pedido con los siguientes datos:

*Nombre:* ${customerName || 'Cliente'}
*Ciudad de despacho:* ${customerCity || 'Por definir'}
*Modalidad:* ${typeLabel}

*Productos seleccionados (30 referencias disponibles):*${orderListText}

Quedo atento(a) a precios, disponibilidad y valor del flete. ¡Muchas gracias!`;

    // Save to quote history
    saveQuoteToHistory({
      itemsCount: items.length,
      totalUnits: items.reduce((sum, item) => sum + item.quantity, 0),
      mode: customerType,
      summary: summaryItems.slice(0, 3).join(', ') + (summaryItems.length > 3 ? '...' : '')
    });

    const url = `https://wa.me/573156557198?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm flex justify-end">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#EC0A8C]" />
            <h3 className="text-base font-bold text-neutral-900">
              Lista de Cotización WhatsApp
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label="Cerrar cotizador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 rounded-full bg-pink-50 text-[#EC0A8C] mx-auto flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-neutral-900">Tu lista está vacía</h4>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Explora nuestro catálogo de {PRODUCTS.length} productos capilares y agrega las referencias que deseas cotizar por WhatsApp.
              </p>
              <a
                href="#productos"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#EC0A8C] rounded-lg mt-2"
              >
                Ver los {PRODUCTS.length} productos
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : (
            <>
              {/* Customer Mode Selection */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-700 block">
                  Modalidad de compra:
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-neutral-100 rounded-xl text-xs">
                  <button
                    onClick={() => setCustomerType('mayor')}
                    className={`py-2 px-3 rounded-lg font-medium transition-all ${
                      customerType === 'mayor'
                        ? 'bg-white text-neutral-900 shadow-sm font-bold'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Al por Mayor (Salón / Emprender)
                  </button>
                  <button
                    onClick={() => setCustomerType('detal')}
                    className={`py-2 px-3 rounded-lg font-medium transition-all ${
                      customerType === 'detal'
                        ? 'bg-white text-neutral-900 shadow-sm font-bold'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Al Detal
                  </button>
                </div>
              </div>

              {/* Form details */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                    Tu Nombre o Salón
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ej. Ana Pérez"
                    className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#EC0A8C]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                    Ciudad / Municipio
                  </label>
                  <input
                    type="text"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    placeholder="Ej. Barranquilla"
                    className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#EC0A8C]"
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  <span>Productos seleccionados ({items.length})</span>
                  <button
                    onClick={onClear}
                    className="text-neutral-400 hover:text-rose-600 transition-colors flex items-center gap-1 font-normal lowercase"
                  >
                    <Trash2 className="w-3 h-3" />
                    vaciar
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/80 flex items-center gap-3"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 rounded-lg object-cover bg-neutral-200 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-neutral-900 truncate">
                        {item.product.name}
                      </div>
                      {(customerType !== 'mayor' || !item.product.hidePresentationForWholesale) && (
                        <div className="text-[11px] text-neutral-500">
                          {item.product.presentation}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                        }
                        className="w-6 h-6 rounded bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-100"
                        aria-label="Restar una unidad"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold tabular-nums w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-6 h-6 rounded bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-100"
                        aria-label="Sumar una unidad"
                      >
                        <Plus className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-1 text-neutral-400 hover:text-rose-600 transition-colors ml-1"
                        aria-label="Eliminar producto"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {items.length > 0 && (
          <div className="p-5 border-t border-neutral-100 bg-neutral-50 space-y-3">
            <div className="flex items-center justify-between text-xs text-neutral-600">
              <span>Total de unidades seleccionadas:</span>
              <span className="font-bold text-neutral-900 text-sm tabular-nums">
                {totalUnits} uds.
              </span>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-3.5 text-xs font-bold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Enviar pedido a WhatsApp (315 655 7198)
            </button>

            <p className="text-[11px] text-center text-neutral-500">
              Un asesor te indicará disponibilidad, precios especiales por volumen y tiempos de entrega.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
