import React from 'react';
import { Plus } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "Do these files work with After Effects 2020?", a: "Yes, all project files are downward compatible with CC 2020 and newer versions." },
    { q: "Do I need third-party plugins?", a: "Most packs are 100% native. Any project requiring plugins (like Sapphire or RSMB) is clearly marked on the product page." },
    { q: "Can I use these assets for commercial work?", a: "Absolutely. Once purchased, you own a royalty-free license for both personal and commercial projects. No attribution required." },
    { q: "How do I access the files after purchase?", a: "You'll receive an instant download link via email immediately after checkout. The link never expires." }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-gray-950 border-t border-white/5 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">Everything you need to know before you start editing.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="group bg-gray-900/30 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all hover:bg-gray-900/50 cursor-default">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-lg font-medium text-white mb-2">{faq.q}</h3>
                <Plus className="w-5 h-5 text-gray-600 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-gray-400 font-light leading-relaxed text-sm mt-2 pr-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;