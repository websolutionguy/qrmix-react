import React from 'react';
import { motion } from 'motion/react';
import { Globe, Contact, MessageSquare, Wifi, Utensils, Mail } from 'lucide-react';
import { QRType } from '../../types';

interface QRTypeTabsProps {
  selectedType: QRType;
  onSelectType: (type: QRType) => void;
}

export const QRTypeTabs: React.FC<QRTypeTabsProps> = ({ selectedType, onSelectType }) => {
  const tabs: { type: QRType; label: string; icon: React.ReactNode }[] = [
    { type: 'url', label: 'Website URL', icon: <Globe className="w-4 h-4" /> },
    { type: 'vcard', label: 'vCard Contact', icon: <Contact className="w-4 h-4" /> },
    { type: 'whatsapp', label: 'WhatsApp', icon: <MessageSquare className="w-4 h-4" /> },
    { type: 'wifi', label: 'WiFi Network', icon: <Wifi className="w-4 h-4" /> },
    { type: 'menu', label: 'Digital Menu', icon: <Utensils className="w-4 h-4" /> },
    { type: 'email', label: 'Email', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full overflow-x-auto no-scrollbar pb-2 pt-1">
      <div className="flex items-center gap-1.5 p-1.5 bg-[#070B16] border border-white/10 rounded-2xl min-w-max">
        {tabs.map((tab) => {
          const isActive = selectedType === tab.type;
          return (
            <button
              key={tab.type}
              onClick={() => onSelectType(tab.type)}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md shadow-blue-500/20"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab.icon}
                <span>{tab.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
