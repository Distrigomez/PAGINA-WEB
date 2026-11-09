import React, { useState } from 'react';
import { COMPANY_VALUES, ORGANIGRAMA_DATA } from '../data/distrigomezData';
import { Award, Compass, HeartHandshake, Users, Shield, CheckCircle2, ChevronRight, Building } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'historia' | 'mision' | 'valores' | 'organigrama'>('historia');

  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-[#FAFAFB] border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EC0A8C] mb-2">
            <span>Quiénes Somos</span>
            <span aria-hidden="true">·</span>
            <span>Comercializadora Distrigomez S.A.S</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Nosotros
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Conoce nuestra trayectoria, valores y el equipo humano detrás de Distrigomez Salud y Belleza.
          </p>
        </div>

        {/* Lema Banner */}
        <div className="relative rounded-2xl bg-gradient-to-r from-[#EC0A8C] via-[#B5006B] to-[#A84D8A] p-6 sm:p-8 text-white shadow-md mb-12 overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-pink-200 mb-2">
              Nuestro Lema Institucional
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              “SALUD Y BELLEZA, PRECIO AL ALCANCE DE TODOS”
            </h3>
            <p className="mt-2 text-sm sm:text-base text-pink-100 leading-relaxed">
              Representa nuestro compromiso de poner a disposición de clientes y emprendedores productos de máxima calidad a precios justos y accesibles, con una filosofía basada en el servicio, la responsabilidad y la cercanía humana.
            </p>
          </div>
        </div>

        {/* Clean Interactive Tab Controls */}
        <div className="flex items-center gap-2 p-1.5 bg-neutral-200/70 rounded-xl mb-10 overflow-x-auto max-w-fit scrollbar-none">
          <button
            onClick={() => setActiveTab('historia')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'historia'
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Trayectoria & Origen
          </button>
          <button
            onClick={() => setActiveTab('mision')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'mision'
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Misión & Visión 2029
          </button>
          <button
            onClick={() => setActiveTab('valores')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'valores'
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Valores & Cultura
          </button>
          <button
            onClick={() => setActiveTab('organigrama')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'organigrama'
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Estructura Organizacional
          </button>
        </div>

        {/* Tab Content 1: Historia & Trayectoria */}
        {activeTab === 'historia' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5 text-neutral-700 leading-relaxed text-sm sm:text-base">
              <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#EC0A8C] uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  Fundación: 31 de enero de 2019
                </div>
                <p>
                  Somos una empresa familiar fundada el <strong>31 de enero de 2019</strong>, a partir de la experiencia adquirida por sus fundadores en la comercialización y distribución de productos de belleza y cuidado capilar.
                </p>
                <p>
                  Con el propósito de consolidarse en el mercado y brindar a sus clientes productos de excelente calidad a precios competitivos, nace Distrigomez como una empresa dedicada a la distribución y comercialización de productos para el cuidado personal, la belleza y el cuidado capilar.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#A84D8A] uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  Presencia Comercial Regional
                </div>
                <p>
                  Desde sus inicios, la empresa ha trabajado en el fortalecimiento de su presencia comercial en diferentes municipios de los departamentos del <strong>Cesar, La Guajira, Magdalena, Córdoba, Sucre, Atlántico, Bolívar y Antioquia</strong>, ofreciendo a sus clientes un amplio y variado portafolio de productos, acompañado de un servicio oportuno, cercano y de calidad.
                </p>
                <p>
                  A lo largo de su trayectoria, Distrigomez ha logrado fortalecer sus relaciones comerciales y posicionarse como una empresa comprometida con la satisfacción de sus clientes, ofreciendo productos de marcas reconocidas, precios competitivos y una atención orientada a generar confianza y relaciones comerciales sostenibles.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm">
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4 text-[#EC0A8C]">
                  Pilares de Calidad
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#EC0A8C] shrink-0 mt-0.5" />
                    <p className="text-xs text-neutral-700">
                      <strong>Servicio oportuno y personalizado:</strong> Orientado a la completa satisfacción de clientes mayoristas y minoristas.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A84D8A] shrink-0 mt-0.5" />
                    <p className="text-xs text-neutral-700">
                      <strong>Cultura de excelencia:</strong> Orden, responsabilidad, entusiasmo y mejoramiento continuo con trato justo y respetuoso.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#B5006B] shrink-0 mt-0.5" />
                    <p className="text-xs text-neutral-700">
                      <strong>Garantía de procedencia:</strong> Marcas líderes y fórmulas capilares efectivas con respaldo legal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Official Logo & Color Palette Brand Card */}
              <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6 rounded-2xl border border-pink-200/80 shadow-sm flex flex-col items-center text-center space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/public/assets/aistudio/Logo__1__f718972f.jpeg"
                    alt="Distrigomez Emblema"
                    className="w-16 h-16 rounded-full object-cover shadow-sm border-2 border-white"
                  />
                  <div className="text-left">
                    <span className="text-sm font-extrabold text-neutral-900 block">Comercializadora Distrigomez</span>
                    <span className="text-xs text-[#EC0A8C] font-semibold block">Identidad Visual & Estilo</span>
                  </div>
                </div>

                <div className="w-full pt-3 border-t border-pink-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                    Paleta Oficial de Colores Distrigomez
                  </span>
                  <div className="rounded-xl overflow-hidden border border-neutral-200/60 shadow-inner bg-white p-2">
                    <img
                      src="/public/assets/aistudio/Paleta_de_colores_ba2919bf.PNG"
                      alt="Paleta de Colores Distrigomez: Fucsia principal #EC0A8C, Morado #A84D8A, Negro #000000, Blanco #FFFFFF, Fucsia oscuro #B5006B"
                      className="w-full h-auto object-contain mx-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2 text-[10px] text-neutral-500 font-mono">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#EC0A8C]" /> #EC0A8C
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#A84D8A]" /> #A84D8A
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#B5006B]" /> #B5006B
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Misión y Visión */}
        {activeTab === 'mision' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-[#EC0A8C] mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#EC0A8C] uppercase tracking-wider mb-2">
                  Propósito Actual
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                  Somos una empresa innovadora, dinámica y comprometida con la distribución y comercialización de marcas líderes del cuidado personal y la belleza, mediante la venta al por mayor y al detal.
                </p>
                <p className="mt-3 text-neutral-700 leading-relaxed text-sm sm:text-base">
                  Trabajamos para brindar productos de calidad, precios competitivos y una atención cercana, construyendo relaciones comerciales duraderas.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-100 text-xs text-neutral-500 font-medium">
                Venta mayorista · Atención personalizada · Precios competitivos
              </div>
            </div>

            {/* Visión */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-[#A84D8A] mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#A84D8A] uppercase tracking-wider mb-2">
                  Proyección Estratégica
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Nuestra Visión 2029
                </h3>
                <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                  Para el año <strong>2029</strong>, Distrigomez Salud y Belleza será reconocida en la Costa Atlántica como empresa referente en la distribución de productos para el cuidado personal y la belleza.
                </p>
                <p className="mt-3 text-neutral-700 leading-relaxed text-sm sm:text-base">
                  Ampliaremos progresivamente nuestra cobertura, avanzando hacia una distribución con alcance nacional.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-100 text-xs text-neutral-500 font-medium">
                Liderazgo en la Costa Atlántica · Expansión a toda Colombia
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Valores & Cultura */}
        {activeTab === 'valores' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANY_VALUES.map((val, idx) => (
                <div
                  key={val.title}
                  className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm hover:border-[#EC0A8C]/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      0{idx + 1}
                    </span>
                    <Shield className="w-4 h-4 text-[#EC0A8C]" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quality Commitment Policy */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold text-[#EC0A8C] uppercase tracking-wider mb-2">
                  Política de Calidad
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Nos comprometemos con un servicio oportuno, personalizado y orientado a la satisfacción de nuestros clientes, con productos de calidad y procesos eficientes.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#A84D8A] uppercase tracking-wider mb-2">
                  Cultura Organizacional
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Se fundamenta en la excelencia, el orden, la responsabilidad, el entusiasmo y el mejoramiento continuo, con un trato justo y respetuoso.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 4: Estructura Organizacional */}
        {activeTab === 'organigrama' && (
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-neutral-200/80 shadow-sm">
            <div className="max-w-2xl mb-8">
              <div className="text-xs font-bold text-[#EC0A8C] uppercase tracking-wider mb-1">
                Estructura y Talento Humano
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                Organigrama Comercializadora Distrigomez
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Equipos especializados que aseguran la excelencia operativa, logística y comercial.
              </p>
            </div>

            {/* Visual Organigrama Hierarchy */}
            <div className="flex flex-col items-center">
              
              {/* Level 1: Gerencia General */}
              <div className="w-full max-w-sm bg-gradient-to-r from-neutral-900 to-[#111111] text-white p-5 rounded-xl shadow-md text-center border border-neutral-800">
                <Building className="w-5 h-5 mx-auto mb-1 text-pink-400" />
                <div className="text-sm font-bold uppercase tracking-wide">
                  Gerencia General
                </div>
                <div className="text-[11px] text-neutral-300 mt-1">
                  Dirección Estratégica & Liderazgo
                </div>
              </div>

              {/* Connecting line */}
              <div className="w-0.5 h-8 bg-neutral-300 my-1"></div>
              <div className="w-full max-w-4xl h-0.5 bg-neutral-300 mb-8 hidden lg:block"></div>

              {/* Level 2: Three Branches */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                
                {/* Branch 1: Gerencia Administrativa */}
                <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#EC0A8C] uppercase tracking-wide mb-1">
                      Área Logística & Operaciones
                    </div>
                    <div className="text-base font-bold text-neutral-900">
                      Gerencia Administrativa
                    </div>
                    <p className="text-xs text-neutral-600 mt-2">
                      Coordinación de bodega, control de inventarios y logística de despachos.
                    </p>
                  </div>
                  
                  <div className="mt-5 pt-3 border-t border-neutral-200/80 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase text-neutral-400">Equipo a cargo:</span>
                    <div className="flex items-center gap-2 text-xs font-medium text-neutral-800">
                      <ChevronRight className="w-3.5 h-3.5 text-[#EC0A8C]" />
                      Aux. Administrativa
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-neutral-800">
                      <ChevronRight className="w-3.5 h-3.5 text-[#EC0A8C]" />
                      Auxiliar de Bodega
                    </div>
                  </div>
                </div>

                {/* Branch 2: Gerencia Comercial */}
                <div className="bg-pink-50/50 p-5 rounded-xl border border-pink-200/70 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#EC0A8C] uppercase tracking-wide mb-1">
                      Área Comercial & Clientes
                    </div>
                    <div className="text-base font-bold text-neutral-900">
                      Gerencia Comercial
                    </div>
                    <p className="text-xs text-neutral-600 mt-2">
                      Atención a mayoristas, asesoría al emprendedor y rutas regionales.
                    </p>
                  </div>
                  
                  <div className="mt-5 pt-3 border-t border-pink-200/80 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase text-pink-700">Equipo a cargo:</span>
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                      <ChevronRight className="w-3.5 h-3.5 text-[#EC0A8C]" />
                      Asesores Comerciales
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                      <ChevronRight className="w-3.5 h-3.5 text-[#EC0A8C]" />
                      Impulsadoras de Ventas
                    </div>
                  </div>
                </div>

                {/* Branch 3: Gerencia Financiera */}
                <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#A84D8A] uppercase tracking-wide mb-1">
                      Área Contable & Fiscal
                    </div>
                    <div className="text-base font-bold text-neutral-900">
                      Gerencia Financiera
                    </div>
                    <p className="text-xs text-neutral-600 mt-2">
                      Gestión contable, facturación, precios justos y sostenibilidad.
                    </p>
                  </div>
                  
                  <div className="mt-5 pt-3 border-t border-neutral-200/80 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase text-neutral-400">Equipo a cargo:</span>
                    <div className="flex items-center gap-2 text-xs font-medium text-neutral-800">
                      <ChevronRight className="w-3.5 h-3.5 text-[#A84D8A]" />
                      Contador
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-neutral-800">
                      <ChevronRight className="w-3.5 h-3.5 text-[#A84D8A]" />
                      Auxiliar Contable
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
