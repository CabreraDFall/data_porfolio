import React from 'react';
import { useConfig } from '../../../shared/context/ConfigContext';

const Footer = () => {
  const { config } = useConfig();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Architectures", href: "/#projects" },
    { label: "About", href: "/#about" }
  ];

  const socialLinks = [
    { label: "GitHub", href: config.github_url, icon: "terminal" },
    { label: "LinkedIn", href: config.linkedin_url, icon: "share" },
    { label: "Email", href: `mailto:hello@abraham.cab`, icon: "mail" },
    { label: "Resumé", href: config.cv_url, icon: "download" },
  ];

  return (
    <footer className="w-full bg-surface border-t border-white/5 pt-20 pb-10 px-6 lg:px-20 overflow-hidden relative mt-auto">
      {/* Visual Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Main Grid: Ahora 2 columnas principales para mejor balance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Brand Column */}
          <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex flex-col">
              <span className="text-xl font-headline font-bold text-on-surface tracking-tighter">
                {config.name}
              </span>
              <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] opacity-60">
                Data Engineering // Architecture
              </span>
            </div>
            <p className="text-sm font-light text-on-surface-variant max-w-sm leading-relaxed">
              Engineering high-throughput, fault-tolerant ecosystems that transform raw complexity into strategic intelligence.
            </p>
          </div>

          {/* Contact/Connect Section - Ahora totalmente Horizontal (4 en línea) */}
          <div className="space-y-6 text-center lg:text-right flex flex-col items-center lg:items-end justify-center">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40">Connect & Source</h4>
            <div className="flex flex-row flex-wrap justify-center lg:justify-end gap-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/2 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  title={link.label}
                >
                  <span className="material-symbols-outlined text-base text-primary group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-on-surface-variant group-hover:text-white transition-colors hidden sm:inline">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM STRIPE (System Metadata Style) */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-mono uppercase tracking-[0.2em] text-on-surface-variant/60">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(88,245,209,0.5)] animate-pulse"></span>
              SYSTEM_UPTIME: 99.98%
            </div>
            <div>ENV: PRODUCTION_STABLE</div>
            <div>BUILD: V2.0.4 - MAR'26</div>
          </div>

          <div className="text-[10px] font-mono text-on-surface-variant/70 uppercase tracking-widest text-center md:text-right">
            © 2026 Crafted by {config.name}. <br className="md:hidden" />
            <span className="opacity-50">Architected for Scalability.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
