import React, { useState, useEffect } from 'react';
import Button from './Button';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || isMobileMenuOpen ? 'bg-gray-950/80 glass-blur border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer relative z-50" onClick={scrollToSection('top')}>
            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold text-lg">
              N
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              nastySFX
            </span>
          </div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-8 bg-black/20 backdrop-blur-md px-8 py-3 rounded-full border border-white/5">
            {['Process', 'About', 'FAQ'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 relative z-50">
            {/* Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {items.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-indigo-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                  {items.length}
                </span>
              )}
            </button>
            
            <div className="hidden md:block">
              <Button variant="white" className="py-2 px-5 text-xs" onClick={scrollToSection('marketplace')}>
                Shop All
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-gray-950/95 backdrop-blur-xl z-40 transition-all duration-300 md:hidden flex flex-col items-center justify-center ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center gap-8 text-center p-6 w-full max-w-sm">
           {['Process', 'About', 'FAQ'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={scrollToSection(item.toLowerCase())}
                className={`text-3xl font-bold text-white hover:text-indigo-400 transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
            <div className={`mt-8 w-full transition-all duration-500 delay-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
               <Button variant="white" className="w-full text-lg px-8 py-4 justify-center" onClick={scrollToSection('marketplace')}>
                Shop All Products
              </Button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;