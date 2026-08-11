import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BarChart2,
  TrendingUp,
  Users,
  Globe2,
  Smartphone,
  CheckCircle2,
  Calendar,
  Filter,
} from 'lucide-react';
import { fadeUpVariant } from '../utils/animation';

export const AnalyticsPreview: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const chartData = [
    { day: 'Mon', scans: 2400, unique: 1800 },
    { day: 'Tue', scans: 3100, unique: 2300 },
    { day: 'Wed', scans: 2800, unique: 2100 },
    { day: 'Thu', scans: 4200, unique: 3100 },
    { day: 'Fri', scans: 5600, unique: 4200 },
    { day: 'Sat', scans: 4900, unique: 3700 },
    { day: 'Sun', scans: 3892, unique: 3221 },
  ];

  const countries = [
    { name: 'United States', code: 'US', scans: '11,420', percent: 46 },
    { name: 'United Kingdom', code: 'GB', scans: '4,810', percent: 19 },
    { name: 'Canada', code: 'CA', scans: '3,250', percent: 13 },
    { name: 'Australia', code: 'AU', scans: '2,980', percent: 12 },
  ];

  return (
    <section id="analytics" className="py-24 relative bg-[#050914] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUpVariant}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <BarChart2 className="w-3.5 h-3.5" />
              Live Campaign Telemetry
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Know Exactly What Your QR Codes Are Doing
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Track every scan and understand where your audience is coming from. Make data-backed marketing decisions with instant real-time telemetry.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Total scans & unique visitor deduplication',
                'Precise geographic city & country locations',
                'Device breakdown (iOS, Android, Desktop)',
                'Browser & Operating system distribution',
                'Peak scan hours & conversion funnel rates',
                'Automated CSV & PDF campaign exports',
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-sm text-slate-200 font-medium">{bullet}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-[#0B1020] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6 relative overflow-hidden"
          >
            {/* Header bar of Dashboard */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Q3 Summer Outdoor Campaign</span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-400">
                    Live Active
                  </span>
                </h3>
                <p className="text-xs text-slate-400">Real-time scan tracking feed</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Last 7 Days</span>
                </div>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#070B16] border border-white/10 rounded-2xl p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Total Scans
                </span>
                <div className="text-xl sm:text-2xl font-black text-white">24,892</div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+14.2% vs last week</span>
                </div>
              </div>

              <div className="bg-[#070B16] border border-white/10 rounded-2xl p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Unique Visitors
                </span>
                <div className="text-xl sm:text-2xl font-black text-white">18,421</div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-blue-400 mt-1">
                  <Users className="w-3 h-3" />
                  <span>74% unique rate</span>
                </div>
              </div>

              <div className="bg-[#070B16] border border-white/10 rounded-2xl p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Conversion Rate
                </span>
                <div className="text-xl sm:text-2xl font-black text-white">8.42%</div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-indigo-400 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>2,095 actions</span>
                </div>
              </div>
            </div>

            {/* Time Series SVG Line Chart */}
            <div className="bg-[#070B16] border border-white/10 rounded-2xl p-4 relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-300">Scan Volume Over Time</span>
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="flex items-center gap-1 text-blue-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-blue-500" /> Total Scans
                  </span>
                  <span className="flex items-center gap-1 text-indigo-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" /> Unique Scans
                  </span>
                </div>
              </div>

              {/* Chart SVG */}
              <div className="relative h-44 w-full">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150">
                  <defs>
                    <linearGradient id="scansGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="70" x2="500" y2="70" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="110" x2="500" y2="110" stroke="rgba(255,255,255,0.05)" />

                  {/* Area fill */}
                  <path
                    d="M 10 110 Q 80 90, 150 100 T 290 50 T 430 30 L 490 60 L 490 140 L 10 140 Z"
                    fill="url(#scansGradient)"
                  />

                  {/* Scans Line */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    d="M 10 110 Q 80 90, 150 100 T 290 50 T 430 30 L 490 60"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Data Nodes */}
                  {[
                    { x: 10, y: 110, val: 2400 },
                    { x: 90, y: 90, val: 3100 },
                    { x: 170, y: 100, val: 2800 },
                    { x: 250, y: 65, val: 4200 },
                    { x: 330, y: 40, val: 5600 },
                    { x: 410, y: 30, val: 4900 },
                    { x: 490, y: 60, val: 3892 },
                  ].map((node, idx) => (
                    <g key={idx}>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="5"
                        fill="#38BDF8"
                        className="cursor-pointer hover:r-7 transition-all"
                        onMouseEnter={() => setHoveredPoint(idx)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                    </g>
                  ))}
                </svg>

                {/* Day Labels */}
                <div className="flex justify-between text-[10px] font-semibold text-slate-500 pt-1">
                  {chartData.map((d) => (
                    <span key={d.day}>{d.day}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Device & Country breakdown row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Device breakdown */}
              <div className="bg-[#070B16] border border-white/10 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-blue-400" /> Device Distribution
                  </span>
                  <span className="text-[10px] text-slate-400">72% Mobile</span>
                </div>

                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-300 mb-1">
                      <span>Mobile (iOS / Android)</span>
                      <span className="font-bold text-white">72%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '72%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-300 mb-1">
                      <span>Desktop</span>
                      <span className="font-bold text-white">21%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: '21%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-300 mb-1">
                      <span>Tablet</span>
                      <span className="font-bold text-white">7%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: '7%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Country List */}
              <div className="bg-[#070B16] border border-white/10 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-indigo-400" /> Top Geographic Regions
                  </span>
                </div>

                <div className="space-y-2">
                  {countries.map((c) => (
                    <div key={c.code} className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">{c.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-[11px]">{c.scans} scans</span>
                        <span className="font-bold text-white w-7 text-right">{c.percent}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
