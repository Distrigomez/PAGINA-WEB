import React, { useState } from 'react';
import { DEPARTMENTS_COVERAGE } from '../data/distrigomezData';
import {
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  Send,
  Truck,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const ContactCoverageSection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState(DEPARTMENTS_COVERAGE[0]);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState<'mayor' | 'detal' | 'emprender'>('mayor');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel =
      inquiryType === 'mayor'
        ? 'Precios al por mayor'
        : inquiryType === 'emprender'
        ? 'Emprender con Distrigomez'
        : 'Compra al detal';

    const text = `Hola Distrigomez, mi nombre es ${name || 'Cliente'} desde ${city || 'mi ciudad'}.
Interés: ${typeLabel}
Teléfono: ${phone || 'N/A'}
Mensaje: ${notes || 'Quisiera recibir asesoría y catálogo con precios.'}`;

    const url = `https://wa.me/573156557198?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-[#FAFAFB] border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EC0A8C] mb-2">
            <span>Atención Inmediata</span>
            <span aria-hidden="true">·</span>
            <span>Comercializadora Distrigomez</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Contáctanos
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Escríbenos por WhatsApp y un asesor te responde con precios, disponibilidad y tiempos de entrega.
          </p>
        </div>

        {/* 2-Column Main Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Direct channels and Horario */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Big Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-pink-100 text-[#EC0A8C] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 fill-[#EC0A8C]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Línea de Atención WhatsApp
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                    315 655 7198
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-600 mb-5 leading-relaxed">
                Nuestros asesores comerciales te responderán en minutos para asesorarte en tu pedido o emprendimiento.
              </p>
              <a
                href="https://wa.me/573156557198?text=Hola%20Distrigomez,%20deseo%20comunicarme%20con%20un%20asesor."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Abrir chat en WhatsApp
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#A84D8A] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Correo Electrónico
                </span>
                <div className="mt-1">
                  <a
                    href="mailto:distrigomezsaludybelleza@gmail.com"
                    className="text-sm font-semibold text-neutral-900 hover:text-[#EC0A8C] transition-colors break-all"
                  >
                    distrigomezsaludybelleza@gmail.com
                  </a>
                </div>
                <p className="text-xs text-neutral-500 mt-1">
                  Para cotizaciones institucionales, facturación y proveedores.
                </p>
              </div>
            </div>

            {/* Horario de Atención */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
                <Clock className="w-4 h-4 text-[#EC0A8C]" />
                Horario de atención
              </div>
              
              <div className="space-y-3 text-xs text-neutral-700">
                <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                  <span className="font-semibold text-neutral-900">Lunes a viernes:</span>
                  <span className="text-neutral-600 tabular-nums">
                    8:30 am a 12:00 m y 2:00 pm a 6:00 pm
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                  <span className="font-semibold text-neutral-900">Sábados:</span>
                  <span className="text-neutral-600 tabular-nums">
                    8:00 am a 12:30 pm
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 text-neutral-500">
                  <span className="font-semibold">Domingos y festivos:</span>
                  <span className="text-rose-600 font-medium">Cerrado</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Quick Contact / Quote Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm">
            <div className="max-w-md mb-6">
              <span className="text-xs font-bold text-[#EC0A8C] uppercase tracking-wider">
                Escríbenos en 1 Minuto
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">
                Envía tus datos y te atendemos
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Elige qué necesitas y te conectaremos con el asesor de tu zona.
              </p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Nombre o Empresa
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. María Gómez"
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC0A8C]/20 focus:border-[#EC0A8C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Ciudad / Municipio
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ej. Barranquilla, Valledupar..."
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC0A8C]/20 focus:border-[#EC0A8C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Número de WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. 300 123 4567"
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC0A8C]/20 focus:border-[#EC0A8C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Tipo de compra
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC0A8C]/20 focus:border-[#EC0A8C]"
                  >
                    <option value="mayor">Precios al por mayor (Distribución / Salón)</option>
                    <option value="emprender">Quiero emprender con Distrigomez</option>
                    <option value="detal">Compra al detal (Uso personal)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Productos de interés o consulta
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Me interesa cotizar 24 Shampoos y Mascarillas de Cebolla y Ajo para mi peluquería..."
                  className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC0A8C]/20 focus:border-[#EC0A8C]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs font-bold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                Enviar consulta por WhatsApp
              </button>

              {submitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Se ha generado tu mensaje. Te atenderemos con gusto por WhatsApp.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Cobertura Regional ("Llegamos a") */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-[#EC0A8C] uppercase tracking-wider mb-1">
              <Truck className="w-4 h-4" />
              Rutas y Logística
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Llegamos a
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Despachamos de manera regular y oportuna a 8 departamentos estratégicos en Colombia:
            </p>
          </div>

          {/* Interactive Department Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {DEPARTMENTS_COVERAGE.map((dept) => (
              <button
                key={dept.name}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  selectedDept.name === dept.name
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-[#EC0A8C]" />
                {dept.name}
              </button>
            ))}
          </div>

          {/* Department Detail Card */}
          <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/80 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <span className="text-[11px] font-bold uppercase text-neutral-400">Departamento</span>
              <div className="text-xl font-extrabold text-neutral-900">{selectedDept.name}</div>
              <div className="text-xs text-neutral-600 mt-1">Capital: {selectedDept.capital}</div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase text-neutral-400">Municipios Principales</span>
              <div className="text-xs font-medium text-neutral-800 mt-1 leading-relaxed">
                {selectedDept.cities}
              </div>
            </div>

            <div className="flex flex-col md:items-end justify-between space-y-2">
              <div className="text-xs text-neutral-500">
                Tiempo de entrega: <strong className="text-neutral-900">{selectedDept.days}</strong>
              </div>
              <a
                href={`https://wa.me/573156557198?text=${encodeURIComponent(
                  `Hola Distrigomez, deseo consultar tiempos de entrega y envíos para el departamento de ${selectedDept.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#EC0A8C] hover:text-white bg-pink-50 hover:bg-[#EC0A8C] border border-pink-200 rounded-lg transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Consultar ruta {selectedDept.name}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
