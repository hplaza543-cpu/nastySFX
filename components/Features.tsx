import React from 'react';
import { VALUE_PROPS } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="process" className="py-32 relative bg-gray-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          <div className="md:col-span-3 mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                Engineered for Impact
            </h2>
            <p className="text-gray-500 text-lg font-light max-w-xl">
                Stop wrestling with the software. Start creating with files that teach you how.
            </p>
          </div>

          {VALUE_PROPS.map((prop) => (
            <div key={prop.id} className="group flex flex-col items-start border-t border-white/10 pt-8 transition-all hover:border-indigo-500/50">
              <div className="mb-6 p-3 rounded-xl bg-gray-900/50 border border-white/5 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 text-gray-400 transition-colors">
                 <prop.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-medium text-white mb-3">
                  {prop.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed text-sm font-light">
                  {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;