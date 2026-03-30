import React, { useState, useEffect } from 'react';
import { useConfig } from '../../../shared/context/ConfigContext';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const { config } = useConfig();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect to handle body scroll lock when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Expertise", href: "/#expertise" },
        { label: "Architectures", href: "/#projects" },
        { label: "About", href: "/#about" }
    ];

    const isHomePage = location.pathname === '/';

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b px-6 lg:px-20
            ${isScrolled 
                ? 'bg-background/80 backdrop-blur-xl border-white/5 py-3 md:py-4' 
                : 'bg-transparent border-transparent py-5 md:py-8'}`}>
            <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                {/* Brand / Title (Left) */}
                <Link to="/" className="flex flex-col group">
                    <span className="text-lg font-headline font-bold text-on-surface tracking-tighter group-hover:text-primary transition-colors">
                        {config.name}
                    </span>
                    <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] opacity-60 group-hover:opacity-100 transition-opacity">
                        Data Engineer
                    </span>
                </Link>

                {/* Navigation (Right) */}
                <div className="flex items-center gap-4 md:gap-8">
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                {isHomePage ? (
                                    <a 
                                        href={item.href}
                                        className="px-4 py-2 rounded-lg text-[10px] font-mono uppercase tracking-widest text-on-surface-variant hover:text-white hover:bg-white/5 transition-all"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link 
                                        to={item.href}
                                        className="px-4 py-2 rounded-lg text-[10px] font-mono uppercase tracking-widest text-on-surface-variant hover:text-white hover:bg-white/5 transition-all"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Trigger */}
                    <button 
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden w-10 h-10 rounded-xl border border-white/5 bg-white/2 flex items-center justify-center text-on-surface/60 hover:text-primary hover:border-primary/20 transition-all active:scale-90"
                        aria-label="Open menu"
                    >
                        <span className="material-symbols-outlined text-xl">menu</span>
                    </button>

                    {/* Admin/CMS Entry */}
                    <Link 
                        to="/admin" 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-white/5 bg-white/2 flex items-center justify-center text-white/20 hover:text-primary hover:border-primary/40 transition-all group"
                    >
                        <span className="material-symbols-outlined text-sm md:text-base group-hover:scale-110 transition-transform">terminal</span>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <MobileMenu 
                isOpen={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)}
                navItems={navItems}
                isHomePage={isHomePage}
            />
        </nav>
    );
};

export default Navbar;
