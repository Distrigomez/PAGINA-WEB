import React from 'react';
import { useAuth } from '../context/AuthContext';
import { X, User, LogOut, CheckCircle2, ShieldCheck, MapPin, Phone, Mail, ShoppingBag, Clock } from 'lucide-react';

interface UserProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserProfileDrawer: React.FC<UserProfileDrawerProps> = ({ isOpen, onClose }) => {
  const { user, logout, savedQuotes } = useAuth();

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm flex justify-end">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#EC0A8C]" />
            <h3 className="text-base font-bold text-neutral-900">
              Mi Perfil Comercial
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label="Cerrar perfil"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {/* User ID Card */}
          <div className="p-5 bg-gradient-to-br from-pink-50/60 via-white to-purple-50/60 rounded-2xl border border-pink-100 shadow-sm space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#EC0A8C] uppercase tracking-wider block">
                  {user.roleLabel}
                </span>
                <h4 className="text-lg font-extrabold text-neutral-900 mt-0.5">
                  {user.name}
                </h4>
              </div>
              <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-full" title="Verificado para precios mayoristas">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>

            <div className="space-y-1.5 text-xs text-neutral-600 pt-2 border-t border-pink-100/80">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <span>{user.email}</span>
              </div>
              {user.city && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{user.city}</span>
                </div>
              )}
              {user.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  <span>WhatsApp: {user.phone}</span>
                </div>
              )}
            </div>

            <div className="pt-2 text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Precios al por mayor y catálogo distribuidor desbloqueados
            </div>
          </div>

          {/* Historial de cotizaciones */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-neutral-500 uppercase tracking-wider">
              <span>Cotizaciones recientes</span>
              <span className="text-[11px] font-normal text-neutral-400">{savedQuotes.length} registradas</span>
            </div>

            {savedQuotes.length === 0 ? (
              <div className="p-4 bg-neutral-50 rounded-xl text-center text-neutral-500 text-xs">
                Aún no has generado cotizaciones en esta sesión. Cuando envíes un pedido por WhatsApp, quedará guardado aquí.
              </div>
            ) : (
              <div className="space-y-2">
                {savedQuotes.map((q) => (
                  <div key={q.id} className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/80 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-neutral-900 flex items-center gap-1">
                        <ShoppingBag className="w-3.5 h-3.5 text-[#EC0A8C]" />
                        {q.itemsCount} productos ({q.totalUnits} uds.)
                      </span>
                      <span className="text-[10px] text-neutral-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {q.date}
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-600 truncate">
                      {q.summary}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between">
          <span className="text-xs text-neutral-500">Sesión activa</span>
          <button
            onClick={() => {
              logout();
              onClose();
            }}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};
