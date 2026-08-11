import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
  onSelectPlan: (planId: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly, onSelectPlan }) => {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
        plan.isPopular
          ? 'bg-gradient-to-b from-[#10182B] via-[#0D1426] to-[#0B1020] border-2 border-blue-500 shadow-2xl shadow-blue-600/20'
          : 'bg-[#0D1426] border border-white/10 hover:border-white/20 shadow-xl'
      }`}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 border border-blue-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Most Popular
        </div>
      )}

      <div>
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">{plan.description}</p>
        </div>

        {/* Price */}
        <div className="mb-8 flex items-baseline gap-1">
          <span className="text-4xl sm:text-5xl font-black text-white">${price}</span>
          <span className="text-xs font-semibold text-slate-400">
            {plan.monthlyPrice === 0 ? '/ forever' : `/ month ${isYearly ? '(billed yearly)' : ''}`}
          </span>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
            INCLUDED FEATURES
          </span>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  plan.isPopular ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-slate-300'
                }`}
              >
                <Check className="w-3 h-3" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => onSelectPlan(plan.id)}
        className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
          plan.isPopular
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30'
            : 'bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white'
        }`}
      >
        <span>{plan.buttonText}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
};
