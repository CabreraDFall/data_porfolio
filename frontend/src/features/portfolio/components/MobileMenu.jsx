import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose, navItems, isHomePage }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[500] md:hidden overflow-hidden">
      {/* Backdrop with extreme blur and dark tint */}
      <div 
        className="absolute inset-0 bg-surface/40 backdrop-blur-3xl"
        onClick={onClose}
      />
      
      {/* Mobile Menu Content Container */}
      <div className="relative h-full w-full flex flex-col justify-center px-8 sm:px-12 py-16 animate-in slide-in-from-right duration-700 ease-out">
        
        {/* Close Button at Top Right */}
        <button 
          onClick={onClose}
          className="absolute top-10 right-10 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 text-primary hover:bg-primary/10 hover:border-primary/20 transition-all active:scale-90"
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined font-light">close</span>
        </button>

        {/* Vertical Navigation Links */}
        <nav className="flex flex-col space-y-8 mt-12">
          {navItems.map((item, index) => (
            <div key={item.label} className="overflow-hidden group">
              {isHomePage ? (
                <a
                  href={item.href}
                  onClick={onClose}
                  className="inline-flex items-baseline gap-6 text-4xl sm:text-5xl font-headline font-bold text-on-surface hover:text-primary transition-all duration-300 transform group-hover:translate-x-3 animate-in slide-in-from-bottom-full duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-[10px] font-mono text-primary/40 uppercase tracking-widest mt-2">
                    0{index + 1}
                  </span>
                  <span className="tracking-tighter">{item.label}</span>
                </a>
              ) : (
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="inline-flex items-baseline gap-6 text-4xl sm:text-5xl font-headline font-bold text-on-surface hover:text-primary transition-all duration-300 transform group-hover:translate-x-3 animate-in slide-in-from-bottom-full duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-[10px] font-mono text-primary/40 uppercase tracking-widest mt-2">
                    0{index + 1}
                  </span>
                  <span className="tracking-tighter">{item.label}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom Metadata / Links Section */}
        <div className="mt-auto pt-12 border-t border-white/5 flex flex-col space-y-6 animate-in fade-in duration-1000 delay-500">
           <div>
             <p className="text-[8px] font-mono text-primary/60 uppercase tracking-[0.5em] mb-4">Core Systems</p>
             <div className="flex flex-wrap gap-4">
                <span className="text-[10px] font-mono text-on-surface-variant/60 uppercase tracking-wider px-3 py-1 rounded bg-white/2 border border-white/5">Architecture</span>
                <span className="text-[10px] font-mono text-on-surface-variant/60 uppercase tracking-wider px-3 py-1 rounded bg-white/2 border border-white/5">Analytics</span>
             </div>
           </div>
           
           <div className="flex items-center justify-between">
              <div className="flex gap-4">
                 <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-white/40 hover:text-primary hover:border-primary/20 transition-all cursor-pointer">
                   <span className="material-symbols-outlined text-sm">terminal</span>
                 </span>
                 <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-white/40 hover:text-primary hover:border-primary/20 transition-all cursor-pointer">
                   <span className="material-symbols-outlined text-sm">share</span>
                 </span>
              </div>
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">
                v2.0.4.build_2026
              </span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
