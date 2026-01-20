import React from 'react';
import { MonitorPlay } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900/30 border-y border-slate-800/50 relative overflow-hidden scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <div className="relative group order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
              <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
              <img 
                src="https://picsum.photos/id/64/800/800" 
                alt="Creator Workspace" 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" 
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-md border border-slate-700 p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex gap-6">
                    <div>
                        <p className="text-2xl font-bold text-white">4+</p>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">Years</p>
                    </div>
                    <div className="w-px h-full bg-slate-700"></div>
                    <div>
                        <p className="text-2xl font-bold text-white">500+</p>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">Sales</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-xs font-medium uppercase tracking-wider mb-8">
              <MonitorPlay className="w-3.5 h-3.5" />
              <span>The Editor's Desk</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built to Inspire, <br />
              <span className="text-slate-600">Not Replace.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
              <p>
                I'm a solo editor obsessed with the nuances of Valorant motion graphics and VFX. 
                After years of creating edits, I realized the biggest barrier to entry isn't creativity—it's understanding the <em>how</em>.
              </p>
              <p>
                nastySFX was born from a desire to open-source my workflow. These project files are clean, commented, and designed to be torn apart. 
                My goal is for you to learn one new technique from every file you open.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-slate-300 text-sm border border-slate-700">Valorant</span>
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-slate-300 text-sm border border-slate-700">After Effects</span>
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-slate-300 text-sm border border-slate-700">VFX Flow</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;