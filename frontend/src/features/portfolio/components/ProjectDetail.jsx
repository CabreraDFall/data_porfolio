import React from 'react';

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-surface/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-4xl bg-surface-container-low border border-outline-variant/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-surface-container-highest rounded-full border border-outline-variant/30 text-on-surface hover:text-primary transition-colors z-20"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Hero Image / Header for Detail */}
        <div className="w-full md:w-1/3 bg-surface-container-highest p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-outline-variant/10">
          <div className="font-mono text-[10px] tracking-widest text-primary uppercase mb-4">
            #{project.index} Deep Dive
          </div>
          <h2 className="text-4xl font-headline font-bold text-on-surface leading-tight mb-6">
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-1 rounded bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto max-h-[80vh] bg-[#081423]/40">
          <div className="space-y-8">
            <section>
              <h4 className="text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-4 border-b border-outline-variant/10 pb-2">
                Executive Summary
              </h4>
              <p className="text-on-surface text-lg font-light leading-relaxed">
                {project.description}
              </p>
            </section>

            <section className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mb-2">Architectural Highlights</h4>
                <ul className="text-sm font-light space-y-2 text-on-surface">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> High-availability data pipelines</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> Low-latency streaming (500ms SLA)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> Automated PII masking & logging</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Placeholder for images or graphs as described "CMS-like" */}
            <div className="aspect-video w-full rounded-xl bg-surface-container-lowest border border-outline-variant/10 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#58f5d1_1px,transparent_1px)] [background-size:20px_20px]"></div>
               <div className="text-xs font-mono text-on-surface-variant opacity-40 uppercase tracking-widest">
                  [ System_Architecture_Visual.png ]
               </div>
            </div>
            
            <div className="flex gap-4 pt-4">
               <button className="flex-1 px-8 py-3 bg-primary text-on-primary font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 text-xs uppercase font-mono tracking-widest">
                  View Source Pipeline
               </button>
               <button className="px-8 py-3 border border-outline-variant/20 text-on-surface font-medium rounded-lg hover:bg-surface-container-high transition-all text-xs uppercase font-mono tracking-widest">
                  Docs
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop listener to close when clicking outside the modal */}
      <div 
        className="absolute inset-0 z-[-1]" 
        onClick={onClose}
      ></div>
    </div>
  );
};

export default ProjectDetail;
