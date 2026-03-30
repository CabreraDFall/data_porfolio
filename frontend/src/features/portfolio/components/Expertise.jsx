import React from 'react';
import { useConfig } from '../../../shared/context/ConfigContext';

const Expertise = () => {
  const { config } = useConfig();
  const domains = config.expertise || [];

  return (
    <section className="py-12 md:py-24 px-6 lg:px-12 bg-surface/50">
      <div className="max-w-[1440px] mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-6">
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.4em] text-primary">Core Competencies</h4>
            <h2 className="text-3xl lg:text-5xl font-headline font-bold text-on-surface tracking-tighter leading-none">
              Strategic Technical <span className="text-white/40 italic font-light">Expertise</span>
            </h2>
          </div>
          <p className="text-on-surface-variant font-light max-w-sm text-sm lg:text-base border-l border-white/10 pl-6 h-fit italic">
            "Engineering scalable systems that prioritize data integrity and sub-second latency."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, i) => (
            <div key={i} className="group p-8 glass-panel rounded-3xl border border-white/5 bg-surface-container-lowest/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-500 overflow-hidden relative">
              {/* Background gradient hint */}
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all">
                  <span className="material-symbols-outlined">{domain.icon}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-headline font-bold text-on-surface tracking-tight group-hover:translate-x-1 transition-transform">{domain.title}</h3>
                  <p className="text-sm font-light text-on-surface-variant leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {domain.description}
                  </p>
                </div>
              </div>

              {/* Data pulse decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity">
                 <span className="text-[8px] font-mono text-primary uppercase tracking-widest whitespace-nowrap">STATUS: // VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
