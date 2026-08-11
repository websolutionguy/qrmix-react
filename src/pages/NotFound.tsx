import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { QrCode, Home as HomeIcon, AlertCircle } from 'lucide-react';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'QRMix | 404 Page Not Found';
  }, []);

  return (
    <div className="pt-32 pb-24 relative bg-[#050914] min-h-screen text-slate-300 flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-md mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-[#0D1426] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6"
        >
          {/* Badge */}
          <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto shadow-lg shadow-blue-500/10">
            <QrCode className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-blue-400 tracking-widest uppercase">
              Error 404
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Page Not Found</h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Sorry, the page you're looking for doesn't exist or has been moved to a new dynamic URL.
            </p>
          </div>

          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
            >
              <HomeIcon className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
