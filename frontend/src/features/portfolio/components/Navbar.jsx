import React, { useState, useEffect } from 'react';
import { useConfig } from '../../../shared/context/ConfigContext';

const Navbar = () => {
    const { config } = useConfig();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: "Home", href: "#hero" },
        { label: "Expertise", href: "#expertise" },
        { label: "Architectures", href: "#projects" },
        { label: "About", href: "#about" }
    ];

    return (
        <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[90%] max-w-2xl
            ${isScrolled ? 'opacity-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <div className="glass-panel p-2 rounded-full border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] bg-surface-container-lowest/30 backdrop-blur-2xl">
                <ul className="flex items-center justify-between px-6 py-2">
                    <li className="hidden md:block">
                        <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">
                            {config.name.split(' ')[0]}.Architect
                        </span>
                    </li>
                    <div className="flex gap-1 md:gap-4 items-center">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a 
                                    href={item.href}
                                    className="px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
