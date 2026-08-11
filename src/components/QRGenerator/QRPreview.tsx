import React, { useRef, useState } from 'react';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import {
  Download,
  Copy,
  Check,
  Smartphone,
  Sparkles,
  ExternalLink,
  X,
  QrCode as QrIcon,
} from 'lucide-react';
import { QRCustomization } from '../../types';

interface QRPreviewProps {
  payload: string;
  customization: QRCustomization;
  onSuccessToast: (msg: string) => void;
}

export const QRPreview: React.FC<QRPreviewProps> = ({
  payload,
  customization,
  onSuccessToast,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [copied, setCopied] = useState(false);
  const [scanModalOpen, setScanModalOpen] = useState(false);

  // Trigger confetti effect
  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#1683FF', '#6366F1', '#38BDF8'],
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(payload);
    setCopied(true);
    onSuccessToast('QR Payload copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPNG = () => {
    try {
      const canvas = document.getElementById('qr-canvas-element') as HTMLCanvasElement;
      if (!canvas) return;
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `QRMix-code-${Date.now()}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      triggerConfetti();
      onSuccessToast('Downloaded High-Res PNG QR Code!');
    } catch (e) {
      onSuccessToast('Downloaded QR Code!');
    }
  };

  const handleDownloadSVG = () => {
    try {
      const svgElement = document.getElementById('qr-svg-element');
      if (!svgElement) return;
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = `QRMix-code-${Date.now()}.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      triggerConfetti();
      onSuccessToast('Downloaded High-Res Vector SVG QR Code!');
    } catch (e) {
      onSuccessToast('Downloaded Vector SVG!');
    }
  };

  const imageSettings = customization.includeLogo
    ? {
        src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%231683FF"><path d="M3 3h8v8H3zm2 2v4h4V5zm8-2h8v8h-8zm2 2v4h4V5zM3 13h8v8H3zm2 2v4h4v-4zm13-2h3v3h-3zm-3 3h3v3h-3zm3 3h3v3h-3zm-3 0h3v3h-3z"/></svg>',
        x: undefined,
        y: undefined,
        height: 28,
        width: 28,
        excavate: true,
      }
    : undefined;

  return (
    <div className="bg-[#0D1426] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col justify-between items-center text-center relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="w-full mb-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Real-Time QR Preview
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-400">
            Vector Ready
          </span>
        </div>

        {/* QR Code Canvas/SVG Wrapper */}
        <div
          className="p-6 rounded-2xl shadow-inner flex items-center justify-center transition-all duration-300 border border-white/10 mx-auto max-w-[280px]"
          style={{ backgroundColor: customization.bgColor }}
        >
          {/* Hidden Canvas for PNG export */}
          <div className="hidden">
            <QRCodeCanvas
              id="qr-canvas-element"
              value={payload || 'https://QRMix.app'}
              size={Math.max(customization.size * 2, 512)}
              fgColor={customization.fgColor}
              bgColor={customization.bgColor}
              level={customization.level}
              marginSize={customization.margin}
              imageSettings={imageSettings}
            />
          </div>

          {/* Visible SVG QR for crisp display */}
          <QRCodeSVG
            id="qr-svg-element"
            value={payload || 'https://QRMix.app'}
            size={Math.min(customization.size, 260)}
            fgColor={customization.fgColor}
            bgColor={customization.bgColor}
            level={customization.level}
            marginSize={customization.margin}
            imageSettings={imageSettings}
            style={{ width: '100%', height: 'auto', maxWidth: `${Math.min(customization.size, 260)}px` }}
          />
        </div>
      </div>

      {/* QR Payload String & Copy */}
      <div className="w-full bg-[#070B16] border border-white/10 rounded-xl p-3 mb-5 text-left">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            QR PAYLOAD
          </span>
          <button
            onClick={handleCopy}
            className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <p className="text-xs text-slate-200 font-mono truncate select-all">{payload}</p>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleDownloadPNG}
            className="py-2.5 px-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PNG</span>
          </button>

          <button
            onClick={handleDownloadSVG}
            className="py-2.5 px-3 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>Download SVG</span>
          </button>
        </div>

        <button
          onClick={() => setScanModalOpen(true)}
          className="w-full py-2 px-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-300 font-medium text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Simulate Mobile Scan</span>
        </button>
      </div>

      {/* Interactive Scan Simulator Modal */}
      <AnimatePresence>
        {scanModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setScanModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-[#0B1020] border border-white/10 rounded-3xl p-6 shadow-2xl z-10 text-left overflow-hidden"
            >
              <button
                onClick={() => setScanModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-4 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                <Smartphone className="w-4 h-4" />
                Mobile Scanner Simulator
              </div>

              {/* Simulated Mobile Phone Frame */}
              <div className="border border-white/20 rounded-2xl p-4 bg-[#050914] space-y-3">
                <div className="w-12 h-1 bg-white/20 rounded-full mx-auto" />

                <div className="text-center py-3">
                  <div className="inline-flex p-3 rounded-2xl bg-blue-500/20 border border-blue-500/30 text-blue-400 mb-2">
                    <QrIcon className="w-8 h-8" />
                  </div>
                  <h4 className="text-sm font-bold text-white">QR Code Recognized</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Scanned via Camera Lens</p>
                </div>

                <div className="bg-[#0D1426] p-3 rounded-xl border border-white/10 text-xs font-mono text-slate-200 break-all">
                  {payload}
                </div>

                <a
                  href={payload.startsWith('http') ? payload : '#'}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    onSuccessToast(`Opening payload destination!`);
                    setScanModalOpen(false);
                  }}
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Open Destination Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
