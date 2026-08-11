import React from 'react';
import { motion } from 'motion/react';
import { FEATURES_DATA } from '../data/features';
import { FeatureCard } from './FeatureCard';
import { fadeUpVariant, staggerContainerVariant } from '../utils/animation';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-[#050914]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything You Need for Smart QR Campaigns
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Powerful tools designed for businesses, creators and agencies.
          </p>
        </motion.div>

        {/* 3-column Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {FEATURES_DATA.map((feature) => (
            <motion.div key={feature.id} variants={fadeUpVariant}>
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
