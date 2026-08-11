import { UseCaseItem } from '../types';

export const USE_CASES_DATA: UseCaseItem[] = [
  {
    id: 'restaurants',
    category: 'Hospitality',
    title: 'Restaurants & Bars',
    description: 'Replace paper menus, streamline table ordering, and collect Google reviews instantly.',
    items: ['Touchless Digital Menus', 'Table QR Codes with Order Links', 'Direct Feedback & Review Funnel'],
    iconName: 'Utensils',
  },
  {
    id: 'retail',
    category: 'Commerce',
    title: 'Retail & E-Commerce',
    description: 'Bridge physical products to online storefronts, VIP rewards, and detailed guides.',
    items: ['Product Spec Sheet Links', 'In-Store Discount Promotions', 'Contactless Loyalty Registration'],
    iconName: 'ShoppingBag',
  },
  {
    id: 'realestate',
    category: 'Commerce',
    title: 'Real Estate',
    description: 'Help home buyers instantly view 3D virtual tours and download agent vCards on site.',
    items: ['Interactive Property Listings', 'Instant Agent vCard Download', '360° Virtual Home Tours'],
    iconName: 'Building2',
  },
  {
    id: 'events',
    category: 'Marketing',
    title: 'Events & Conferences',
    description: 'Streamline ticket check-ins, event schedules, Wi-Fi access, and speaker bios.',
    items: ['Mobile Pass Tickets', 'Interactive Event Schedule', 'One-Tap Guest Wi-Fi Access'],
    iconName: 'Ticket',
  },
  {
    id: 'agencies',
    category: 'Marketing',
    title: 'Marketing Agencies',
    description: 'Deliver client campaigns, track conversion metrics, and offer white-label QR tools.',
    items: ['Multi-Client Campaign Tracking', 'Custom Dynamic Redirects', 'White-Label Analytics Dashboards'],
    iconName: 'Briefcase',
  },
  {
    id: 'creators',
    category: 'Marketing',
    title: 'Creators & Influencers',
    description: 'Connect offline audiences to Link-in-Bio pages, merch stores, and social feeds.',
    items: ['All-in-One Link-in-Bio', 'Portfolio & Music Player', 'Exclusive Content Access'],
    iconName: 'Sparkles',
  },
];
