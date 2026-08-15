import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import {
  ArrowLeft,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  AlertCircle,
  Loader2,
} from 'lucide-react';

interface ContactUsProps {
  onSuccessToast?: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const ContactUs: React.FC<ContactUsProps> = ({ onSuccessToast }) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    document.title = 'QRMix | Contact Us';
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // Replace these three strings with your EmailJS credentials
      await emailjs.sendForm(
        'service_qopmz0g',
        'template_z4cz23k',
        formRef.current!,
        'HTgJsbQy8aQgvi-6n'
      );

      setSubmitted(true);
      if (onSuccessToast) {
        onSuccessToast('Thanks! Your message has been received.', 'success');
      }
      setFormData({ fullName: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('EmailJS Error:', error);
      if (onSuccessToast) {
        onSuccessToast('Failed to send message. Please try again.', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20 relative bg-[#050914] min-h-screen text-slate-300">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" /> Customer & Enterprise Support
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            How Can We Help?
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Have a question about QRMix, your QR campaigns, billing, or our platform? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Information Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#0D1426] border border-white/10 rounded-3xl p-7 space-y-5 shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Technical & Campaign Support
                  </div>
                  <div className="font-semibold text-white">support@qrmix.us</div>
                  <div className="text-[11px] text-slate-400">Average response time: &lt; 2 hours</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Sales & Enterprise Inquiries
                  </div>
                  <div className="font-semibold text-white">sales@qrmix.us</div>
                  <div className="text-[11px] text-slate-400">Custom dynamic high-volume routing</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Billing & Accounts
                  </div>
                  <div className="font-semibold text-white">billing@qrmix.us</div>
                  <div className="text-[11px] text-slate-400">Invoices, tax forms, upgrades</div>
                </div>
              </div>
            </div>

            <div className="bg-[#0D1426] border border-white/10 rounded-3xl p-7 space-y-3 shadow-xl">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                Global Support Availability
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our support team is available 24/7 for critical Enterprise downtime alerts. General support is monitored Monday through Friday, 8:00 AM – 8:00 PM EST.
              </p>
            </div>
          </motion.div>

          {/* Contact Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0D1426] border border-white/10 rounded-3xl p-7 sm:p-9 shadow-2xl relative"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thanks! Your message has been received. Our support team will review your inquiry and reach out shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Send Us a Message</h3>

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                    <span>Full Name *</span>
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.fullName ? 'border-rose-500' : 'border-white/10'
                    } focus:border-blue-500 focus:bg-white/[0.06] text-white text-xs outline-none transition-all`}
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                    <span>Email Address *</span>
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.email ? 'border-rose-500' : 'border-white/10'
                    } focus:border-blue-500 focus:bg-white/[0.06] text-white text-xs outline-none transition-all`}
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                    <span>Subject *</span>
                    {errors.subject && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Inquiry about Pro plan dynamic limits"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.subject ? 'border-rose-500' : 'border-white/10'
                    } focus:border-blue-500 focus:bg-white/[0.06] text-white text-xs outline-none transition-all`}
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                    <span>Message *</span>
                    {errors.message && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help your campaign..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.message ? 'border-rose-500' : 'border-white/10'
                    } focus:border-blue-500 focus:bg-white/[0.06] text-white text-xs outline-none transition-all resize-none`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};