import React, { useState } from 'react';
import { Youtube, Instagram, Mail, X } from 'lucide-react';

const DiscordIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.5151.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.699.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.5382-9.675-3.567-13.6604a.0644.0644 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const LegalModal: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  content: React.ReactNode 
}> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-gray-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] animate-fade-in">
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-gray-900/50 rounded-t-2xl">
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed space-y-6">
          {content}
        </div>

        <div className="p-4 border-t border-white/5 bg-gray-900/50 rounded-b-2xl flex justify-end">
            <button onClick={onClose} className="px-4 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors">
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const [activeLegal, setActiveLegal] = useState<'privacy' | 'terms' | null>(null);

  const privacyContent = (
    <>
      <div>
        <h4 className="text-white font-semibold mb-2">1. Information Collection</h4>
        <p>We collect minimal personal information necessary to process your order, primarily your email address and payment details. We do not sell your data to third parties.</p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">2. Digital Delivery</h4>
        <p>Upon purchase, files are delivered instantly via email. Please ensure your email address is correct at checkout to avoid delivery issues.</p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">3. Security</h4>
        <p>All payments are processed through secure, encrypted gateways (Stripe/PayPal). We do not store your credit card information on our servers.</p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">4. Cookies</h4>
        <p>We use essential cookies to maintain your shopping cart session and improve site performance. By using our site, you agree to this usage.</p>
      </div>
    </>
  );

  const termsContent = (
    <>
      <div>
        <h4 className="text-white font-semibold mb-2">1. License Agreement</h4>
        <p>By purchasing a product, you are granted a non-exclusive, royalty-free license to use the assets in your personal and commercial projects worldwide.</p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">2. Restrictions</h4>
        <p>You may NOT resell, redistribute, or repackage these assets as your own. The license is non-transferable and applies to the purchaser only.</p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">3. Refunds</h4>
        <p>Due to the nature of digital downloads, all sales are final. If you have a technical issue with a file, please contact support and we will resolve it.</p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">4. Usage</h4>
        <p>You are free to use these assets in monetized videos, films, and client work without attribution (though it is appreciated).</p>
      </div>
    </>
  );

  return (
    <>
      <footer className="bg-transparent border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="text-xl font-bold text-white tracking-tight">nastySFX</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Premium assets for the modern gaming editor. <br />
              Elevate your timeline with SFX & VFX.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <a href="https://discord.gg/rcq2PM3m" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#5865F2] transition-colors transform hover:scale-110 active:scale-95" aria-label="Discord">
              <DiscordIcon />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110 active:scale-95" aria-label="Contact">
              <Mail className="w-5 h-5" />
            </a>
            <div className="w-px h-5 bg-gray-800 mx-2 hidden md:block"></div>
            <a href="https://www.youtube.com/@DaDoodsDurogs" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#FF0000] transition-colors transform hover:scale-110 active:scale-95" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/imharoldzafra/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#E1306C] transition-colors transform hover:scale-110 active:scale-95" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@realnastyy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#fe2c55] transition-colors transform hover:scale-110 active:scale-95" aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>

          {/* Legal */}
          <div className="text-gray-600 text-xs text-center md:text-right">
            <p className="mb-2">&copy; {new Date().getFullYear()} nastySFX Assets. All rights reserved.</p>
            <div className="flex gap-6 justify-center md:justify-end">
              <button onClick={() => setActiveLegal('privacy')} className="hover:text-gray-400 transition-colors cursor-pointer">
                Privacy
              </button>
              <button onClick={() => setActiveLegal('terms')} className="hover:text-gray-400 transition-colors cursor-pointer">
                Terms
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <LegalModal 
        isOpen={!!activeLegal} 
        onClose={() => setActiveLegal(null)}
        title={activeLegal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
        content={activeLegal === 'privacy' ? privacyContent : termsContent}
      />
    </>
  );
};

export default Footer;