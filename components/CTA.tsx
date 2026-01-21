import React from 'react';
import Button from './Button';
import { useCart } from '../context/CartContext';
import { Project } from '../types';

const CTA: React.FC = () => {
  const { addToCart } = useCart();

  const bundleProduct: Project = {
    id: 'bundle-all-access',
    title: 'All Access Bundle',
    description: 'The complete creative arsenal. Includes Velocity One, Kinetic Type, Glitch & Distortion, and Atmosphere packs.',
    price: 3600,
    tags: ['Bundle', 'All Access', 'Premium'],
    imageUrl: 'https://picsum.photos/id/48/800/600',
    features: ['All 4 Packs', 'Lifetime Updates', 'Priority Support']
  };

  const handleAddToCart = () => {
    addToCart(bundleProduct);
  };

  return (
    <section className="py-20 md:py-40 px-6 text-center relative overflow-hidden">
      {/* Background ambient glow matching the shopping vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight">
          Ready to flow?
        </h2>
        <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          Join hundreds of editors who have upgraded their visual language. <br className="hidden md:block" />
          Instant download. Forever yours.
        </p>
        
        <div className="flex flex-col items-center gap-3 md:gap-4">
            <Button 
              variant="primary" 
              className="px-10 py-4 md:px-12 md:py-5 text-base md:text-lg rounded-full shadow-[0_0_50px_-12px_rgba(79,70,229,0.5)] hover:shadow-[0_0_50px_-6px_rgba(79,70,229,0.7)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={handleAddToCart}
            >
            Get All Access Bundle - ₱3,600
            </Button>
            <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-[0.2em] mt-2">
            Includes all 4 packs • Save 25%
            </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;