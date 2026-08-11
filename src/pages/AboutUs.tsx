import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  QrCode,
  Zap,
  BarChart3,
  Smartphone,
  Star,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const AboutUs: React.FC = () => {
  useEffect(() => {
    document.title = 'QRFlow | About Us';
  }, []);

  const features = [
    {
      icon: <QrCode className="w-5 h-5 text-blue-400" />,
      title: 'QR Code Management',
      desc: 'Centralized dashboard to organize, edit, tag, and export thousands of vector-ready QR codes across marketing campaigns.',
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: 'Dynamic QR Campaigns',
      desc: 'Change destination URLs anytime without reprinting physical packaging, brochures, billboards, or business cards.',
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
      title: 'Real-Time Analytics',
      desc: 'Track scans by country, device, browser, time of day, and operating system with detailed visual graphs.',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-purple-400" />,
      title: 'Mobile Landing Pages',
      desc: 'Build no-code mobile pages for vCards, menus, social link trees, app downloads, and product showcases in minutes.',
    },
    {
      icon: <Star className="w-5 h-5 text-yellow-400" />,
      title: 'Review Funnels',
      desc: 'Smart feedback routing that directs happy customers to Google/Yelp reviews while filtering internal customer feedback.',
    },
  ];

  const whoWeServe = [
    'Retail Stores & Restaurants (Menus & Loyalty)',
    'Real Estate Agents & Property Managers',
    'Event Organizers & Conference Producers',
    'E-Commerce & Packaging Brands',
    'Digital Agencies & Marketing Consultancies',
    'Healthcare Clinics & Service Providers',
  ];

  return (
    <div className="pt-28 pb-20 relative bg-[#050914] min-h-screen text-slate-300">
      {/* Background Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Next-Generation Campaign Infrastructure
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">QRFlow</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            QRFlow is a modern QR management platform designed to help businesses, agencies, and creators build, track, and optimize high-converting physical-to-digital customer experiences.
          </p>
        </motion.div>

        {/* What is QRFlow & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#0D1426] border border-white/10 rounded-3xl p-8 space-y-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <QrCode className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">What is QRFlow?</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              QRFlow combines ultra-fast vector QR code generation with dynamic link routing and no-code mobile landing page construction. We turn static print assets into interactive, measurable digital touchpoints.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#0D1426] border border-white/10 rounded-3xl p-8 space-y-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Our Mission</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To empower brands of every size with enterprise-grade physical attribution tools. We eliminate broken print collateral and static limits by giving teams instant control over every QR code destination worldwide.
            </p>
          </motion.div>
        </div>

        {/* What We Build (Core Capabilities) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              What We Build
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              An all-in-one suite engineered for reliability, high conversion, and real-time tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-white/20 transition-all hover:-translate-y-1 shadow-lg"
              >
                <div className="p-2.5 rounded-xl bg-white/[0.05] w-fit border border-white/10">
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold text-white">{feat.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why QRFlow & Who We Serve */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Why QRFlow */}
          <div className="bg-[#0D1426] border border-white/10 rounded-3xl p-8 space-y-5">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
              Why Choose QRFlow?
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>99.99% Uptime:</strong> Edge-routed global network ensures instant scan resolution.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>No Print Waste:</strong> Dynamic QR destination updates save thousands in re-printing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Custom Branding:</strong> Embed logos, adjust frame styles, and match brand colors effortlessly.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Privacy-First:</strong> Fully GDPR and CCPA compliant scan logging with no intrusive tracking.</span>
              </li>
            </ul>
          </div>

          {/* Who We Serve */}
          <div className="bg-[#0D1426] border border-white/10 rounded-3xl p-8 space-y-5">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Users className="w-6 h-6 text-purple-400" />
              Who We Serve
            </h2>
            <div className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-slate-300">
              {whoWeServe.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 border border-blue-500/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Upgrade Your QR Campaigns?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Create your first custom dynamic QR code or mobile landing page in less than 60 seconds.
            </p>
            <div className="pt-4">
              <Link
                to="/#generator"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:scale-105 transition-all cursor-pointer"
              >
                <span>Start Creating QR Codes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
