import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#081423]/60 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-navy-900/50">
      <div className="flex items-center justify-between px-6 py-3 w-full max-w-[1440px] mx-auto">
        <div className="text-xl font-bold tracking-tighter text-[#58f5d1] font-headline">
          Synthetic.Architect
        </div>
        <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight text-sm font-medium">
          <a className="text-[#d7e3f9] border-b-2 border-[#58f5d1] pb-1" href="#network">Network</a>
          <a className="text-[#d7e3f9]/70 hover:text-[#d7e3f9] transition-colors hover:bg-white/5 rounded-lg px-2 py-1" href="#pipelines">Pipelines</a>
          <a className="text-[#d7e3f9]/70 hover:text-[#d7e3f9] transition-colors hover:bg-white/5 rounded-lg px-2 py-1" href="#infrastructure">Infrastructure</a>
          <a className="text-[#d7e3f9]/70 hover:text-[#d7e3f9] transition-colors hover:bg-white/5 rounded-lg px-2 py-1" href="#insights">Insights</a>
          <a className="text-[#d7e3f9]/70 hover:text-[#d7e3f9] transition-colors hover:bg-white/5 rounded-lg px-2 py-1" href="#projects">Projects</a>
          <a className="text-[#d7e3f9]/70 hover:text-[#d7e3f9] transition-colors hover:bg-white/5 rounded-lg px-2 py-1" href="#about">About</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-[#d7e3f9]/70 hover:text-[#58f5d1] hover:bg-white/5 rounded-lg transition-all">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-[#d7e3f9]/70 hover:text-[#58f5d1] hover:bg-white/5 rounded-lg transition-all">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <img 
            alt="User Profile Avatar" 
            className="w-8 h-8 rounded-full border border-primary/20" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC198ILfWqjurepr_1wpnmiPG_pSLAKU1zjuk_M9nV3lu3WSNVUvhTiOs6YezoyNADR7mQ1_huXrTBRTKZq4BgyNgrN4GIY5K2mQ5wsgveruMEqs4JpWLXz_isttUAPWZaRE0OjBueSo5uCFU0WrKDRBu4xRdhU6ZLgihgJ5-owx_QFGdcI_CKKRLxPoX8Irrt3XERt8nkVFnIWvdJkvc6s0HYInQ8MeN-DXH__r3U_V_kC3WYAV1GAj2b9KoKcDfz5gWBuwKYmzY" 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
