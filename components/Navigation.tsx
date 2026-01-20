import React, { useState, useEffect } from 'react';
import Button from './Button';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { items, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-950/80 glass-blur border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToSection('top')}>
          <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold text-lg">
            N
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            nastySFX
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 bg-gray-900/50 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
          <a href="#process" onClick={scrollToSection('process')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-2">Process</a>
          <a href="#about" onClick={scrollToSection('about')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-2">About</a>
          <a href="#faq" onClick={scrollToSection('faq')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-2">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
            <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Open cart"
            >
                <ShoppingBag className="w-5 h-5" />
                {items.length > 0 && (
                    <span className="absolute top-1 right-0 w-4 h-4 bg-indigo-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                        {items.length}
                    </span>
                )}
            </button>
            <Button variant="outline" className="text-xs px-5 py-2.5 !rounded-full hidden sm:inline-flex" onClick={scrollToSection('marketplace')}>
            Shop All
            </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;