import React from 'react';

const HardshipSection = ({ project, setProject, addListItem, removeListItem }) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center border-b border-white/5 pb-4">
        <h3 className="text-xl font-headline font-bold uppercase tracking-tighter">Technical_Hardships</h3>
        <button
          type="button"
          onClick={() => addListItem('challenges', { challenge: '', solution: '', icon: 'hub' })}
          className="text-[10px] font-mono text-primary hover:underline hover:text-primary-container transition-all"
        >
          APPEND_HARDSHIP
        </button>
      </div>
      <div className="space-y-4">
        {project.challenges.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-12 gap-6 p-8 glass-panel border border-white/5 rounded-2xl items-center relative group hover:border-primary/20 transition-all"
          >
            <button
              type="button"
              onClick={() => removeListItem('challenges', index)}
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none"
            >
              <span className="material-symbols-outlined text-sm text-primary">close</span>
            </button>
            <div className="md:col-span-1 flex flex-col items-center gap-1">
              <label className="text-[8px] font-mono uppercase text-white/20">Icon</label>
              <input
                value={item.icon}
                onChange={(e) => {
                  const newChallenges = [...project.challenges];
                  newChallenges[index].icon = e.target.value;
                  setProject({ ...project, challenges: newChallenges });
                }}
                className="w-full bg-transparent text-center font-mono text-[10px] text-primary outline-none focus:text-white"
                placeholder="icon"
              />
            </div>
            <div className="md:col-span-4 space-y-1">
              <label className="text-[8px] font-mono uppercase text-white/20 ml-1">Challenge_Identification</label>
              <input
                value={item.challenge}
                onChange={(e) => {
                  const newChallenges = [...project.challenges];
                  newChallenges[index].challenge = e.target.value;
                  setProject({ ...project, challenges: newChallenges });
                }}
                className="w-full bg-transparent text-xs font-mono uppercase text-white tracking-widest outline-none border-b border-white/5 focus:border-primary/40 transition-all pb-1"
                placeholder="Define Hardship"
              />
            </div>
            <div className="md:col-span-7 space-y-1">
              <label className="text-[8px] font-mono uppercase text-white/20 ml-1">Applied_Mitigation_Strategy</label>
              <input
                value={item.solution}
                onChange={(e) => {
                  const newChallenges = [...project.challenges];
                  newChallenges[index].solution = e.target.value;
                  setProject({ ...project, challenges: newChallenges });
                }}
                className="w-full bg-transparent text-xs font-light text-on-surface-variant outline-none focus:text-white transition-all"
                placeholder="Strategic solution implemented..."
              />
            </div>
          </div>
        ))}
        {project.challenges.length === 0 && (
          <div className="py-12 text-center border-2 border-dashed border-white/5 rounded-3xl text-white/20 font-mono text-xs italic">
            NO_HARDSHIPS_DETECTED // SYSTEM_OPERATING_OPTIMALLY
          </div>
        )}
      </div>
    </div>
  );
};

export default HardshipSection;
