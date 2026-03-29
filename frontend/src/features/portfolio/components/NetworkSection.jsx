import React from 'react';
import NetworkMap from './NetworkMap';
import StatusPanel from './StatusPanel';
import TrafficInsights from './TrafficInsights';

const NetworkSection = () => {
  return (
    <section className="py-24 px-6 lg:px-20" id="network">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-headline font-bold text-on-surface mb-4">Network</h2>
          <div className="h-1 w-20 bg-primary"></div>
          <p className="mt-6 text-on-surface-variant max-w-2xl font-light leading-relaxed">
            Visualizing the interconnection of complex data infrastructures. Every node represents a critical service point in the distributed ecosystem.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Visualization */}
          <NetworkMap />
          
          {/* Side Info Panels */}
          <div className="space-y-8">
            <StatusPanel />
            <TrafficInsights />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
