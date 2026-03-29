import React from 'react';

const NetworkMap = () => {
  const nodes = [
    { id: 'Gateway_01', icon: 'router', color: 'primary', position: { top: '10%', left: '20%' }, size: 'w-12 h-12' },
    { id: 'Process_Compute', icon: 'memory', color: 'tertiary', position: { bottom: '20%', left: '40%' }, size: 'w-16 h-16' },
    { id: 'Warehouse_A', icon: 'storage', color: 'primary', position: { top: '40%', right: '10%' }, size: 'w-14 h-14' },
  ];

  return (
    <div className="lg:col-span-2 relative h-[500px] bg-surface-container rounded-xl border border-outline-variant/10 overflow-hidden group">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          className="w-full h-full object-cover mix-blend-overlay" 
          alt="abstract close-up of computer server LEDs" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAooBfYi1tP1rFCfgRSHlIPpWEo28nfmx4I8NantS7srgdNxda1QcoooyZEmpeHWvwLqDjRMBTVP0tqXcf59K3MPMhZSfYvDOmjeo1n84ndh6tEa0vuDw1i2-ChRG1fjgrtvNGMu5w0JN87yF6lxbD832MFwsgJ7al4bQzbJtTS84lIRX_-1PZx0uS_crzRT8M06fM231VY-lwwG2F5ydMgahw7eywrU5nJQFf11Cmm4uNCs2I53p-w3ATQA2bD5Ac179OzjwmvOCs" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
      
      {/* Simulated Interactive Network Map */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-3/4 h-3/4">
          {nodes.map((node) => (
            <div 
              key={node.id} 
              className="absolute group/node" 
              style={{ ...node.position }}
            >
              <div className={`${node.size} bg-surface-container-highest rounded-lg border border-${node.color}/40 flex items-center justify-center text-${node.color} shadow-[0_0_15px_rgba(88,245,209,0.3)]`}>
                <span className="material-symbols-outlined">{node.icon}</span>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/node:opacity-100 transition-opacity bg-surface-container-high px-2 py-1 rounded text-[10px] text-on-surface font-mono whitespace-nowrap">
                {node.id}
              </div>
            </div>
          ))}
          
          {/* Connection Lines (Simplified SVG) */}
          <svg className="absolute inset-0 w-full h-full stroke-primary/20 fill-none pointer-events-none">
            <path d="M 0.25 0.15 L 0.45 0.75 L 0.85 0.45 Z" strokeWidth="1"></path>
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
        <div className="space-y-1">
          <div className="text-xs font-mono text-primary uppercase tracking-widest">Global Status</div>
          <div className="text-2xl font-headline font-bold text-on-surface">Synchronized</div>
        </div>
        <div className="flex gap-2">
          {[0.75, 0.5, 0.9].map((scale, i) => (
            <div key={i} className="w-10 h-1 bg-primary/20 rounded-full overflow-hidden">
              <div className="w-full h-full bg-primary origin-left" style={{ transform: `scaleX(${scale})` }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkMap;
