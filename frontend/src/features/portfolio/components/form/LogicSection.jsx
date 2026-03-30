import React from 'react';

const LogicSection = ({ project, handleChange, setProject }) => {
  return (
    <div className="space-y-16">
      <div className="space-y-8">
        <div className="flex justify-between items-center border-b border-white/5 pb-4">
          <h3 className="text-xl font-headline font-bold uppercase tracking-tighter">Architecture_Logic</h3>
          <span className="text-[10px] font-mono text-white/20">LANG: // MERMAID.JS</span>
        </div>
        <textarea
          name="mermaid_code"
          value={project.mermaid_code}
          onChange={handleChange}
          className="w-full h-80 glass-panel-input p-8 bg-[#0d121b] border border-white/5 rounded-3xl font-mono text-xs leading-relaxed text-primary/80 focus:border-primary/30 outline-none shadow-2xl transition-all"
          placeholder="graph TD\n  A[Input] --> B{Logic}\n  B -->|Pass| C[Result]"
        />
      </div>

      <div className="space-y-12 pt-12 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase text-white/40 ml-1">repository_root_url</label>
            <input
              name="github_url"
              value={project.github_url}
              onChange={handleChange}
              className="w-full p-4 glass-panel bg-white/2 border border-white/10 rounded-xl font-mono text-[10px] focus:border-primary transition-all outline-none"
              placeholder="https://github.com/..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase text-white/40 ml-1">code_highlight_path</label>
            <input
              name="github_highlight_url"
              value={project.github_highlight_url}
              onChange={handleChange}
              className="w-full p-4 glass-panel bg-white/2 border border-white/10 rounded-xl font-mono text-[10px] focus:border-primary transition-all outline-none"
              placeholder="...#L100"
            />
          </div>
        </div>
        <div className="space-y-4">
          <label className="text-[10px] font-mono uppercase text-primary tracking-widest ml-1">
            Logic_Snippet (JSON/Python/SQL)
          </label>
          <textarea
            name="code_teaser"
            value={project.code_teaser}
            onChange={handleChange}
            className="w-full h-48 glass-panel-input p-8 bg-[#0d121b] border border-white/5 rounded-3xl font-mono text-xs text-secondary/80 focus:border-primary/30 outline-none transition-all shadow-xl"
            placeholder="Paste technical snippets here..."
          />
        </div>
      </div>

      <div className="space-y-4 pt-12 border-t border-white/5">
        <label className="text-[10px] font-mono uppercase text-white/40 ml-1">
          system_stack_tags (Comma Separated)
        </label>
        <input
          value={project.tags.join(', ')}
          onChange={(e) =>
            setProject({
              ...project,
              tags: e.target.value.split(',').map((t) => t.trim()),
            })
          }
          className="w-full p-4 glass-panel bg-white/2 border border-white/10 rounded-xl font-mono text-xs text-primary focus:border-primary transition-all outline-none"
          placeholder="Snowflake, dbt, Spark..."
        />
      </div>
    </div>
  );
};

export default LogicSection;
