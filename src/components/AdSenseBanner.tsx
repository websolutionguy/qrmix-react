import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

interface AdSenseBannerProps {
  /**
   * Your Google AdSense Client / Publisher ID
   * Example: 'ca-pub-1234567890123456'
   * Defaults to placeholder or can be configured via props
   */
  client?: string;
  /**
   * The ad unit slot ID created in your Google AdSense console
   * Example: '1234567890'
   */
  slot: string;
  /**
   * Ad layout format ('auto', 'fluid', 'rectangle', 'horizontal', etc.)
   */
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  /**
   * Responsive layout flag
   */
  responsive?: boolean;
  /**
   * Custom CSS styling classes
   */
  className?: string;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  client = 'ca-pub-9937097213144625',
  slot,
  format = 'auto',
  responsive = true,
  className = '',
}) => {
  const adRef = useRef<HTMLModElement | null>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    // Prevent double initialization in React StrictMode
    if (isLoaded.current) return;

    try {
      if (typeof window !== 'undefined') {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        isLoaded.current = true;
      }
    } catch (err) {
      console.warn('AdSense loading notice:', err);
    }
  }, []);

  return (
    <div
      className={`w-full overflow-hidden text-center my-6 flex flex-col items-center justify-center ${className}`}
      id={`adsense-slot-${slot}`}
    >
      <div className="text-[10px] tracking-wider uppercase text-slate-500 mb-1 font-semibold">
        Advertisement
      </div>
      <ins
        ref={adRef}
        className="adsbygoogle block w-full max-w-4xl"
        style={{ display: 'block', minHeight: '90px' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};
