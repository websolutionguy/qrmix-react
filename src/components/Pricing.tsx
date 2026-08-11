import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRICING_DATA } from '../data/pricing';
import { PricingCard } from './PricingCard';
import { fadeUpVariant, staggerContainerVariant } from '../utils/animation';

interface PricingProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onSuccessToast: (msg: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenAuth, onSuccessToast }) => {
  const [isYearly, setIsYearly] = useState(true);

  const handleSelectPlan = (planId: string) => {
    if (planId === 'free') {
      onOpenAuth('signup');
    } else if (planId === 'pro') {
      onOpenAuth('signup');
    } else {
      onSuccessToast('Enterprise sales request submitted! A rep will reach out shortly.');
    }
  };

  return (
    <section id="pricing" className="py-24 relative bg-[#050914] border-t border-white/[0.06]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Transparent Subscription Plans
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Simple Pricing for Growing Businesses
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Start free and upgrade when your dynamic campaigns scale up.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span
              onClick={() => setIsYearly(false)}
              className={`text-xs font-semibold cursor-pointer transition-colors ${
                !isYearly ? 'text-white' : 'text-slate-400'
              }`}
            >
              Monthly Billing
            </span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-12 h-6 bg-[#0D1426] border border-white/20 rounded-full p-1 transition-colors cursor-pointer"
            >
              <motion.div
                animate={{ x: isYearly ? 24 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="w-4 h-4 rounded-full bg-blue-500"
              />
            </button>

            <span
              onClick={() => setIsYearly(true)}
              className={`text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
                isYearly ? 'text-white' : 'text-slate-400'
              }`}
            >
              Annual Billing
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* 3 Pricing Cards Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto"
        >
          {PRICING_DATA.map((plan) => (
            <motion.div key={plan.id} variants={fadeUpVariant} className="flex">
              <PricingCard plan={plan} isYearly={isYearly} onSelectPlan={handleSelectPlan} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
