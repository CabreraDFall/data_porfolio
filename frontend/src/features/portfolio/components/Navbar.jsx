import React, { useState, useEffect } from 'react';
import { useConfig } from '../../../shared/context/ConfigContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { config } = useConfig();
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                ? 'bg-background/80 backdrop-blur-xl border-white/5 py-4' 
                : 'bg-transparent border-transparent py-8'}`}>
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
                <div className="flex items-center gap-2 md:gap-8">
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

                    {/* Admin/CMS Entry (Optional visual element) */}
                    <Link 
                        to="/admin" 
                        className="w-10 h-10 rounded-xl border border-white/5 bg-white/2 flex items-center justify-center text-white/20 hover:text-primary hover:border-primary/40 transition-all group"
                    >
                        <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">terminal</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
