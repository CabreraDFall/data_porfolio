import React from 'react';

const ProjectCard = ({ index, domain, title, description, tags, onViewDeepDive }) => {
  return (
    <div className="bg-surface-container-low p-6 md:p-8 rounded-xl border border-outline-variant/10 flex flex-col h-full transform transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 group">
      <div className="flex justify-between items-start mb-6">
        <div className="font-mono text-[10px] tracking-tighter text-on-surface-variant uppercase">
          <span className="text-primary mr-1">#{index}</span> / {domain}
        </div>
      </div>

      <h3 className="text-2xl font-headline font-bold text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-on-surface-variant font-light text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded bg-surface-container-highest border border-outline-variant/20 text-[10px] font-mono text-on-surface-variant"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={onViewDeepDive}
        className="w-full md:w-auto self-start px-6 py-3 md:py-2 border border-outline-variant/20 text-[10px] text-primary font-mono uppercase tracking-widest text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all active:scale-95"
      >
        View Deep Dive
      </button>
    </div>
  );
};

export default ProjectCard;
