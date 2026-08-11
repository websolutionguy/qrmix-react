import React from 'react';
import { motion } from 'motion/react';
import { QrCode, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { fadeUpVariant } from '../utils/animation';

interface CTAProps {
  onScrollToGenerator: () => void;
  onScrollToFeatures: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onScrollToGenerator, onScrollToFeatures }) => {
  return (
    <section className="py-20 relative bg-[#070B16] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUpVariant}
          className="relative bg-gradient-to-r from-[#0D1426] via-[#10182B] to-[#0D1426] border border-white/10 rounded-3xl p-8 sm:p-14 text-center overflow-hidden shadow-2xl"
        >
          {/* Animated Background Glows */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-600/30 rounded-full blur-[100px] pointer-events-none"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              Instant 30-Second Setup
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Turn Offline Traffic Into Digital Growth?
            </h2>

            <p className="text-base sm:text-lg text-slate-300">
              Create your first QR campaign in seconds. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onScrollToGenerator}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-2xl shadow-xl shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <QrCode className="w-4 h-4" />
                <span>Create Free QR Code</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToFeatures}
                className="w-full sm:w-auto px-8 py-4 bg-white/[0.05] hover:bg-white/10 text-white font-semibold text-sm rounded-2xl border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Features</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Free 1,000 Scans/Mo
              </span>
              <span>•</span>
              <span>No Credit Card Needed</span>
              <span>•</span>
              <span>Instant SVG & PNG Downloads</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
