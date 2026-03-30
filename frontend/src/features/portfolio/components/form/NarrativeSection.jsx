import React from 'react';

const NarrativeSection = ({ project, handleAnalysisChange }) => {
  return (
    <div className="space-y-12">
      <h3 className="text-xl font-headline font-bold uppercase tracking-tighter border-b border-white/5 pb-4">
        Technical_Narrative
      </h3>
      <div className="grid gap-12">
        <div className="space-y-4">
          <label className="text-[10px] font-mono uppercase text-primary tracking-[0.4em] ml-1">
            01_Problem_Statement
          </label>
          <textarea
            name="problem"
            value={project.detailed_analysis.problem}
            onChange={handleAnalysisChange}
            className="w-full h-40 glass-panel-input p-8 bg-white/2 border border-white/5 rounded-2xl text-base font-light italic leading-relaxed focus:border-primary/50 outline-none transition-all shadow-xl"
            placeholder="Describe the legacy bottleneck or the specific challenge faced..."
          />
        </div>
        <div className="space-y-4">
          <label className="text-[10px] font-mono uppercase text-primary tracking-[0.4em] ml-1">
            02_Architectural_Solution
          </label>
          <textarea
            name="solution"
            value={project.detailed_analysis.solution}
            onChange={handleAnalysisChange}
            className="w-full h-40 glass-panel-input p-8 bg-white/2 border border-white/5 rounded-2xl text-base font-light leading-relaxed focus:border-primary/50 outline-none transition-all shadow-xl"
            placeholder="Explain the technical design, layers, and implementation details..."
          />
        </div>
        <div className="space-y-4">
          <label className="text-[10px] font-mono uppercase text-primary tracking-[0.4em] ml-1">
            03_Strategic_Impact
          </label>
          <textarea
            name="impact"
            value={project.detailed_analysis.impact}
            onChange={handleAnalysisChange}
            className="w-full h-40 glass-panel-input p-8 bg-white/2 border border-white/5 rounded-2xl text-base font-light italic leading-relaxed border-l-4 border-l-primary/40 focus:border-primary transition-all outline-none bg-primary/5 shadow-2xl"
            placeholder="Detail the final business outcome or the strategic improvement achieved..."
          />
        </div>
      </div>
    </div>
  );
};

export default NarrativeSection;
