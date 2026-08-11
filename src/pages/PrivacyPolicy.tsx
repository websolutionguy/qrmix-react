import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, Clock, FileText, Lock, AlertCircle } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'QRMix | Privacy Policy';
  }, []);

  return (
    <div className="pt-28 pb-20 relative bg-[#050914] min-h-screen text-slate-300">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back link */}
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" /> Data Protection & Transparency
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <strong>Last Updated:</strong> August 11, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              AES-256 Encryption Standard
            </span>
          </div>
        </motion.div>

        {/* Legal Advisory Note */}
        <div className="mb-10 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Legal Notice:</strong> This document outlines QRMix's standard data processing practices. It is provided for informational and platform transparency purposes and should be reviewed with qualified legal counsel for specific jurisdictional compliance.
          </p>
        </div>

        {/* Main Document Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-10 text-sm leading-relaxed"
        >
          {/* Section 1 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">1.</span> Introduction
            </h2>
            <p>
              At QRMix ("we", "our", or "us"), operated under high data security standards, we prioritize protecting the privacy of our creators, customers, and scanners. This Privacy Policy describes how we collect, use, store, and protect your personal information when you use our website, mobile application, dynamic link shortener, and QR code generation platform.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">2.</span> Information We Collect
            </h2>
            <p>
              We collect information to provide better services to all our users—from determining basic usage language to advanced dynamic campaign performance tracking. We collect information in two main categories: information you provide directly and information collected automatically through our edge routing nodes.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">3.</span> Information You Provide
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Account Credentials:</strong> Full name, business email address, company name, and encrypted password hash upon registration.</li>
              <li><strong>Payment Information:</strong> Credit card details and billing address processed securely through PCI-DSS compliant third-party payment providers.</li>
              <li><strong>User Content:</strong> Embedded URLs, vCard digital business card fields, WiFi SSIDs/passwords, custom uploaded images or logos, and mobile landing page components.</li>
              <li><strong>Communications:</strong> Messages, support inquiries, and feedback submitted through our contact forms.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">4.</span> Automatically Collected Information
            </h2>
            <p>
              When you visit our site or scan a QRMix dynamic code, our system automatically logs generalized scan telemetry data:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Device type (iOS, Android, Windows, Mac).</li>
              <li>Browser category and operating system version.</li>
              <li>Coarse geographic location (country and city level via IP lookup).</li>
              <li>Timestamp of scan event and referring domain.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">5.</span> QR Code and Campaign Data
            </h2>
            <p>
              QRMix acts as a processor for user-generated QR campaigns. Data encoded directly into static QR codes (such as plain text or standard URLs) resides permanently within the printed image itself. Dynamic QR code data is managed through our edge servers, allowing account owners to modify destination targets without changing the physical print asset.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">6.</span> How We Use Information
            </h2>
            <p>We use collected data for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Delivering instant low-latency dynamic link redirection.</li>
              <li>Generating real-time campaign analytics dashboards for account owners.</li>
              <li>Preventing malicious redirect URLs, phishing, or abusive campaign activities.</li>
              <li>Sending transactional notifications, invoice receipts, and system security alerts.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">7.</span> Analytics
            </h2>
            <p>
              We compile aggregated, non-personally identifiable statistical summaries for campaign metrics. We do not store precise GPS tracking coordinates or track individual user browsing history across external websites.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">8.</span> Cookies and Similar Technologies
            </h2>
            <p>
              We use cookies, local storage, and session tokens to keep you logged in, save your design preferences, and optimize system navigation speed. You can manage or disable non-essential cookies via our Cookie Policy settings.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">9.</span> Google AdSense and Advertising
            </h2>
            <p>
              Third-party vendors, including Google AdSense, may use cookies or device identifiers to serve non-intrusive advertisements on certain public pages based on prior visits to our platform or other web resources. Users may opt out of personalized advertising by visiting Google Ads Settings.
            </p>
          </section>

          {/* Section 10 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">10.</span> Third-Party Services
            </h2>
            <p>
              Our platform integrates with trusted infrastructure partners (such as cloud hosting, CDN distribution, and payment processing). These third parties process data only under strict contractual confidentiality obligations.
            </p>
          </section>

          {/* Section 11 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">11.</span> Data Sharing
            </h2>
            <p>
              We do <strong>NOT</strong> sell, rent, or trade personal data or scanner information to data brokers or third-party marketers. We share information only when required by law or to protect platform safety.
            </p>
          </section>

          {/* Section 12 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">12.</span> Data Retention
            </h2>
            <p>
              We retain account data for as long as your subscription remains active. Active dynamic campaign logs are preserved based on your plan tier (30 days for Free, 1 year for Pro, unlimited for Enterprise).
            </p>
          </section>

          {/* Section 13 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">13.</span> Data Security
            </h2>
            <p>
              We enforce administrative, technical, and physical safeguards including SSL/TLS encrypted connections, Web Application Firewalls (WAF), and automated intrusion detection systems.
            </p>
          </section>

          {/* Section 14 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">14.</span> Your Rights
            </h2>
            <p>
              Depending on your location (e.g. GDPR in Europe or CCPA in California), you hold rights to access, correct, export, or delete your personal data. You can exercise these options directly in your dashboard or by reaching out to our support team.
            </p>
          </section>

          {/* Section 15 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">15.</span> Children's Privacy
            </h2>
            <p>
              QRMix is intended for general business audiences and does not knowingly collect personal information from children under the age of 13.
            </p>
          </section>

          {/* Section 16 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">16.</span> International Data Transfers
            </h2>
            <p>
              Data may be stored and processed on servers located in various global edge regions. Cross-border transfers adhere to recognized standard contractual clauses (SCCs) and privacy frameworks.
            </p>
          </section>

          {/* Section 17 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">17.</span> Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect platform enhancements or regulatory changes. Material updates will be highlighted via in-app banner notifications.
            </p>
          </section>

          {/* Section 18 */}
          <section className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">18.</span> Contact Us
            </h2>
            <p>
              If you have any questions or privacy requests regarding this document, please reach out through our{' '}
              <Link to="/contact-us" className="text-blue-400 underline hover:text-blue-300 font-semibold">
                Contact Page
              </Link>{' '}
              or email us at <strong>privacy@example.com</strong>.
            </p>
          </section>
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
