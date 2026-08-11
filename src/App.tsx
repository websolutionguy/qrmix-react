import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { ToastContainer } from './components/Toast';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { NotFound } from './pages/NotFound';

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

  return (
    <div className="min-h-screen bg-[#050914] text-slate-100 font-sans selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden flex flex-col justify-between">
      <ScrollToTop />

      {/* Navigation */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* Main Content & Routes */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={<Home onOpenAuth={handleOpenAuth} onSuccessToast={addToast} />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/contact-us"
            element={<ContactUs onSuccessToast={addToast} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer onSuccessToast={addToast} />

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
