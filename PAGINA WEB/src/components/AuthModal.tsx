import React, { useState } from 'react';
import { useAuth, UserRole } from '../context/AuthContext';
import { X, Lock, Mail, User, Phone, MapPin, Eye, EyeOff, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authModalMode,
    setAuthModalMode,
    login,
    signup
  } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<UserRole>('emprendedor');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      if (authModalMode === 'login') {
        const res = await login(email, password);
        if (!res.success) {
          setErrorMsg(res.error || 'Error al iniciar sesión');
        }
      } else {
        const res = await signup({
          name,
          email,
          password,
          role,
          city,
          phone
        });
        if (!res.success) {
          setErrorMsg(res.error || 'Error al registrar la cuenta');
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Ocurrió un error inesperado');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (demoEmail: string) => {
    setErrorMsg(null);
    setLoading(true);
    await login(demoEmail, 'distri123');
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-neutral-100 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-neutral-600 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src="/public/assets/aistudio/Logo__1__f718972f.jpeg"
            alt="Logo Distrigomez"
            className="w-10 h-10 rounded-full object-cover shadow-sm"
          />
          <div>
            <h3 className="text-lg font-extrabold text-neutral-900">
              Distrigomez Portal Clientes
            </h3>
            <span className="text-xs text-[#EC0A8C] font-semibold">
              Acceso Mayorista & Emprendedores
            </span>
          </div>
        </div>

        {/* Tab switcher: Iniciar Sesión / Registro */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-neutral-100 rounded-xl mb-6 text-xs">
          <button
            type="button"
            onClick={() => {
              setErrorMsg(null);
              setAuthModalMode('login');
            }}
            className={`py-2 px-3 rounded-lg font-semibold transition-all ${
              authModalMode === 'login'
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            onClick={() => {
              setErrorMsg(null);
              setAuthModalMode('signup');
            }}
            className={`py-2 px-3 rounded-lg font-semibold transition-all ${
              authModalMode === 'signup'
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Registrarse
          </button>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {authModalMode === 'signup' && (
            <>
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Nombre Completo o Razón Social
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Peluquería Bella / Sandra Gómez"
                    className="w-full pl-9 pr-3.5 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#EC0A8C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Tipo de Negocio
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as UserRole)}
                  className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#EC0A8C]"
                >
                  <option value="emprendedor">Emprendedor(a) Independiente / Reventa</option>
                  <option value="salon">Peluquería / Salón de Belleza / Barbería</option>
                  <option value="tienda">Tienda de Cosméticos / Distribuidora</option>
                  <option value="detal">Cliente Detal (Uso personal)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Ciudad / Depto.
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Barranquilla"
                      className="w-full pl-8 pr-2.5 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#EC0A8C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    WhatsApp Celular
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="315 000 0000"
                      className="w-full pl-8 pr-2.5 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#EC0A8C]"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tuemail@ejemplo.com"
                className="w-full pl-9 pr-3.5 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#EC0A8C]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="w-full pl-9 pr-9 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#EC0A8C]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                aria-label="Ver u ocultar contraseña"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 text-xs font-bold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-50 mt-4"
          >
            <ShieldCheck className="w-4 h-4" />
            {loading
              ? 'Procesando...'
              : authModalMode === 'login'
              ? 'Iniciar Sesión Segura'
              : 'Crear Cuenta Mayorista'}
          </button>
        </form>

        {/* Fast Demo Access (Helper) */}
        {authModalMode === 'login' && (
          <div className="mt-6 pt-4 border-t border-neutral-100 text-center">
            <span className="text-[11px] text-neutral-500 block mb-2">
              ¿Quieres probar una cuenta demo al instante?
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleDemoLogin('mayorista@distrigomez.com')}
                className="flex-1 py-1.5 px-2 text-[11px] font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors flex items-center justify-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-[#EC0A8C]" />
                Demo Salón
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin('emprendedora@distrigomez.com')}
                className="flex-1 py-1.5 px-2 text-[11px] font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors flex items-center justify-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-[#A84D8A]" />
                Demo Emprendedora
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
