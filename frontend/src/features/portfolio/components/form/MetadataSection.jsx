import React from 'react';

const MetadataSection = ({ project, handleChange }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase text-white/40 ml-1">system_id (slug)</label>
            <input
              name="id"
              value={project.id}
              onChange={handleChange}
              className="w-full glass-panel-input p-4 bg-white/2 border border-white/5 rounded-xl font-mono text-xs focus:border-primary/50 outline-none transition-all"
              placeholder="ecommerce-dwh"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase text-white/40 ml-1">visual_index</label>
            <input
              name="index"
              value={project.index}
              onChange={handleChange}
              className="w-full glass-panel-input p-4 bg-white/2 border border-white/5 rounded-xl font-mono text-xs focus:border-primary/50 outline-none transition-all"
              placeholder="01"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase text-white/40 ml-1">architecture_title</label>
          <input
            name="title"
            value={project.title}
            onChange={handleChange}
            className="w-full glass-panel-input p-4 bg-white/2 border border-white/5 rounded-xl font-headline font-bold text-lg focus:border-primary/50 outline-none transition-all"
            placeholder="Project Name"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase text-white/40 ml-1">short_manifesto (description)</label>
          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            className="w-full h-32 glass-panel-input p-4 bg-white/2 border border-white/5 rounded-xl text-sm font-light leading-relaxed focus:border-primary/50 outline-none transition-all"
            placeholder="Brief system overview..."
          />
        </div>
      </div>

      <div className="space-y-8 glass-panel p-8 bg-white/2 border border-white/5 rounded-3xl h-fit">
        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase text-white/40">Technical_Role</label>
          <input
            name="role"
            value={project.role}
            onChange={handleChange}
            className="w-full p-2 bg-transparent border-b border-white/10 text-xs font-bold focus:border-primary transition-all outline-none"
            placeholder="Lead Architect"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase text-white/40">System_Domain</label>
          <input
            name="domain"
            value={project.domain}
            onChange={handleChange}
            className="w-full p-2 bg-transparent border-b border-white/10 text-xs font-bold focus:border-primary transition-all outline-none"
            placeholder="CLOUD_INGESTION"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase text-white/40">Project_Duration</label>
          <input
            name="duration"
            value={project.duration}
            onChange={handleChange}
            className="w-full p-2 bg-transparent border-b border-white/10 text-xs font-bold focus:border-primary transition-all outline-none"
            placeholder="6 Months"
          />
        </div>
      </div>
    </div>
  );
};

export default MetadataSection;
