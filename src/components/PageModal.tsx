import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShieldCheck,
  FileText,
  Cookie,
  Info,
  Mail,
  Send,
  Building,
  CheckCircle2,
  Clock,
  Sparkles,
  Lock,
  Globe,
  Zap,
  PhoneCall,
} from 'lucide-react';

export type PageType = 'privacy' | 'terms' | 'cookies' | 'about' | 'contact';

interface PageModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: PageType;
  onSuccessToast: (msg: string) => void;
}

export const PageModal: React.FC<PageModalProps> = ({
  isOpen,
  onClose,
  initialPage = 'privacy',
  onSuccessToast,
}) => {
  const [activeTab, setActiveTab] = useState<PageType>(initialPage);

  // Sync initialPage when modal opens
  useEffect(() => {
    if (isOpen && initialPage) {
      setActiveTab(initialPage);
    }
  }, [isOpen, initialPage]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Cookie Settings State
  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Always true
    analytics: true,
    functional: true,
    marketing: false,
  });

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    type: 'General Inquiry',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      onSuccessToast('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessToast('Message sent successfully! Our team will respond within 2 hours.');
      setContactForm({
        name: '',
        email: '',
        type: 'General Inquiry',
        subject: '',
        message: '',
      });
      onClose();
    }, 800);
  };

  if (!isOpen) return null;

  const tabs: Array<{ id: PageType; label: string; icon: React.ReactNode }> = [
    { id: 'privacy', label: 'Privacy Policy', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'terms', label: 'Terms of Service', icon: <FileText className="w-4 h-4" /> },
    { id: 'cookies', label: 'Cookie Policy', icon: <Cookie className="w-4 h-4" /> },
    { id: 'about', label: 'About Us', icon: <Info className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact Us', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Main Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#0B1120] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#070B16]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                {tabs.find((t) => t.id === activeTab)?.icon}
              </div>
              <div>
                <h2 className="text-base font-bold text-white tracking-tight">
                  {tabs.find((t) => t.id === activeTab)?.label}
                </h2>
                <span className="text-[11px] text-slate-400">QRMix Platform Information</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.05] hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs Header */}
          <div className="flex items-center gap-1 px-4 pt-3 pb-2 bg-[#080E1E] border-b border-white/[0.06] overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Modal Scrollable Content Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed max-h-[calc(90vh-140px)]">
            {/* 1. PRIVACY POLICY */}
            {activeTab === 'privacy' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>
                    <strong>Effective Date:</strong> August 11, 2026. QRMix is built with strict privacy standards, ensuring scan metrics are processed securely and transparently.
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2">1. Overview & Commitment</h3>
                  <p>
                    QRMix ("we", "our", or "us") respects your privacy. This Privacy Policy describes how we collect, use, store, and protect information when you use our web platform, dynamic link generator, analytics dashboard, and mobile landing page tools.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2">2. Information We Collect</h3>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    <li>
                      <strong>Account Data:</strong> When you register, we collect basic details such as your name, work email address, and authentication credentials.
                    </li>
                    <li>
                      <strong>QR Campaign Data:</strong> Destination URLs, vCard contact information, WiFi credentials, design customization choices, and custom QR logos uploaded to our servers.
                    </li>
                    <li>
                      <strong>Scan Analytics (Aggregated):</strong> Timestamp, device operating system, browser category, top referring domains, and generalized geographic location (country & city level). We do <em>not</em> collect precise GPS tracking data or store personally identifiable scanner information.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2">3. How We Use Information</h3>
                  <p>
                    We process information strictly to route dynamic QR redirection links seamlessly, deliver real-time scan analytics, protect against abuse or phishing campaigns, and continuously optimize our edge redirection infrastructure.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2">4. Data Protection & Security</h3>
                  <p>
                    All data in transit is encrypted using <strong>TLS 1.3</strong> protocol standards, and data at rest is secured via <strong>AES-256 bit encryption</strong>. Our platform adheres to SOC2 Type II compliance framework benchmarks.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2">5. GDPR & CCPA Compliance</h3>
                  <p>
                    Users located in the European Economic Area (EEA) and California have full rights to request data export, modification, or account deletion. You can initiate a complete data export directly from your account settings at any time.
                  </p>
                </div>
              </div>
            )}

            {/* 2. TERMS OF SERVICE */}
            {activeTab === 'terms' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs flex items-center gap-3">
                  <FileText className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span>
                    <strong>Terms Summary:</strong> By using QRMix, you agree to comply with our acceptable use policy. Illegal content, malware links, or phishing via dynamic QR codes is strictly forbidden.
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2">1. Acceptance of Terms</h3>
                  <p>
                    By accessing or using QRMix, creating dynamic QR campaigns, or downloading generated codes, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2">2. Acceptable Use Policy</h3>
                  <p className="mb-2">You agree NOT to use QRMix to generate codes or redirection links that:</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    <li>Promote malware, spyware, unauthorized downloads, or phishing websites.</li>
                    <li>Violate local, state, national, or international consumer protection laws.</li>
                    <li>Infringe upon intellectual property, trademark, or privacy rights of third parties.</li>
                    <li>Distribute deceptive scam campaigns, fraud schemes, or spam.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2">3. Service Level Agreement (SLA)</h3>
                  <p>
                    We guarantee a <strong>99.99% operational uptime SLA</strong> for all paid dynamic link redirection endpoints. In the event of an unscheduled global downtime exceeding 15 consecutive minutes, active Pro & Enterprise subscribers are eligible for SLA service credits.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2">4. Subscription & Billing Terms</h3>
                  <p>
                    Paid subscriptions (Pro and Enterprise) renew automatically on a monthly or annual cycle. You may cancel your subscription at any time prior to your next renewal date without incurring cancellation fees.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2">5. Intellectual Property</h3>
                  <p>
                    You retain 100% ownership of all target URLs, custom designs, vCard contact information, and logo assets uploaded to your account.
                  </p>
                </div>
              </div>
            )}

            {/* 3. COOKIE POLICY */}
            {activeTab === 'cookies' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-center gap-3">
                  <Cookie className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>
                    <strong>Cookie Preferences:</strong> We use cookies and local storage tokens to maintain your session authentication, save your generator customization preferences, and monitor platform performance.
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2">What Are Cookies?</h3>
                  <p>
                    Cookies are small text files stored on your browser when visiting websites. They enable websites to remember your preferences, authentication tokens, and customized settings between visits.
                  </p>
                </div>

                {/* Interactive Cookie Controls */}
                <div className="space-y-3 bg-[#070B16] border border-white/10 rounded-2xl p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                    Manage Your Cookie Preferences
                  </h4>

                  {/* Essential Cookies */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div>
                      <div className="text-xs font-bold text-white">Strictly Necessary Cookies</div>
                      <div className="text-[11px] text-slate-400">Required for authentication, session stability, and security routing. Cannot be disabled.</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold">
                      Always Active
                    </span>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div>
                      <div className="text-xs font-bold text-white">Performance & Analytics Cookies</div>
                      <div className="text-[11px] text-slate-400">Helps us measure page speed performance and feature interaction rates anonymously.</div>
                    </div>
                    <button
                      onClick={() => {
                        setCookieSettings((prev) => ({ ...prev, analytics: !prev.analytics }));
                        onSuccessToast(`Analytics cookies ${!cookieSettings.analytics ? 'enabled' : 'disabled'}`);
                      }}
                      className={`w-11 h-6 rounded-full p-1 transition-colors cursor-pointer flex items-center ${
                        cookieSettings.analytics ? 'bg-blue-600 justify-end' : 'bg-slate-700 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-white shadow-md" />
                    </button>
                  </div>

                  {/* Functional Cookies */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div>
                      <div className="text-xs font-bold text-white">Functional Preferences Cookies</div>
                      <div className="text-[11px] text-slate-400">Remembers your favorite colors, logo settings, and QR default templates.</div>
                    </div>
                    <button
                      onClick={() => {
                        setCookieSettings((prev) => ({ ...prev, functional: !prev.functional }));
                        onSuccessToast(`Functional cookies ${!cookieSettings.functional ? 'enabled' : 'disabled'}`);
                      }}
                      className={`w-11 h-6 rounded-full p-1 transition-colors cursor-pointer flex items-center ${
                        cookieSettings.functional ? 'bg-blue-600 justify-end' : 'bg-slate-700 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-white shadow-md" />
                    </button>
                  </div>
                </div>

                <div className="text-xs text-slate-400">
                  You can update your cookie choices at any time from this window. Saved settings apply immediately across your current browsing session.
                </div>
              </div>
            )}

            {/* 4. ABOUT US */}
            {activeTab === 'about' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center max-w-2xl mx-auto space-y-3 pb-4 border-b border-white/10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    Building the Next Generation QR Engine
                  </div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    Connecting Offline Touchpoints to Digital Growth
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    QRMix was founded with a single mission: to transform standard static QR codes into intelligent, dynamic digital portals with real-time analytics and zero coding required.
                  </p>
                </div>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-[#070B16] border border-white/10 rounded-2xl p-4 text-center">
                    <div className="text-xl sm:text-2xl font-extrabold text-blue-400">500M+</div>
                    <div className="text-[11px] font-medium text-slate-400">Monthly Scans</div>
                  </div>
                  <div className="bg-[#070B16] border border-white/10 rounded-2xl p-4 text-center">
                    <div className="text-xl sm:text-2xl font-extrabold text-indigo-400">120K+</div>
                    <div className="text-[11px] font-medium text-slate-400">Active Brands</div>
                  </div>
                  <div className="bg-[#070B16] border border-white/10 rounded-2xl p-4 text-center">
                    <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">99.99%</div>
                    <div className="text-[11px] font-medium text-slate-400">Redirection SLA</div>
                  </div>
                  <div className="bg-[#070B16] border border-white/10 rounded-2xl p-4 text-center">
                    <div className="text-xl sm:text-2xl font-extrabold text-purple-400 text-nowrap">&lt; 25ms</div>
                    <div className="text-[11px] font-medium text-slate-400">Edge Redirection</div>
                  </div>
                </div>

                {/* Core Pillars */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Our Core Principles</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                      <div className="flex items-center gap-2 text-white font-bold text-xs mb-1">
                        <Zap className="w-4 h-4 text-amber-400" /> Instant Edge Redirection
                      </div>
                      <p className="text-xs text-slate-400">
                        Our distributed multi-region edge network routes scans in under 25ms worldwide with high fault tolerance.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                      <div className="flex items-center gap-2 text-white font-bold text-xs mb-1">
                        <Lock className="w-4 h-4 text-blue-400" /> Privacy-First Analytics
                      </div>
                      <p className="text-xs text-slate-400">
                        Aggregated campaign insights without intrusive tracker scripts or invasive individual scanner profiling.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                      <div className="flex items-center gap-2 text-white font-bold text-xs mb-1">
                        <Globe className="w-4 h-4 text-emerald-400" /> No-Code Customization
                      </div>
                      <p className="text-xs text-slate-400">
                        Design high-converting mobile micro-landing pages, bio links, and menus in minutes without developer dependency.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                      <div className="flex items-center gap-2 text-white font-bold text-xs mb-1">
                        <CheckCircle2 className="w-4 h-4 text-purple-400" /> Vector High Precision
                      </div>
                      <p className="text-xs text-slate-400">
                        Export sharp vector SVGs and ultra-res PNGs engineered specifically for commercial print, signage, and packaging.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. CONTACT US */}
            {activeTab === 'contact' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Left Column: Contact Details */}
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-white mb-2">Get in Touch</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Have questions about custom plans, enterprise dynamic links, or technical integrations? Our specialized team is here to help.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                        <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-white">Email Us</div>
                          <div className="text-[11px] text-slate-400">support@QRMix.app</div>
                          <div className="text-[11px] text-slate-400">sales@QRMix.app</div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                        <Building className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-white">Global Headquarters</div>
                          <div className="text-[11px] text-slate-400">100 Tech Plaza, Suite 400</div>
                          <div className="text-[11px] text-slate-400">San Francisco, CA 94105, USA</div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                        <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-white">Response Guarantee</div>
                          <div className="text-[11px] text-slate-400">Average reply time: &lt; 2 hours</div>
                          <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">24/7 Priority Support Active</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive Contact Form */}
                  <div className="lg:col-span-3 bg-[#070B16] border border-white/10 rounded-2xl p-5 sm:p-6">
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Your Name <span className="text-blue-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#0D1426] border border-white/10 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Business Email <span className="text-blue-400">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#0D1426] border border-white/10 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Inquiry Type</label>
                          <select
                            value={contactForm.type}
                            onChange={(e) => setContactForm({ ...contactForm, type: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#0D1426] border border-white/10 focus:border-blue-500 rounded-xl text-xs text-white focus:outline-none transition-colors"
                          >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Enterprise Sales">Enterprise Sales</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Partnership">Partnership</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                          <input
                            type="text"
                            placeholder="Custom dynamic URL requirements"
                            value={contactForm.subject}
                            onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#0D1426] border border-white/10 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Message <span className="text-blue-400">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell us about your campaign goals, volume expectations, or questions..."
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#0D1426] border border-white/10 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
