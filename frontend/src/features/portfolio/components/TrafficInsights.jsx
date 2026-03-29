import React from 'react';

const TrafficInsights = () => {
  const bars = [40, 60, 30, 80, 50, 95, 45];

  return (
    <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
      <div className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-4">Traffic Insights</div>
      <div className="aspect-video w-full bg-surface-container-lowest rounded-lg overflow-hidden flex items-end p-2 gap-1">
        {bars.map((height, i) => (
          <div 
            key={i} 
            className="flex-1 bg-primary/40 rounded-t transition-all hover:bg-primary/60" 
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>
      <div className="mt-4 text-xs font-mono text-on-surface-variant flex justify-between">
        <span>00:00</span>
        <span className="text-primary">Current Traffic Spike</span>
        <span>23:59</span>
      </div>
    </div>
  );
};

export default TrafficInsights;
