import React from 'react';
import { useConfig } from '../../../shared/context/ConfigContext';

const AboutMe = () => {
  const { config } = useConfig();

  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-surface overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Profile Picture */}
        <div className="relative group mx-auto lg:mx-0 max-w-md lg:max-w-full">
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] aspect-square lg:aspect-auto lg:h-[600px] w-full">
            <img 
              src={config.about_image_url} 
              alt={config.name} 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="px-6 py-2 glass-panel rounded-full border border-primary/30 text-primary font-mono text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(88,245,209,0.2)]">
                {config.name}
              </div>
            </div>
          </div>
          
          {/* Accent decoration */}
          <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Right Column: Content */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-[0.4em] text-primary">Sobre Mí</h4>
            <h2 className="text-4xl lg:text-5xl font-headline font-bold text-on-surface leading-[0.9] tracking-tighter">
                {config.about_subtitle.split(' ').slice(0, -1).join(' ')} <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">{config.about_subtitle.split(' ').slice(-1)}</span>
            </h2>
          </div>

          <div className="space-y-6 text-xl font-light text-on-surface-variant leading-relaxed max-w-2xl whitespace-pre-wrap">
              {config.about_bio}
          </div>

          {/* Quote Block */}
          <div className="relative pl-12 py-4 border-l-2 border-primary/40 group">
             <div className="absolute -left-[1px] top-0 h-1/3 w-[2px] bg-primary group-hover:h-full transition-all duration-700"></div>
             <blockquote className="text-sm font-mono text-on-surface-variant/70 italic leading-relaxed max-w-md">
                {config.about_quote}
                <footer className="mt-2 text-primary not-italic font-bold">— {config.about_quote_author}</footer>
             </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
