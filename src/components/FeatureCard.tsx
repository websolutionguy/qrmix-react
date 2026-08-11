import React from 'react';
import { motion } from 'motion/react';
import {
  RefreshCw,
  BarChart3,
  Smartphone,
  Star,
  QrCode,
  ShieldCheck,
  LucideProps,
} from 'lucide-react';
import { FeatureItem } from '../types';

interface FeatureCardProps {
  feature: FeatureItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const getIcon = (name: string) => {
    const className = 'w-6 h-6 text-blue-400';
    switch (name) {
      case 'RefreshCw':
        return <RefreshCw className={className} />;
      case 'BarChart3':
        return <BarChart3 className={className} />;
      case 'Smartphone':
        return <Smartphone className={className} />;
      case 'Star':
        return <Star className={className} />;
      case 'QrCode':
        return <QrCode className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      default:
        return <QrCode className={className} />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative bg-[#0D1426] border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      {/* Top subtle glow gradient on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-300 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 flex items-center justify-center transition-colors duration-300">
            {getIcon(feature.iconName)}
          </div>
          {feature.badge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 text-blue-300">
              {feature.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
          {feature.title}
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
};
