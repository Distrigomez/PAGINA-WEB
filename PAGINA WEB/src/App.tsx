/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsCatalog } from './components/ProductsCatalog';
import { AboutSection } from './components/AboutSection';
import { EmprendeSection } from './components/EmprendeSection';
import { ContactCoverageSection } from './components/ContactCoverageSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WhatsAppQuoteDrawer, QuoteItem } from './components/WhatsAppQuoteDrawer';
import { EntrepreneurStoryModal } from './components/EntrepreneurStoryModal';
import { AuthModal } from './components/AuthModal';
import { UserProfileDrawer } from './components/UserProfileDrawer';
import { CookieBanner } from './components/CookieBanner';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Product, PRODUCTS } from './data/distrigomezData';

function MainApp() {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  // Cart / Quote management
  const handleAddToQuote = (product: Product) => {
    setQuoteItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const isInQuote = (productId: string) => {
    return quoteItems.some((item) => item.product.id === productId);
  };

  const handleSelectProductById = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) {
      setSelectedProduct(found);
    }
  };

  const totalQuoteCount = quoteItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFD] text-neutral-900 selection:bg-[#EC0A8C] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        quoteCount={totalQuoteCount}
        onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
        onOpenProfileDrawer={() => setIsProfileDrawerOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onSelectProduct={handleSelectProductById} />

        {/* Todos nuestros productos Section (30 products) */}
        <ProductsCatalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToQuote={handleAddToQuote}
          isInQuote={isInQuote}
        />

        {/* Nosotros Section */}
        <AboutSection />

        {/* Distrigomez Emprende Section */}
        <EmprendeSection
          onOpenStoryModal={() => setIsStoryModalOpen(true)}
        />

        {/* Contáctanos & Llegamos a Section */}
        <ContactCoverageSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Quick Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToQuote={handleAddToQuote}
        isInQuote={selectedProduct ? isInQuote(selectedProduct.id) : false}
      />

      {/* WhatsApp Quote Drawer */}
      <WhatsAppQuoteDrawer
        isOpen={isQuoteDrawerOpen}
        onClose={() => setIsQuoteDrawerOpen(false)}
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClear={handleClearQuote}
      />

      {/* User Profile & Orders Drawer */}
      <UserProfileDrawer
        isOpen={isProfileDrawerOpen}
        onClose={() => setIsProfileDrawerOpen(false)}
      />

      {/* Authentication Modal (Sign up / Login with Email & Password) */}
      <AuthModal />

      {/* Entrepreneur Story Submission Modal */}
      <EntrepreneurStoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />

      {/* Cookie Privacy Notice */}
      <CookieBanner />

      {/* Persistent WhatsApp Floating Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
