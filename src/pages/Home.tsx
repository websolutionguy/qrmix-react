import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { QRGeneratorSection } from '../components/QRGenerator/QRGeneratorSection';
import { Features } from '../components/Features';
import { UseCases } from '../components/UseCases';
import { AnalyticsPreview } from '../components/AnalyticsPreview';
import { MobilePagePreview } from '../components/MobilePagePreview';
import { Pricing } from '../components/Pricing';
import { CTA } from '../components/CTA';

import { AdSenseBanner } from '../components/AdSenseBanner';

interface HomeProps {
  onOpenAuth: (mode?: 'signin' | 'signup') => void;
  onSuccessToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenAuth, onSuccessToast }) => {
  useEffect(() => {
    document.title = 'QRMix | Smart QR Code Generator & Dynamic Link Platform';
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <Hero
        onScrollToGenerator={() => scrollToSection('generator')}
        onScrollToFeatures={() => scrollToSection('features')}
        onOpenAuth={() => onOpenAuth('signup')}
      />

      {/* <AdSenseBanner
        client="ca-pub-9937097213144625"
        slot="1234567890"
        format="auto"
        responsive={true}
        className="my-8"
      /> */}

      <QRGeneratorSection onSuccessToast={onSuccessToast} />

      <Features />

      <UseCases
        onSelectUseCase={(id) => {
          scrollToSection('generator');
          onSuccessToast(`Selected ${id} template flow! Customize your QR code above.`, 'info');
        }}
      />

      <AnalyticsPreview />

      <MobilePagePreview
        onOpenAuth={() => onOpenAuth('signup')}
        onSuccessToast={onSuccessToast}
      />

      {/* <Pricing onOpenAuth={onOpenAuth} onSuccessToast={onSuccessToast} /> */}

      <CTA
        onScrollToGenerator={() => scrollToSection('generator')}
        onScrollToFeatures={() => scrollToSection('features')}
      />
    </div>
  );
};
