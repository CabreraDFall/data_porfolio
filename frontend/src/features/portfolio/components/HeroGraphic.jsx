import React from 'react';

const HeroGraphic = () => {
  return (
    <div className="hidden lg:block relative">
      <div className="aspect-square w-full bg-surface-container/30 rounded-2xl border border-outline-variant/10 glass-panel overflow-hidden p-8 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Visual Representation of Nodes/Flow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-40">
            <svg className="w-full h-full stroke-primary/30 fill-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="40" strokeWidth="0.5"></circle>
              <circle cx="100" cy="100" r="70" strokeDasharray="4 4" strokeWidth="0.5"></circle>
              <path d="M100 20 L100 60 M100 140 L100 180 M20 100 L60 100 M140 100 L180 100" strokeWidth="1"></path>
              <circle cx="100" cy="20" fill="#58f5d1" r="3"></circle>
              <circle cx="100" cy="180" fill="#58f5d1" r="3"></circle>
              <circle cx="20" cy="100" fill="#ffd79f" r="3"></circle>
              <circle cx="180" cy="100" fill="#58f5d1" r="3"></circle>
            </svg>
          </div>
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex justify-between items-start">
              <div className="bg-surface-container-highest/80 p-3 rounded-lg border border-outline-variant/20">
                <div className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-mono">Source Node</div>
                <div className="text-sm font-bold text-primary font-headline">Ingestion_S3</div>
              </div>
              <div className="bg-surface-container-highest/80 p-3 rounded-lg border border-outline-variant/20">
                <div className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-mono">Active Streams</div>
                <div className="text-sm font-bold text-tertiary font-headline">14 Active</div>
              </div>
            </div>
            <div className="self-center bg-primary/10 px-4 py-2 rounded border border-primary/20 backdrop-blur-md">
              <div className="text-[10px] uppercase text-center tracking-tighter text-primary font-mono">Processing Core</div>
              <div className="text-xs font-mono text-on-surface">Cluster_ID: SPARK-8821</div>
            </div>
            <div className="flex justify-center">
              <div className="bg-surface-container-highest/80 p-3 rounded-lg border border-outline-variant/20 w-48">
                <div className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-mono">Data Flow</div>
                <div className="h-1 bg-surface-container-lowest mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGraphic;
