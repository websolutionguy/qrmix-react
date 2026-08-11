import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QRGeneratorSection } from './components/QRGenerator/QRGeneratorSection';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { AnalyticsPreview } from './components/AnalyticsPreview';
import { MobilePagePreview } from './components/MobilePagePreview';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { ToastContainer } from './components/Toast';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup');
  const [toasts, setToasts] = useState<
    Array<{ id: string; type: 'success' | 'error' | 'info'; message: string }>
  >([]);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenAuth = (mode: 'signin' | 'signup' = 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050914] text-slate-100 font-sans selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenAuth={handleOpenAuth} onScrollToSection={handleScrollToSection} />

      {/* Main Content Sections */}
      <main>
        <Hero
          onScrollToGenerator={() => handleScrollToSection('generator')}
          onScrollToFeatures={() => handleScrollToSection('features')}
          onOpenAuth={() => handleOpenAuth('signup')}
        />

        <QRGeneratorSection onSuccessToast={addToast} />

        <Features />

        <UseCases
          onSelectUseCase={(id) => {
            handleScrollToSection('generator');
            addToast(`Selected ${id} template flow! Customize your QR code above.`, 'info');
          }}
        />

        <AnalyticsPreview />

        <MobilePagePreview
          onOpenAuth={() => handleOpenAuth('signup')}
          onSuccessToast={addToast}
        />

        <Pricing onOpenAuth={handleOpenAuth} onSuccessToast={addToast} />

        <CTA
          onScrollToGenerator={() => handleScrollToSection('generator')}
          onScrollToFeatures={() => handleScrollToSection('features')}
        />
      </main>

      {/* Footer */}
      <Footer onScrollToSection={handleScrollToSection} onSuccessToast={addToast} />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        onSuccessToast={addToast}
      />

      {/* Global Toast Notifications */}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
}
