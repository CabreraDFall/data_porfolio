import React from 'react';

const StatusPanel = () => {
  const nodeStats = [
    { label: "Compute Clusters", value: "24 / 24" },
    { label: "Data Warehouses", value: "12 / 12" },
    { label: "API Endpoints", value: "156 / 158" },
  ];

  return (
    <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
      <div className="flex items-center justify-between mb-4">
        <div className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">Active Nodes</div>
        <span className="material-symbols-outlined text-primary text-sm">hub</span>
      </div>
      <div className="space-y-4">
        {nodeStats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center text-sm">
            <span className="text-on-surface-variant">{stat.label}</span>
            <span className="text-on-surface font-mono">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusPanel;
