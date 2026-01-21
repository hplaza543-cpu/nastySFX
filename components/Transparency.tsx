import React from 'react';
import { Eye, ShieldCheck, Film } from 'lucide-react';

const Transparency: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Abstract visual representation of a file structure */}
          <div className="relative h-64 md:h-96 w-full glass-panel rounded-2xl border border-slate-700 p-8 shadow-sm flex flex-col justify-center items-center overflow-hidden bg-slate-800/30">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
             
             {/* Fake UI elements */}
             <div className="w-48 md:w-64 h-2 bg-slate-700 rounded-full mb-4 opacity-50" />
             <div className="w-32 md:w-48 h-2 bg-slate-700 rounded-full mb-12 opacity-30" />
             
             <div className="relative">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-4 mx-auto animate-bounce duration-[3000ms] border border-slate-700 shadow-xl">
                   <Film className="w-6 h-6 md:w-8 md:h-8 text-indigo-400" />
                </div>
                <div className="absolute -inset-4 bg-indigo-500/20 rounded-full filter blur-xl animate-pulse" />
             </div>
             
             <div className="mt-4 md:mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg text-slate-400 text-xs font-mono border border-slate-700">
                  <span>render_final.mp4</span>
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                </div>
             </div>
          </div>

          <div>
             <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
               What you see is exactly what you get.
             </h2>
             <p className="text-slate-400 mb-6 md:mb-8 text-base md:text-lg">
               The digital product space is full of misleading thumbnails. We do things differently.
             </p>
             
             <div className="space-y-6 md:space-y-8">
               <div className="flex gap-4">
                 <div className="flex-shrink-0 mt-1">
                   <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400">
                     <Eye className="w-4 h-4" />
                   </div>
                 </div>
                 <div>
                   <h3 className="text-base md:text-lg font-semibold text-white">100% Real Previews</h3>
                   <p className="text-slate-400 text-sm mt-1">Every product page features a full video render of the included project file. No cinematic trailers hiding the actual content.</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="flex-shrink-0 mt-1">
                   <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400">
                     <ShieldCheck className="w-4 h-4" />
                   </div>
                 </div>
                 <div>
                   <h3 className="text-base md:text-lg font-semibold text-white">Verified Techniques</h3>
                   <p className="text-slate-400 text-sm mt-1">The effects shown are achieved natively within After Effects. If a plugin is required, it is clearly labeled in bold before purchase.</p>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Transparency;