import React from 'react';
import Button from './Button';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 md:pt-20">
      {/* Refined Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
         <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[500px] bg-indigo-900/20 rounded-[100%] blur-[80px] md:blur-[120px] opacity-40 mix-blend-screen" />
         <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-900/10 rounded-full blur-[60px] md:blur-[100px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6 md:mb-10 flex justify-center">
          <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-medium text-indigo-300 tracking-[0.2em] uppercase">
              For Professional Editors
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 md:mb-8 leading-[1.1] md:leading-[0.95]">
          Deconstruct the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">
            Perfect Edit
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-base md:text-lg text-gray-400 mb-8 md:mb-12 leading-relaxed font-light tracking-wide">
          Premium After Effects & VFX project files. <br className="hidden md:block"/>
          Master the curves. Build your motion language.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full sm:w-auto">
          <Button variant="white" icon onClick={() => document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto">
            Explore Projects
          </Button>
          <button className="group flex items-center justify-center gap-3 px-6 py-3 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-colors w-full sm:w-auto">
            <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white/50 transition-colors">
                <Play className="w-3 h-3 fill-current" />
            </div>
            <span>Watch Showreel</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;