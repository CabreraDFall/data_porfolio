import React from 'react';
import HeroGraphic from './HeroGraphic';
import { useConfig } from '../../../shared/context/ConfigContext';

const Hero = () => {
  const { config } = useConfig();

  return (
    <section id="hero" className="relative min-h-[920px] flex items-center overflow-hidden px-6 lg:px-20">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-container-lowest to-surface"></div>
        {/* Abstract Data Viz (CSS) */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[100px]"></div>
        {/* Data Nodes Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#58f5d1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto asymmetric-grid items-center gap-16">
        {/* Hero Content */}
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-primary/20 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">System Status: // {config.system_status}</span>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xl lg:text-2xl font-mono text-white/60 tracking-[0.2em] uppercase">{config.name}</span>
              <h1 className="text-6xl lg:text-9xl font-headline font-bold tracking-tighter text-on-surface leading-[0.85] drop-shadow-[0_0_50px_rgba(88,245,209,0.1)]">
                {config.role.split(' ')[0]} <span className="text-primary">{config.role.split(' ').slice(1).join(' ')}</span>
              </h1>
            </div>
            <p className="text-lg lg:text-2xl font-light text-on-surface-variant max-w-2xl leading-relaxed border-l-2 border-primary/20 pl-8">
              {config.hero_tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {config.skills.map((skill) => (
              <span key={skill} className="px-5 py-2 rounded-lg bg-surface-container-low border border-outline-variant/10 text-on-surface-variant text-[11px] font-mono uppercase tracking-widest hover:border-primary/40 hover:text-primary transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-8 pt-8">
            <a 
              href={config.cv_url} 
              target="_blank" 
              rel="noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_50px_rgba(88,245,209,0.3)] transition-all active:scale-95 flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="material-symbols-outlined group-hover:rotate-12 transition-transform text-xl">download</span>
              Descargar CV
            </a>
            <a 
              href="#projects" 
              className="px-10 py-5 border border-outline-variant/20 text-on-surface font-headline font-bold uppercase tracking-widest rounded-xl hover:bg-surface-container-high hover:border-primary/20 transition-all flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-sm text-primary">analytics</span>
              Explorar Arquitecturas
            </a>
          </div>
        </div>

        {/* Hero Graphic */}
        <HeroGraphic />
      </div>
    </section>
  );
};

export default Hero;
