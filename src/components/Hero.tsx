import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Download,
  BarChart2,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant } from '../utils/animation';

interface HeroProps {
  onScrollToGenerator: () => void;
  onScrollToFeatures: () => void;
  onOpenAuth: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToGenerator,
  onScrollToFeatures,
  onOpenAuth,
}) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-purple-600/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Hero Badge */}
          <motion.div variants={fadeUpVariant} className="inline-block mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                The Next-Gen QR Campaign Platform
              </span>
            </div>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            variants={fadeUpVariant}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            Create{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Smart QR Codes
            </span>
            .<br className="hidden sm:block" />
            Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Dynamic Campaigns
            </span>
            .
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={fadeUpVariant}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Generate powerful QR experiences for your business. Create dynamic redirects, track scans in real-time, build mobile landing pages, and turn offline traffic into measurable digital campaigns.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={onScrollToGenerator}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-2xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Zap className="w-4 h-4 text-blue-200 fill-blue-200" />
              <span>Generate QR Code Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onScrollToFeatures}
              className="w-full sm:w-auto px-8 py-4 bg-white/[0.05] hover:bg-white/[0.08] text-white font-semibold text-sm rounded-2xl border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Platform</span>
            </button>
          </motion.div>

          {/* Feature Indicator Row */}
          <motion.div
            variants={fadeUpVariant}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto pt-6 border-t border-white/[0.08]"
          >
            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
              <Download className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-200">High-Res SVG & PNG</span>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
              <BarChart2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-200">Live Scan Analytics</span>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
              <Smartphone className="w-4 h-4 text-purple-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-200">Mobile Landing Pages</span>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-200">Campaign Tracking</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
