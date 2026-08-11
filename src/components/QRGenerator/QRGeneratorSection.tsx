import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  QRType,
  VCardData,
  WhatsAppData,
  WifiData,
  MenuData,
  EmailData,
  QRCustomization,
} from '../../types';
import { QRTypeTabs } from './QRTypeTabs';
import { QRForm } from './QRForm';
import { QRPreview } from './QRPreview';
import { fadeUpVariant } from '../../utils/animation';

interface QRGeneratorSectionProps {
  onSuccessToast: (msg: string) => void;
}

export const QRGeneratorSection: React.FC<QRGeneratorSectionProps> = ({ onSuccessToast }) => {
  const [selectedType, setSelectedType] = useState<QRType>('url');

  // Form states
  const [url, setUrl] = useState('https://qrflow.app');

  const [vcard, setVcard] = useState<VCardData>({
    firstName: 'Sarah',
    lastName: 'Jenkins',
    phone: '+1 (555) 234-5678',
    email: 'sarah@company.com',
    company: 'Apex Digital Inc',
    title: 'VP Marketing',
    website: 'https://apexdigital.com',
  });

  const [whatsapp, setWhatsapp] = useState<WhatsAppData>({
    phone: '15550192834',
    message: 'Hello! I am interested in learning more about QRFlow dynamic campaigns.',
  });

  const [wifi, setWifi] = useState<WifiData>({
    ssid: 'Guest_WiFi_5G',
    password: 'SuperSecret2026',
    encryption: 'WPA',
    hidden: false,
  });

  const [menu, setMenu] = useState<MenuData>({
    menuUrl: 'https://menu.qrflow.app/bistro-lumiere',
    restaurantName: 'Bistro Lumière',
    tableNumber: 'Table 14',
  });

  const [email, setEmail] = useState<EmailData>({
    email: 'support@qrflow.app',
    subject: 'Inquiry from QR Code Campaign',
    body: 'Hi QRFlow team, I would like to schedule a platform demo.',
  });

  // Customization state
  const [customization, setCustomization] = useState<QRCustomization>({
    fgColor: '#0D1426',
    bgColor: '#FFFFFF',
    level: 'M',
    margin: 4,
    includeLogo: true,
    size: 240,
  });

  // Calculate live payload string
  const payload = useMemo(() => {
    switch (selectedType) {
      case 'url':
        return url || 'https://qrflow.app';
      case 'vcard':
        return `BEGIN:VCARD\nVERSION:3.0\nN:${vcard.lastName};${vcard.firstName}\nFN:${vcard.firstName} ${vcard.lastName}\nORG:${vcard.company}\nTITLE:${vcard.title}\nTEL:${vcard.phone}\nEMAIL:${vcard.email}\nEND:VCARD`;
      case 'whatsapp':
        return `https://wa.me/${whatsapp.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
          whatsapp.message
        )}`;
      case 'wifi':
        return `WIFI:S:${wifi.ssid};T:${wifi.encryption};P:${wifi.password};;`;
      case 'menu':
        return menu.menuUrl || 'https://menu.qrflow.app';
      case 'email':
        return `mailto:${email.email}?subject=${encodeURIComponent(
          email.subject
        )}&body=${encodeURIComponent(email.body)}`;
      default:
        return 'https://qrflow.app';
    }
  }, [selectedType, url, vcard, whatsapp, wifi, menu, email]);

  return (
    <section id="generator" className="py-20 relative bg-[#070B16] border-y border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Instant QR Generator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Create High-Resolution QR Codes
          </h2>
          <p className="text-base text-slate-300">
            Generate customized QR codes for website URLs, contact vCards, WhatsApp links, Wi-Fi access, digital restaurant menus, and emails.
          </p>
        </motion.div>

        {/* Generator Main Card */}
        <div className="bg-[#0B1020] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          {/* Tabs */}
          <QRTypeTabs selectedType={selectedType} onSelectType={setSelectedType} />

          {/* Form and Preview Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            <div className="lg:col-span-7">
              <QRForm
                type={selectedType}
                url={url}
                setUrl={setUrl}
                vcard={vcard}
                setVcard={setVcard}
                whatsapp={whatsapp}
                setWhatsapp={setWhatsapp}
                wifi={wifi}
                setWifi={setWifi}
                menu={menu}
                setMenu={setMenu}
                email={email}
                setEmail={setEmail}
                customization={customization}
                setCustomization={setCustomization}
              />
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <QRPreview
                payload={payload}
                customization={customization}
                onSuccessToast={onSuccessToast}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
