import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { QrCode, ArrowUp, Github, Twitter, Linkedin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSuccessToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSuccessToast }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (targetId: string) => {
    if (location.pathname === '/') {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(`/#${targetId}`);
    }
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

  const companyAndLegalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <footer className="bg-[#050914] border-t border-white/[0.08] text-slate-400 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <QrCode className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">QRFlow</span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Smart QR management, dynamic links, real-time campaign analytics, and no-code mobile landing page tools for modern businesses.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onSuccessToast('GitHub repository opened')}
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSuccessToast('Twitter profile opened')}
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSuccessToast('LinkedIn profile opened')}
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
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
                    onClick={() => handleSectionClick(tool.id)}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
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
                    onClick={() => handleSectionClick(link.id)}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">LEGAL & COMPANY</h4>
            <ul className="space-y-2">
              {companyAndLegalLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-xs text-slate-400 hover:text-white transition-colors block cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© 2026 QRFlow. All rights reserved.</div>

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
