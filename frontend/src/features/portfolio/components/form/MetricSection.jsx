import React from 'react';

const MetricSection = ({ project, setProject, addListItem, removeListItem }) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center border-b border-white/5 pb-4">
        <h3 className="text-xl font-headline font-bold uppercase tracking-tighter">Verified_Metrics</h3>
        <button
          type="button"
          onClick={() => addListItem('kpis', { label: '', value: '', icon: 'speed' })}
          className="text-[10px] font-mono text-primary hover:underline hover:text-primary-container transition-all"
        >
          APPEND_KPI
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {project.kpis.map((kpi, index) => (
          <div key={index} className="glass-panel p-6 bg-white/2 border border-white/5 rounded-2xl space-y-4 relative group hover:border-primary/20 transition-all">
            <button
              type="button"
              onClick={() => removeListItem('kpis', index)}
              className="absolute top-4 right-4 text-white/20 hover:text-primary transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-white/40 ml-1">Metric_Label</label>
                <input
                  value={kpi.label}
                  onChange={(e) => {
                    const newKpis = [...project.kpis];
                    newKpis[index].label = e.target.value;
                    setProject({ ...project, kpis: newKpis });
                  }}
                  className="w-full bg-transparent text-[10px] font-mono uppercase text-white/60 border-b border-white/5 focus:border-primary/40 outline-none pb-1 transition-all"
                  placeholder="e.g. Latency"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-white/40 ml-1">Performance_Value</label>
                <input
                  value={kpi.value}
                  onChange={(e) => {
                    const newKpis = [...project.kpis];
                    newKpis[index].value = e.target.value;
                    setProject({ ...project, kpis: newKpis });
                  }}
                  className="w-full bg-transparent text-xl font-bold text-white focus:text-primary outline-none transition-all"
                  placeholder="e.g. -95%"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-white/40 ml-1">Icon_Identifier</label>
                <input
                  value={kpi.icon}
                  onChange={(e) => {
                    const newKpis = [...project.kpis];
                    newKpis[index].icon = e.target.value;
                    setProject({ ...project, kpis: newKpis });
                  }}
                  className="w-full bg-transparent text-[10px] font-mono text-primary/40 focus:text-primary outline-none transition-all"
                  placeholder="Material Icon Name"
                />
              </div>
            </div>
          </div>
        ))}
        {project.kpis.length === 0 && (
          <div className="md:col-span-3 py-12 text-center border-2 border-dashed border-white/5 rounded-3xl text-white/20 font-mono text-xs italic">
            NO_METRICS_REGISTERED // APPEND_NEW_TO_PROCEED
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricSection;
