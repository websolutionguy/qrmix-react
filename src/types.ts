export type QRType = 'url' | 'vcard' | 'whatsapp' | 'wifi' | 'menu' | 'email';

export interface VCardData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  title: string;
  website: string;
}

export interface WhatsAppData {
  phone: string;
  message: string;
}

export interface WifiData {
  ssid: string;
  password: string;
  encryption: 'WPA' | 'WEP' | 'nopass';
  hidden: boolean;
}

export interface MenuData {
  menuUrl: string;
  restaurantName: string;
  tableNumber: string;
}

export interface EmailData {
  email: string;
  subject: string;
  body: string;
}

export interface QRCustomization {
  fgColor: string;
  bgColor: string;
  level: 'L' | 'M' | 'Q' | 'H';
  margin: number;
  includeLogo: boolean;
  size: number;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface UseCaseItem {
  id: string;
  category: string;
  title: string;
  description: string;
  items: string[];
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  isPopular?: boolean;
  features: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'outline';
}

export interface AnalyticsMetric {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}
