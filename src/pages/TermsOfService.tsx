import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, FileText, Clock, Scale, ShieldAlert } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  useEffect(() => {
    document.title = 'QRMix | Terms of Service';
  }, []);

  const sections = [
    {
      num: 1,
      title: 'Introduction',
      content:
        'Welcome to QRMix. These Terms of Service ("Terms") govern your access to and use of the QRMix website, software tools, APIs, dynamic QR code management platform, and related services ("Services").',
    },
    {
      num: 2,
      title: 'Acceptance of Terms',
      content:
        'By creating an account, generating a QR code, or utilizing any portion of our platform, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must cease using our Services immediately.',
    },
    {
      num: 3,
      title: 'Account Registration',
      content:
        'You must provide accurate, complete, and updated information when creating a QRMix account. You are solely responsible for safeguarding your login credentials and for all activities that occur under your account.',
    },
    {
      num: 4,
      title: 'User Responsibilities',
      content:
        'You represent and warrant that you own or have obtained all necessary licenses, permissions, and rights to publish and link any content embedded within your QR codes or mobile landing pages.',
    },
    {
      num: 5,
      title: 'QR Code Services',
      content:
        'QRMix grants you a non-exclusive, non-transferable, revocable license to create, customize, download, and distribute static and dynamic QR codes generated through our platform for commercial or personal use.',
    },
    {
      num: 6,
      title: 'Dynamic QR Codes',
      content:
        'Dynamic QR codes route traffic through QRMix redirect servers. While active under your plan, you may update destination URLs at any time. If an account is terminated or plan limits are exceeded, dynamic routing may be temporarily restricted.',
    },
    {
      num: 7,
      title: 'Analytics',
      content:
        'Scan analytics provided in your dashboard represent estimations and aggregates derived from web requests. While we strive for 99.99% tracking accuracy, network variances and user ad-blockers may affect aggregate tallies.',
    },
    {
      num: 8,
      title: 'Mobile Landing Pages',
      content:
        'Our micro-landing page builder lets you organize links, text, and media. You must ensure all uploaded media complies with copyright laws and does not contain deceptive or harmful elements.',
    },
    {
      num: 9,
      title: 'Subscription Plans',
      content:
        'QRMix offers Free, Pro, and Enterprise subscription tiers. Feature sets, dynamic QR code allocations, and scan limits per plan are detailed on our Pricing page.',
    },
    {
      num: 10,
      title: 'Free and Paid Services',
      content:
        'Free plans provide core static QR features and limited dynamic campaign tracking. Paid tiers unlock premium customizations, high-volume routing, custom domains, and extended log retention.',
    },
    {
      num: 11,
      title: 'Billing',
      content:
        'Paid subscriptions are billed on a recurring monthly or annual cycle starting from your subscription activation date. Fees are charged automatically to your configured payment method.',
    },
    {
      num: 12,
      title: 'Cancellation',
      content:
        'You may cancel your subscription at any time via your account settings. Upon cancellation, paid features remain accessible until the conclusion of the current billing cycle.',
    },
    {
      num: 13,
      title: 'Refunds',
      content:
        'Except as required by applicable consumer law, subscription fees are non-refundable. We offer a 14-day money-back guarantee for first-time annual plan upgrades.',
    },
    {
      num: 14,
      title: 'Acceptable Use',
      content:
        'You agree to use QRMix in compliance with all applicable local, national, and international laws, regulations, and industry standards.',
    },
    {
      num: 15,
      title: 'Prohibited Activities',
      content:
        'You are strictly prohibited from using QRMix to distribute malware, phishing links, counterfeit goods promotions, deceptive financial schemes, hate speech, explicit illegal content, or unsolicited spam.',
    },
    {
      num: 16,
      title: 'Intellectual Property',
      content:
        'The QRMix platform, source code, visual branding, logos, graphics, and trademarks are owned exclusively by QRMix. You retain all ownership rights to your original uploaded logos and custom content.',
    },
    {
      num: 17,
      title: 'User Content',
      content:
        'You grant QRMix a global, non-exclusive license to host, display, and transmit your uploaded assets solely for the purpose of operating and displaying your QR codes and landing pages.',
    },
    {
      num: 18,
      title: 'Third-Party Services',
      content:
        'QR codes generated on QRMix may link to third-party destinations. We do not endorse, control, or assume liability for third-party websites or services linked through user campaigns.',
    },
    {
      num: 19,
      title: 'Service Availability',
      content:
        'We target 99.99% operational uptime for our global routing engine. However, we do not guarantee uninterrupted service during scheduled system maintenance or unannounced cloud outages.',
    },
    {
      num: 20,
      title: 'Disclaimer',
      content:
        'THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO FITNESS FOR A PARTICULAR PURPOSE.',
    },
    {
      num: 21,
      title: 'Limitation of Liability',
      content:
        'TO THE MAXIMUM EXTENT PERMITTED BY LAW, QRMix SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, OR LOSS OF PROFITS OR DATA.',
    },
    {
      num: 22,
      title: 'Indemnification',
      content:
        'You agree to defend, indemnify, and hold harmless QRMix and its officers from any claims, liabilities, damages, or legal expenses arising from your violation of these Terms or misuse of the platform.',
    },
    {
      num: 23,
      title: 'Termination',
      content:
        'We reserve the right to suspend or terminate accounts that breach these Terms or engage in abusive campaign activities without prior notice.',
    },
    {
      num: 24,
      title: 'Changes to Terms',
      content:
        'We may revise these Terms at any time. Continued usage of QRMix after revised Terms are posted constitutes acceptance of the modified agreement.',
    },
    {
      num: 25,
      title: 'Governing Law',
      content:
        'These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.',
    },
    {
      num: 26,
      title: 'Contact Information',
      content:
        'If you have questions regarding these Terms of Service, please reach out via our Contact Page or write to us at legal@example.com.',
    },
  ];

  return (
    <div className="pt-28 pb-20 relative bg-[#050914] min-h-screen text-slate-300">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 border-b border-white/10 pb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5" /> User Agreement & Service License
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <strong>Last Updated:</strong> August 11, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              Comprehensive SaaS Terms
            </span>
          </div>
        </motion.div>

        {/* Sections Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-sm leading-relaxed"
        >
          {sections.map((sec) => (
            <div
              key={sec.num}
              className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-2.5 shadow-xl hover:border-white/20 transition-colors"
            >
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-indigo-400 font-mono text-sm">#{sec.num}</span>
                {sec.title}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{sec.content}</p>
            </div>
          ))}
        </motion.div>

        {/* Footer Back Button */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to QRMix Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
