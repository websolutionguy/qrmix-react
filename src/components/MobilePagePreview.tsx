import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Smartphone,
  CheckCircle2,
  ExternalLink,
  Globe,
  MessageSquare,
  Utensils,
  PhoneCall,
  Instagram,
  Twitter,
  Linkedin,
  Share2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { fadeUpVariant } from '../utils/animation';

interface MobilePagePreviewProps {
  onOpenAuth: () => void;
  onSuccessToast: (msg: string) => void;
}

export const MobilePagePreview: React.FC<MobilePagePreviewProps> = ({
  onOpenAuth,
  onSuccessToast,
}) => {
  const [activeProfile, setActiveProfile] = useState<'cafe' | 'agency' | 'creator'>('cafe');

  const profiles = {
    cafe: {
      title: 'Apex Artisanal Roasters',
      tagline: 'Specialty Espresso & Fresh Bakery',
      avatar: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=150&auto=format&fit=crop&q=80',
      buttons: [
        { label: 'View Today’s Menu', icon: <Utensils className="w-4 h-4 text-amber-400" />, href: '#' },
        { label: 'Reserve Table Online', icon: <Globe className="w-4 h-4 text-blue-400" />, href: '#' },
        { label: 'Order via WhatsApp', icon: <MessageSquare className="w-4 h-4 text-emerald-400" />, href: '#' },
        { label: 'Call Front Desk', icon: <PhoneCall className="w-4 h-4 text-indigo-400" />, href: '#' },
      ],
    },
    agency: {
      title: 'Lumina Digital Agency',
      tagline: 'Growth Marketing & Brand Identity',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&auto=format&fit=crop&q=80',
      buttons: [
        { label: 'Client Case Studies', icon: <Globe className="w-4 h-4 text-blue-400" />, href: '#' },
        { label: 'Schedule 15-Min Audit', icon: <PhoneCall className="w-4 h-4 text-indigo-400" />, href: '#' },
        { label: 'Chat on WhatsApp', icon: <MessageSquare className="w-4 h-4 text-emerald-400" />, href: '#' },
      ],
    },
    creator: {
      title: 'Alex Vance',
      tagline: 'Tech Founder & Content Creator',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      buttons: [
        { label: 'Latest YouTube Video', icon: <ExternalLink className="w-4 h-4 text-rose-400" />, href: '#' },
        { label: 'Subscribe to Newsletter', icon: <Globe className="w-4 h-4 text-purple-400" />, href: '#' },
        { label: 'Download vCard Contact', icon: <PhoneCall className="w-4 h-4 text-blue-400" />, href: '#' },
      ],
    },
  };

  const curr = profiles[activeProfile];

  return (
    <section id="mobile-pages" className="py-24 relative bg-[#070B16] border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Animated Smartphone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-center justify-center relative"
          >
            {/* Profile Picker Switcher Pills */}
            <div className="flex items-center gap-2 mb-6 p-1.5 bg-[#0B1020] border border-white/10 rounded-2xl">
              <button
                onClick={() => setActiveProfile('cafe')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeProfile === 'cafe'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Cafe & Menu
              </button>
              <button
                onClick={() => setActiveProfile('agency')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeProfile === 'agency'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Agency & B2B
              </button>
              <button
                onClick={() => setActiveProfile('creator')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeProfile === 'creator'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Creator & vCard
              </button>
            </div>

            {/* Smartphone Floating Device Frame */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full max-w-[320px] bg-[#050914] border-[6px] border-slate-800 rounded-[40px] p-4 shadow-2xl shadow-blue-900/20 relative overflow-hidden ring-1 ring-white/10"
            >
              {/* Speaker Notch */}
              <div className="w-24 h-4 bg-slate-800 rounded-b-2xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-900 rounded-full" />
              </div>

              {/* Inside Phone Screen Content */}
              <div className="pt-6 pb-4 px-3 space-y-4 text-center">
                {/* Brand Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400">
                  <Sparkles className="w-3 h-3" /> QRMix Micro-Page
                </div>

                {/* Profile Avatar */}
                <div className="relative inline-block mx-auto">
                  <img
                    src={curr.avatar}
                    alt={curr.title}
                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-500/40 shadow-lg mx-auto"
                  />
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#050914] flex items-center justify-center text-[10px] text-white font-bold">
                    ✓
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h4 className="text-base font-extrabold text-white tracking-tight">{curr.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{curr.tagline}</p>
                </div>

                {/* Social Bar */}
                <div className="flex items-center justify-center gap-3 pt-1 text-slate-400">
                  <Instagram className="w-4 h-4 hover:text-white cursor-pointer" />
                  <Twitter className="w-4 h-4 hover:text-white cursor-pointer" />
                  <Linkedin className="w-4 h-4 hover:text-white cursor-pointer" />
                  <Share2 className="w-4 h-4 hover:text-white cursor-pointer" />
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2">
                  {curr.buttons.map((btn, idx) => (
                    <button
                      key={idx}
                      onClick={() => onSuccessToast(`Simulated click on "${btn.label}"`)}
                      className="w-full py-2.5 px-3 bg-[#0D1426] hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 rounded-xl text-xs font-semibold text-white flex items-center justify-between transition-all group"
                    >
                      <span className="flex items-center gap-2">
                        {btn.icon}
                        <span>{btn.label}</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>

                <div className="pt-2 text-[10px] text-slate-500 font-medium">
                  Powered by <span className="text-blue-400 font-bold">QRMix.app</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Text & Feature Bullets */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUpVariant}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5" />
              No-Code Mobile Landing Pages
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Turn Every QR Code Into a Mobile Experience
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Don't just redirect users to static homepages. Build customized mobile micro-pages tailored specifically for mobile phone screens with action buttons, menus, contact cards, and review links.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: 'Mobile-first design', desc: 'Blazing fast loading speeds under 0.2s on 4G/5G.' },
                { title: 'Custom branding', desc: 'Upload your brand logos, custom colors & fonts.' },
                { title: 'Social media links', desc: 'Aggregate Instagram, TikTok, LinkedIn & YouTube.' },
                { title: 'Interactive CTA buttons', desc: 'Direct phone dials, vCard downloads & bookings.' },
                { title: 'Real-time analytics', desc: 'Track button clicks, video views & bounce rates.' },
                { title: 'No-code editor', desc: 'Drag-and-drop builder requiring zero coding skills.' },
              ].map((bullet, idx) => (
                <div key={idx} className="bg-[#0D1426] border border-white/10 rounded-2xl p-4 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{bullet.title}</span>
                  </div>
                  <p className="text-xs text-slate-400">{bullet.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenAuth}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-sm rounded-2xl shadow-xl shadow-purple-600/25 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <span>Build Your Mobile Page</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
