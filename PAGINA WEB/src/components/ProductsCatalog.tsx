import React, { useState } from 'react';
import { Product, PRODUCTS } from '../data/distrigomezData';
import { MessageCircle, Plus, Check, Info, Search, Sparkles, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ProductSpotlight } from './ProductSpotlight';

interface ProductsCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  isInQuote: (productId: string) => boolean;
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({
  onSelectProduct,
  onAddToQuote,
  isInQuote
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { user, isAuthenticated, openAuthModal } = useAuth();
  const isVerifiedWholesale = Boolean(isAuthenticated && user?.isWholesaleVerified);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.presentation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'shampoo', label: 'Shampoos' },
    { id: 'tratamientos', label: 'Tratamientos & Mascarillas' },
    { id: 'capilar', label: 'Cuidado & Finalizadores' },
    { id: 'kits', label: 'Kits & Emprendedores' }
  ];

  return (
    <section id="productos" className="py-16 lg:py-24 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EC0A8C] mb-2">
            <span>Catálogo Completo Oficial</span>
            <span aria-hidden="true">·</span>
            <span>Productos Capilares & Belleza</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Todos nuestros productos
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Elige un producto y escríbenos para conocer precio y disponibilidad. Venta al por mayor para salones y tiendas, y venta al detal.
          </p>
        </div>

        {/* Member Pricing Banner if not logged in */}
        {!isAuthenticated && (
          <div className="mb-8 p-4 bg-gradient-to-r from-pink-50 via-white to-purple-50 rounded-2xl border border-pink-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#EC0A8C] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-neutral-900 block">
                  ¿Eres dueña de peluquería, salón o quieres emprender?
                </span>
                <span className="text-xs text-neutral-600">
                  Inicia sesión o regístrate para acceder a los precios mayoristas sugeridos y atención preferencial.
                </span>
              </div>
            </div>
            <button
              onClick={() => openAuthModal('signup')}
              className="px-4 py-2 text-xs font-bold text-white bg-[#EC0A8C] hover:bg-[#B5006B] rounded-xl whitespace-nowrap shadow-sm"
            >
              Registro Mayorista
            </button>
          </div>
        )}

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-100">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-neutral-50 hover:bg-neutral-100/70 focus:bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#EC0A8C]/20 focus:border-[#EC0A8C] transition-all"
            />
          </div>

        </div>

        {/* Luxury Spotlight Feature when on 'all' view with no search */}
        {selectedCategory === 'all' && !searchQuery && (
          <ProductSpotlight
            product={PRODUCTS.find((p) => p.id === 'polvo-decolorante-plex-500g') || PRODUCTS[0]}
            onOpenDetails={onSelectProduct}
            onAddToQuote={onAddToQuote}
          />
        )}

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-neutral-50 rounded-2xl border border-neutral-100">
            <p className="text-sm text-neutral-600">
              No encontramos productos que coincidan con tu búsqueda.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-[#EC0A8C] hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => {
              const inQuote = isInQuote(product.id);
              const includePresentation = !(isVerifiedWholesale && product.hidePresentationForWholesale);
              const productRequest = `Hola Distrigomez, me gustaría consultar precio y disponibilidad del producto: ${product.name}${includePresentation ? ` (${product.presentation})` : ''}.`;
              const waLink = `https://wa.me/573156557198?text=${encodeURIComponent(productRequest)}`;

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-neutral-300 transition-all duration-200"
                >
                  {/* Image Container with Presentation tag */}
                  <div
                    className="relative aspect-[4/3] bg-neutral-100 overflow-hidden cursor-pointer"
                    onClick={() => onSelectProduct(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full ${
                        product.image.startsWith('/assets/aistudio/') || product.image.startsWith('/public/assets/aistudio/')
                          ? 'object-contain p-2 bg-white drop-shadow-sm group-hover:scale-105'
                          : 'object-cover group-hover:scale-105'
                      } object-center transition-transform duration-500`}
                      referrerPolicy="no-referrer"
                    />

                    {/* Wholesale badge or Presentation tag */}
                    {includePresentation && (
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-neutral-800 shadow-sm border border-neutral-200/50">
                        {product.presentation}
                      </div>
                    )}

                    {product.isFeatured && (
                      <div className="absolute top-3 right-3 bg-[#EC0A8C] text-white px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Destacado
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Quiet category label */}
                      <div className="text-[11px] font-semibold text-[#A84D8A] mb-1.5 uppercase tracking-wide">
                        {product.categoryLabel}
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="text-base font-bold text-neutral-900 group-hover:text-[#EC0A8C] transition-colors cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                        {product.shortDesc}
                      </p>
                    </div>

                    {/* Actions & Verified Price */}
                    <div className="mt-5 pt-4 border-t border-neutral-100">

                      {/* Logged in price tier */}
                      {isAuthenticated && user?.isWholesaleVerified && product.suggestedWholesalePrice && (
                        <div className="mb-3 px-2.5 py-1.5 bg-emerald-50 rounded-lg border border-emerald-200/60 flex items-center justify-between text-xs">
                          <span className="text-emerald-800 font-medium">Mayorista aprox:</span>
                          <span className="font-extrabold text-emerald-900 tabular-nums">
                            ${product.suggestedWholesalePrice.toLocaleString('es-CO')} COP
                          </span>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-2">
                        {/* Quick View Button */}
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="w-full py-2 px-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center gap-1 transition-colors"
                        >
                          <Info className="w-3.5 h-3.5" />
                          Detalles
                        </button>

                        {/* Add to Quote Drawer */}
                        <button
                          onClick={() => onAddToQuote(product)}
                          className={`w-full py-2 px-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-all ${
                            inQuote
                              ? 'bg-emerald-600 text-white'
                              : 'bg-neutral-900 hover:bg-[#111111] text-white'
                          }`}
                        >
                          {inQuote ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              En lista
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              Cotizar
                            </>
                          )}
                        </button>
                      </div>

                      {/* WhatsApp Direct Quick link */}
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 w-full py-2 text-xs font-bold text-[#EC0A8C] hover:text-white bg-pink-50 hover:bg-[#EC0A8C] border border-pink-200/80 rounded-lg flex items-center justify-center gap-1.5 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Pedir precio por WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
