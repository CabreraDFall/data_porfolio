import React from 'react';

const AdminHeader = ({ onNewArchitecture, onConfig, onLogout }) => {
    return (
        <div className="flex justify-between items-end border-b border-white/5 pb-8">
            <div className="space-y-2">
                <h1 className="text-4xl font-headline font-bold tracking-tighter italic">CMS_CONTROL_CENTER</h1>
                <p className="text-on-surface-variant font-mono text-[10px] uppercase tracking-[0.4em] text-primary">
                    System: // <span className="text-white">ACTIVE_MANAGEMENT</span>
                </p>
            </div>
            <div className="flex gap-4">
                <button 
                    onClick={onLogout}
                    className="px-6 py-3 border border-red-500/20 text-red-400 font-mono text-[10px] uppercase tracking-widest rounded-xl hover:bg-red-500/5 transition-all flex items-center gap-2 group"
                >
                    <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">logout</span>
                    Logout
                </button>
                <button 
                    onClick={onConfig}
                    className="px-6 py-3 border border-white/10 text-on-surface-variant font-mono text-[10px] uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all flex items-center gap-2 group"
                >
                    <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">settings</span>
                    Global_Config
                </button>
                <button 
                    onClick={onNewArchitecture}
                    className="px-6 py-3 bg-primary text-black font-headline font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(88,245,209,0.3)] transition-all flex items-center gap-2 active:scale-95 group"
                >
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">add</span>
                    New Architecture
                </button>
            </div>
        </div>
    );
};

export default AdminHeader;
