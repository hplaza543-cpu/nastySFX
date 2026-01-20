import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Marketplace from './components/Marketplace';
import Transparency from './components/Transparency';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col w-full relative" id="top">
        <Navigation />
        <CartDrawer />
        
        <main className="flex-grow w-full">
          <Hero />
          <Features />
          <About />
          <Marketplace />
          <Transparency />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;