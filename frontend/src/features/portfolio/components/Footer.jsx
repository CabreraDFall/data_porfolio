import React from 'react';

const Footer = () => {
  const links = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "#" },
    { label: "Download Resume", href: "#" },
  ];

  return (
    <footer className="w-full py-12 px-6 mt-auto bg-[#081423] border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-[1440px] mx-auto">
        <div className="font-body text-xs uppercase tracking-widest text-[#d7e3f9]/50">
          © {new Date().getFullYear()} Synthetic Architect. Engineered for Precision.
        </div>
        <div className="flex gap-8 font-body text-xs uppercase tracking-widest">
          {links.map((link) => (
            <a 
              key={link.label}
              className="text-[#d7e3f9]/50 hover:text-[#58f5d1] transition-colors focus:outline-none focus:ring-1 focus:ring-[#58f5d1]" 
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
