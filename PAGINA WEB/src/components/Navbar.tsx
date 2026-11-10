import React, { useState } from 'react';
import { MessageCircle, Menu, X, ShoppingBag, User, LogIn, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  quoteCount: number;
  onOpenQuoteDrawer: () => void;
  onOpenProfileDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  quoteCount,
  onOpenQuoteDrawer,
  onOpenProfileDrawer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, openAuthModal } = useAuth();

  const navLinks = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Productos', href: '#productos' },
    { label: 'Distrigomez Emprende', href: '#emprende' },
    { label: 'Contáctanos', href: '#contacto' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Brand Zone */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <img
            src="/public/assets/aistudio/Logo__1__f718972f.jpeg"
            alt="Logo Distrigomez Salud y Belleza"
            className="w-12 h-12 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#111111] flex items-center gap-1.5">
              Distrigomez
              <span className="text-[#EC0A8C] text-xs font-semibold uppercase tracking-wider hidden sm:inline-block">
                Salud y Belleza
              </span>
            </span>
            <span className="text-[11px] text-neutral-500 hidden sm:block">
              Al por mayor y al detal
            </span>
          </div>
        </a>

        {/* Clean Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#EC0A8C] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* User Auth Trigger */}
          {isAuthenticated && user ? (
            <button
              onClick={onOpenProfileDrawer}
              className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-2 rounded-xl bg-pink-50 hover:bg-pink-100/80 text-neutral-900 border border-pink-200/60 transition-colors text-xs font-semibold"
              title="Ver mi perfil comercial"
            >
              <div className="w-6 h-6 rounded-full bg-[#EC0A8C] text-white flex items-center justify-center font-bold text-[10px]">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="hidden lg:inline truncate max-w-[110px]">{user.name.split(' ')[0]}</span>
              <span className="hidden xl:inline text-[10px] font-bold text-[#EC0A8C] uppercase">
                {user.isWholesaleVerified ? 'Mayorista' : 'Cliente'}
              </span>
            </button>
          ) : (
            <button
              onClick={() => openAuthModal('login')}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-[#EC0A8C] hover:bg-neutral-100 rounded-lg transition-colors whitespace-nowrap"
            >
              <LogIn className="w-4 h-4 text-neutral-500" />
              <span className="hidden sm:inline">Ingresar</span>
            </button>
          )}

          {/* Quote cart button */}
          <button
            onClick={onOpenQuoteDrawer}
            className="relative p-2.5 text-neutral-700 hover:text-[#EC0A8C] hover:bg-pink-50/60 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
            title="Ver lista de cotización"
            aria-label="Lista de cotización"
          >
            <ShoppingBag className="w-5 h-5 text-neutral-800" />
            <span className="hidden lg:inline text-neutral-800 font-semibold">Cotización</span>
            {quoteCount > 0 && (
              <span className="bg-[#EC0A8C] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center -ml-0.5 animate-pulse">
                {quoteCount}
              </span>
            )}
          </button>

          {/* Primary WhatsApp CTA */}
          <a
            href="https://wa.me/573156557198?text=Hola%20Distrigomez,%20me%20gustar%C3%ADa%20conocer%20precios%20y%20disponibilidad%20de%20sus%20productos."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Escríbenos
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-[#EC0A8C] rounded-lg"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-neutral-800 hover:text-[#EC0A8C] border-b border-neutral-100"
            >
              {link.label}
            </a>
          ))}
          
          <div className="pt-2 flex flex-col gap-2">
            {isAuthenticated && user ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProfileDrawer();
                }}
                className="w-full flex items-center justify-between p-3 bg-pink-50 rounded-xl text-left border border-pink-200/60"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900">{user.name}</div>
                  <div className="text-[11px] text-[#EC0A8C]">{user.roleLabel}</div>
                </div>
                <User className="w-4 h-4 text-[#EC0A8C]" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal('login');
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg"
              >
                <LogIn className="w-4 h-4" />
                Ingresar o Registrarse (Mayorista)
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteDrawer();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              Ver lista de cotización ({quoteCount})
            </button>
            <a
              href="https://wa.me/573156557198?text=Hola%20Distrigomez,%20me%20gustar%C3%ADa%20conocer%20precios%20y%20disponibilidad."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Escríbenos al WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
