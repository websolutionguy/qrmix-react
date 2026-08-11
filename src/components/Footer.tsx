import React from 'react';
import { QrCode, ArrowUp, Github, Twitter, Linkedin, ShieldCheck } from 'lucide-react';
import Logo from '../images/qrmix-logo.png';

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onSuccessToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection, onSuccessToast }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const freeTools = [
    { name: 'Website QR', id: 'generator' },
    { name: 'WiFi QR', id: 'generator' },
    { name: 'vCard QR', id: 'generator' },
    { name: 'WhatsApp QR', id: 'generator' },
    { name: 'Menu QR', id: 'generator' },
  ];

  const platformLinks = [
    { name: 'Dashboard', id: 'analytics' },
    { name: 'QR Generator', id: 'generator' },
    { name: 'Analytics', id: 'analytics' },
    { name: 'Mobile Pages', id: 'mobile-pages' },
    { name: 'Pricing', id: 'pricing' },
  ];

  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security Overview'];

  return (
    <footer className="bg-[#050914] border-t border-white/[0.08] text-slate-400 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white"> */}
              <div className="">
                <img src={Logo} alt="QRMix Logo" className="w-10 h-10" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">QRMix</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Smart QR management, dynamic links, real-time campaign analytics, and no-code mobile landing page tools for modern businesses.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onSuccessToast('GitHub repository opened')}
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSuccessToast('Twitter profile opened')}
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSuccessToast('LinkedIn profile opened')}
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              All Systems Operational (99.99% Uptime)
            </div>
          </div>

          {/* Column 2: Free Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">FREE TOOLS</h4>
            <ul className="space-y-2">
              {freeTools.map((tool, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onScrollToSection(tool.id)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {tool.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">PLATFORM</h4>
            <ul className="space-y-2">
              {platformLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onScrollToSection(link.id)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">LEGAL</h4>
            <ul className="space-y-2">
              {legalLinks.map((legal, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onSuccessToast(`${legal} viewed`)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {legal}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© 2026 QRMix. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> SOC2 Type II Certified
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 p-2 rounded-lg bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
