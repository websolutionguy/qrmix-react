import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Utensils,
  ShoppingBag,
  Building2,
  Ticket,
  Briefcase,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { USE_CASES_DATA } from '../data/useCases';
import { fadeUpVariant, staggerContainerVariant } from '../utils/animation';

interface UseCasesProps {
  onSelectUseCase?: (id: string) => void;
}

export const UseCases: React.FC<UseCasesProps> = ({ onSelectUseCase }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Hospitality', 'Commerce', 'Marketing'];

  const filteredUseCases =
    activeCategory === 'All'
      ? USE_CASES_DATA
      : USE_CASES_DATA.filter((item) => item.category === activeCategory);

  const getIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-indigo-400' };
    switch (name) {
      case 'Utensils':
        return <Utensils {...props} />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Ticket':
        return <Ticket {...props} />;
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="use-cases" className="py-24 relative bg-[#070B16] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Tailored Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Built for Every Industry & Workflow
          </h2>
          <p className="text-base text-slate-300">
            See how high-performing teams use QRMix to convert physical touchpoints into digital engagement.
          </p>

          {/* Filter Pills / Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap" role="tablist">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count =
                cat === 'All'
                  ? USE_CASES_DATA.length
                  : USE_CASES_DATA.filter((item) => item.category === cat).length;

              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 ring-2 ring-blue-400/30 scale-105'
                      : 'bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Use Case Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainerVariant}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredUseCases.map((useCase) => (
              <motion.div
                key={useCase.id}
                variants={fadeUpVariant}
                whileHover={{ y: -5 }}
                className="bg-[#0D1426] border border-white/10 hover:border-indigo-500/40 rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(useCase.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{useCase.title}</h3>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-400">
                        {useCase.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                    {useCase.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {useCase.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">Ready template included</span>
                  <button
                    onClick={() => onSelectUseCase?.(useCase.id)}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>View Flow</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

