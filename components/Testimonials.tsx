import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full filter blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Feedback</h2>
          <p className="text-slate-400">Trusted by editors scaling their craft.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-900/50 backdrop-blur border border-slate-800 p-8 rounded-2xl relative hover:border-slate-700 transition-colors">
              <Quote className="absolute top-8 right-8 w-6 h-6 text-slate-700 opacity-50" />
              <p className="text-slate-300 leading-relaxed mb-6 text-sm md:text-base italic">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-semibold text-white">{t.name}</h4>
                <span className="text-xs text-indigo-400 uppercase tracking-wider font-medium">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;