import React from 'react';

const Metrics = () => {
  const metricsData = [
    { label: "Pipelines Executed", value: "1.2k+", icon: "terminal" },
    { label: "Data Processed", value: "500TB+", icon: "database" },
    { label: "Systems Deployed", value: "45+", icon: "cloud_done" },
    { label: "Uptime SLA", value: "99.99%", icon: "bolt", highlighted: true },
  ];

  return (
    <section className="bg-surface-container-low/50 py-16 border-y border-white/5 px-6 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {metricsData.map((metric, index) => (
            <div key={index} className="space-y-1">
              <div className={`text-4xl lg:text-5xl font-headline font-bold ${metric.highlighted ? 'text-primary' : 'text-on-surface'}`}>
                {metric.value}
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-mono text-xs uppercase tracking-widest">
                <span className="material-symbols-outlined text-primary text-sm">
                  {metric.icon}
                </span>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
