import React from 'react';
import HeroGraphic from './HeroGraphic';

const Hero = () => {
  const skills = ["Python", "SQL", "Apache Spark", "Airflow", "dbt", "Power BI", "AWS"];

  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden px-6 lg:px-20">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-container-lowest to-surface"></div>
        {/* Abstract Data Viz (CSS) */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[100px]"></div>
        {/* Data Nodes Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#58f5d1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto asymmetric-grid items-center gap-16">
        {/* Hero Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">System Status: Optimal</span>
          </div>
          <div>
            <h1 className="text-7xl lg:text-9xl font-headline font-bold tracking-tighter text-on-surface mb-4 leading-[0.9]">
              Data <span className="text-primary">Engineer</span>
            </h1>
            <p className="text-xl lg:text-2xl font-light text-on-surface-variant max-w-xl">
              Architecting Scalable Data Systems with high-availability infrastructure and predictive intelligence.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-lg bg-surface-container-low border border-outline-variant/10 text-secondary text-sm font-mono">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-6 pt-4">
            <button className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              Initialize Project
            </button>
            <button className="px-8 py-4 border border-outline-variant/20 text-on-surface font-medium rounded-lg hover:bg-surface-container-high transition-all">
              View Documentation
            </button>
          </div>
        </div>
        
        {/* Hero Graphic */}
        <HeroGraphic />
      </div>
    </section>
  );
};

export default Hero;
