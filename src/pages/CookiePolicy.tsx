import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Cookie, Shield, Check, Info, Settings, Clock } from 'lucide-react';

export const CookiePolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'QRFlow | Cookie Policy';
  }, []);

  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: true,
    advertising: false,
    functional: true,
  });

  const [savedMessage, setSavedMessage] = useState('');

  const handleSavePreferences = () => {
    setSavedMessage('Your cookie preferences have been updated!');
    setTimeout(() => setSavedMessage(''), 3500);
  };

  const sections = [
    {
      num: 1,
      title: 'What Are Cookies?',
      content:
        'Cookies are small text files placed on your computer or mobile device when you visit websites. They are widely used to make websites work efficiently, remember your preferences, provide security safeguards, and deliver analytical performance insights.',
    },
    {
      num: 2,
      title: 'How QRFlow Uses Cookies',
      content:
        'QRFlow uses cookies and related browser storage mechanisms (such as localStorage and session storage) to maintain active user login sessions, preserve custom QR code styling choices, monitor system bandwidth performance, and safeguard public endpoints against automated abuse.',
    },
    {
      num: 3,
      title: 'Essential Cookies',
      content:
        'These cookies are strictly necessary to provide you with basic platform functionality, such as account authentication, form CSRF security verification, and routing session state. They cannot be disabled without breaking website functionality.',
    },
    {
      num: 4,
      title: 'Analytics Cookies',
      content:
        'Analytics cookies help us measure aggregate traffic metrics, page load response times, and feature interaction trends across our platform. They allow us to continuously refine our user interface and dynamic routing speed.',
    },
    {
      num: 5,
      title: 'Advertising Cookies',
      content:
        'When enabled, advertising cookies assist third-party advertising partners in delivering non-intrusive advertisements or relevant promotional content across public areas of the web.',
    },
    {
      num: 6,
      title: 'Google AdSense',
      content:
        'Advertising providers such as Google AdSense may place or recognize cookies on your browser to serve advertisements based on your prior visits to our platform or other web resources. You can manage Google ad settings directly in your Google Account dashboard.',
    },
    {
      num: 7,
      title: 'Third-Party Cookies',
      content:
        'In addition to our first-party cookies, trusted service partners (such as payment processors, cloud infrastructure hosts, and embedded video components) may issue cookies to verify transactions and prevent fraud.',
    },
    {
      num: 8,
      title: 'Managing Cookies',
      content:
        'You have full control over non-essential cookies. You can adjust your consent choices using the interactive Cookie Consent Preferences control box below or through your web browser configuration.',
    },
    {
      num: 9,
      title: 'Browser Settings',
      content:
        'Most modern web browsers (Chrome, Safari, Firefox, Edge) allow you to clear existing cookies or block third-party cookies via their Settings or Privacy menus. Note that disabling essential cookies may impact platform features.',
    },
    {
      num: 10,
      title: 'Changes to This Cookie Policy',
      content:
        'We may update this Cookie Policy periodically to reflect technological adjustments or privacy regulation requirements. Revised policies will take effect immediately upon publication on this page.',
    },
    {
      num: 11,
      title: 'Contact Us',
      content:
        'If you have questions regarding our use of cookies or privacy practices, please reach out via our Contact Page or send an email to privacy@example.com.',
    },
  ];

  return (
    <div className="pt-28 pb-20 relative bg-[#050914] min-h-screen text-slate-300">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 border-b border-white/10 pb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cookie className="w-3.5 h-3.5" /> Privacy & Preference Control
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Cookie Policy
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              <strong>Last Updated:</strong> August 11, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              User Consent Compliant
            </span>
          </div>
        </motion.div>

        {/* Interactive Cookie Preference Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 bg-gradient-to-br from-[#0D1426] to-[#0A0F1D] border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Your Cookie Consent Settings</h3>
                <p className="text-xs text-slate-400">
                  Manage your browser storage preferences for this device
                </p>
              </div>
            </div>
            {savedMessage && (
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> {savedMessage}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Essential */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  Essential Cookies <span className="text-[10px] text-emerald-400 font-normal">(Required)</span>
                </div>
                <div className="text-[11px] text-slate-400">Necessary for login and security</div>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled
                className="w-4 h-4 accent-purple-600 rounded cursor-not-allowed opacity-60"
              />
            </div>

            {/* Functional */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Functional Cookies</div>
                <div className="text-[11px] text-slate-400">Remembers design presets & theme</div>
              </div>
              <input
                type="checkbox"
                checked={cookiePreferences.functional}
                onChange={(e) =>
                  setCookiePreferences({ ...cookiePreferences, functional: e.target.checked })
                }
                className="w-4 h-4 accent-purple-600 rounded cursor-pointer"
              />
            </div>

            {/* Analytics */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Analytics Cookies</div>
                <div className="text-[11px] text-slate-400">Measures performance and speed</div>
              </div>
              <input
                type="checkbox"
                checked={cookiePreferences.analytics}
                onChange={(e) =>
                  setCookiePreferences({ ...cookiePreferences, analytics: e.target.checked })
                }
                className="w-4 h-4 accent-purple-600 rounded cursor-pointer"
              />
            </div>

            {/* Advertising */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Advertising Cookies</div>
                <div className="text-[11px] text-slate-400">AdSense & promo partner cookies</div>
              </div>
              <input
                type="checkbox"
                checked={cookiePreferences.advertising}
                onChange={(e) =>
                  setCookiePreferences({ ...cookiePreferences, advertising: e.target.checked })
                }
                className="w-4 h-4 accent-purple-600 rounded cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSavePreferences}
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/25 transition-all cursor-pointer"
            >
              Save Cookie Preferences
            </button>
          </div>
        </motion.div>

        {/* Detailed Policy Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-sm leading-relaxed"
        >
          {sections.map((sec) => (
            <div
              key={sec.num}
              className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-2.5 shadow-xl hover:border-white/20 transition-colors"
            >
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-purple-400 font-mono text-sm">#{sec.num}</span>
                {sec.title}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{sec.content}</p>
            </div>
          ))}
        </motion.div>

        {/* Footer Back Button */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to QRFlow Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
