import React from 'react';
import { Twitter, Youtube, Instagram, Mail } from 'lucide-react';

const DiscordIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.5151.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.699.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.5382-9.675-3.567-13.6604a.0644.0644 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
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
           <a href="#" className="text-gray-500 hover:text-[#5865F2] transition-colors transform hover:scale-110" aria-label="Discord">
             <DiscordIcon />
           </a>
           <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110" aria-label="Contact">
             <Mail className="w-5 h-5" />
           </a>
           <div className="w-px h-5 bg-gray-800 mx-2 hidden md:block"></div>
           <a href="#" className="text-gray-500 hover:text-[#FF0000] transition-colors transform hover:scale-110" aria-label="YouTube">
             <Youtube className="w-5 h-5" />
           </a>
           <a href="#" className="text-gray-500 hover:text-[#E1306C] transition-colors transform hover:scale-110" aria-label="Instagram">
             <Instagram className="w-5 h-5" />
           </a>
           <a href="#" className="text-gray-500 hover:text-[#1DA1F2] transition-colors transform hover:scale-110" aria-label="Twitter">
             <Twitter className="w-5 h-5" />
           </a>
        </div>

        {/* Legal */}
        <div className="text-gray-600 text-xs text-center md:text-right">
          <p className="mb-2">&copy; {new Date().getFullYear()} nastySFX Assets. All rights reserved.</p>
          <div className="flex gap-6 justify-center md:justify-end">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;