import { FeatureItem } from '../types';

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'dynamic-redirects',
    title: 'Dynamic Short-Link Redirects',
    description: 'Change your destination URL anytime without reprinting or replacing existing physical QR codes.',
    iconName: 'RefreshCw',
    badge: 'Popular',
  },
  {
    id: 'realtime-analytics',
    title: 'Real-Time Scan Analytics',
    description: 'Track scans, unique visitors, devices, operating systems, browsers, and precise geographic locations.',
    iconName: 'BarChart3',
    badge: 'Live Data',
  },
  {
    id: 'mobile-builder',
    title: 'Mobile Landing Page Builder',
    description: 'Create mobile-first landing pages with custom buttons, social links, products, and calls-to-action.',
    iconName: 'Smartphone',
    badge: 'No-Code',
  },
  {
    id: 'review-funnel',
    title: 'Review Funnel Engine',
    description: 'Send satisfied customers directly to Google/Yelp reviews while capturing internal feedback from others.',
    iconName: 'Star',
  },
  {
    id: 'static-utilities',
    title: 'Free Static QR Utilities',
    description: 'Generate vector QR codes for WiFi, WhatsApp, email, contact details, and restaurant digital menus.',
    iconName: 'QrCode',
  },
  {
    id: 'enterprise-reliability',
    title: 'Enterprise Grade Reliability',
    description: 'Fast global CDN delivery, 99.99% uptime SLA, reliable redirects, and scalable campaign infrastructure.',
    iconName: 'ShieldCheck',
    badge: '99.99% Uptime',
  },
];
