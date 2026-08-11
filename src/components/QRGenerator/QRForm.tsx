import React from 'react';
import {
  QRType,
  VCardData,
  WhatsAppData,
  WifiData,
  MenuData,
  EmailData,
  QRCustomization,
} from '../../types';
import { Palette, Shield, Sliders, Image as ImageIcon } from 'lucide-react';

interface QRFormProps {
  type: QRType;
  url: string;
  setUrl: (v: string) => void;
  vcard: VCardData;
  setVcard: (v: VCardData) => void;
  whatsapp: WhatsAppData;
  setWhatsapp: (v: WhatsAppData) => void;
  wifi: WifiData;
  setWifi: (v: WifiData) => void;
  menu: MenuData;
  setMenu: (v: MenuData) => void;
  email: EmailData;
  setEmail: (v: EmailData) => void;
  customization: QRCustomization;
  setCustomization: React.Dispatch<React.SetStateAction<QRCustomization>>;
}

export const QRForm: React.FC<QRFormProps> = ({
  type,
  url,
  setUrl,
  vcard,
  setVcard,
  whatsapp,
  setWhatsapp,
  wifi,
  setWifi,
  menu,
  setMenu,
  email,
  setEmail,
  customization,
  setCustomization,
}) => {
  const fgColorPresets = ['#000000', '#0D1426', '#1683FF', '#6366F1', '#10B981', '#E11D48'];
  const bgColorPresets = ['#FFFFFF', '#F8FAFC', '#0D1426', '#050914', '#FFFBEB'];

  return (
    <div className="space-y-6">
      {/* Dynamic Input Fields based on selected type */}
      <div className="bg-[#0D1426] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          Content Details
        </h4>

        {type === 'url' && (
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Target Website URL
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://qrflow.app"
              className="w-full bg-[#070B16] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        )}

        {type === 'vcard' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">First Name</label>
              <input
                type="text"
                value={vcard.firstName}
                onChange={(e) => setVcard({ ...vcard, firstName: e.target.value })}
                placeholder="Sarah"
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Last Name</label>
              <input
                type="text"
                value={vcard.lastName}
                onChange={(e) => setVcard({ ...vcard, lastName: e.target.value })}
                placeholder="Jenkins"
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
              <input
                type="tel"
                value={vcard.phone}
                onChange={(e) => setVcard({ ...vcard, phone: e.target.value })}
                placeholder="+1 (555) 234-5678"
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
              <input
                type="email"
                value={vcard.email}
                onChange={(e) => setVcard({ ...vcard, email: e.target.value })}
                placeholder="sarah@company.com"
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Company</label>
              <input
                type="text"
                value={vcard.company}
                onChange={(e) => setVcard({ ...vcard, company: e.target.value })}
                placeholder="Apex Digital Inc"
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Job Title</label>
              <input
                type="text"
                value={vcard.title}
                onChange={(e) => setVcard({ ...vcard, title: e.target.value })}
                placeholder="VP Marketing"
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        )}

        {type === 'whatsapp' && (
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                WhatsApp Phone Number (with country code)
              </label>
              <input
                type="tel"
                value={whatsapp.phone}
                onChange={(e) => setWhatsapp({ ...whatsapp, phone: e.target.value })}
                placeholder="15550192834"
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Preset Welcome Message
              </label>
              <textarea
                rows={2}
                value={whatsapp.message}
                onChange={(e) => setWhatsapp({ ...whatsapp, message: e.target.value })}
                placeholder="Hello! I would like to inquire about your services."
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        )}

        {type === 'wifi' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Network SSID
              </label>
              <input
                type="text"
                value={wifi.ssid}
                onChange={(e) => setWifi({ ...wifi, ssid: e.target.value })}
                placeholder="Guest_WiFi_5G"
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Password
              </label>
              <input
                type="password"
                value={wifi.password}
                onChange={(e) => setWifi({ ...wifi, password: e.target.value })}
                placeholder="SuperSecret2026"
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Security Encryption
              </label>
              <select
                value={wifi.encryption}
                onChange={(e) =>
                  setWifi({ ...wifi, encryption: e.target.value as 'WPA' | 'WEP' | 'nopass' })
                }
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="WPA">WPA / WPA2 / WPA3</option>
                <option value="WEP">WEP</option>
                <option value="nopass">Unencrypted / Open</option>
              </select>
            </div>
          </div>
        )}

        {type === 'menu' && (
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Restaurant Digital Menu URL
              </label>
              <input
                type="url"
                value={menu.menuUrl}
                onChange={(e) => setMenu({ ...menu, menuUrl: e.target.value })}
                placeholder="https://menu.qrflow.app/bistro-lumiere"
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  value={menu.restaurantName}
                  onChange={(e) => setMenu({ ...menu, restaurantName: e.target.value })}
                  placeholder="Bistro Lumière"
                  className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Table Number (Optional)
                </label>
                <input
                  type="text"
                  value={menu.tableNumber}
                  onChange={(e) => setMenu({ ...menu, tableNumber: e.target.value })}
                  placeholder="Table #14"
                  className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {type === 'email' && (
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Target Email Address
              </label>
              <input
                type="email"
                value={email.email}
                onChange={(e) => setEmail({ ...email, email: e.target.value })}
                placeholder="support@company.com"
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Email Subject Line
              </label>
              <input
                type="text"
                value={email.subject}
                onChange={(e) => setEmail({ ...email, subject: e.target.value })}
                placeholder="Inquiry from QR Code"
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Preset Message Body
              </label>
              <textarea
                rows={2}
                value={email.body}
                onChange={(e) => setEmail({ ...email, body: e.target.value })}
                placeholder="Hi team, I would like to schedule a demo."
                className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* QR Customization Options */}
      <div className="bg-[#0D1426] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
        <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
          <Palette className="w-3.5 h-3.5" />
          QR Design Customization
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Foreground Color */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Foreground Color
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={customization.fgColor}
                onChange={(e) => setCustomization({ ...customization, fgColor: e.target.value })}
                className="w-9 h-9 rounded-lg bg-transparent border border-white/10 cursor-pointer"
              />
              <div className="flex gap-1">
                {fgColorPresets.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCustomization({ ...customization, fgColor: c })}
                    className={`w-6 h-6 rounded-full border ${
                      customization.fgColor === c ? 'border-white scale-110' : 'border-white/20'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Background Color */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Background Color
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={customization.bgColor}
                onChange={(e) => setCustomization({ ...customization, bgColor: e.target.value })}
                className="w-9 h-9 rounded-lg bg-transparent border border-white/10 cursor-pointer"
              />
              <div className="flex gap-1">
                {bgColorPresets.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCustomization({ ...customization, bgColor: c })}
                    className={`w-6 h-6 rounded-full border ${
                      customization.bgColor === c ? 'border-white scale-110' : 'border-white/20'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {/* Error Correction */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
              <Shield className="w-3 h-3 text-slate-400" />
              Error Correction
            </label>
            <select
              value={customization.level}
              onChange={(e) =>
                setCustomization({
                  ...customization,
                  level: e.target.value as 'L' | 'M' | 'Q' | 'H',
                })
              }
              className="w-full bg-[#070B16] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500"
            >
              <option value="L">Low (7%)</option>
              <option value="M">Medium (15%)</option>
              <option value="Q">Quartile (25%)</option>
              <option value="H">High (30%)</option>
            </select>
          </div>

          {/* Margin / Quiet Zone */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Sliders className="w-3 h-3 text-slate-400" /> Quiet Zone
              </span>
              <span className="text-blue-400">{customization.margin}</span>
            </label>
            <input
              type="range"
              min={1}
              max={6}
              value={customization.margin}
              onChange={(e) =>
                setCustomization({ ...customization, margin: Number(e.target.value) })
              }
              className="w-full accent-blue-500"
            />
          </div>

          {/* QR Size */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Sliders className="w-3 h-3 text-slate-400" /> QR Size
              </span>
              <span className="text-blue-400">{customization.size}px</span>
            </label>
            <input
              type="range"
              min={128}
              max={512}
              step={16}
              value={customization.size}
              onChange={(e) =>
                setCustomization({ ...customization, size: Number(e.target.value) })
              }
              className="w-full accent-blue-500"
            />
          </div>

          {/* Logo Toggle */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
              <ImageIcon className="w-3 h-3 text-slate-400" /> Center Logo
            </label>
            <button
              type="button"
              onClick={() =>
                setCustomization({ ...customization, includeLogo: !customization.includeLogo })
              }
              className={`w-full py-1.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                customization.includeLogo
                  ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                  : 'bg-[#070B16] border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {customization.includeLogo ? '✓ QRFlow Badge' : 'No Logo'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
