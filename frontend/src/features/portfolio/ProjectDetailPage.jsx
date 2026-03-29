import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Project data (re-using the same data structure as in Projects.jsx)
  const projectData = [
    {
      id: "ecommerce-dwh",
      index: "01",
      domain: "DATA_WAREHOUSE",
      title: "End-to-End E-commerce DWH",
      description: "Unified 15+ fragmented data sources into a centralized Snowflake DWH using DBT and Airflow. Implemented SCD Type 2 tracking for inventory history.",
      tags: ["Snowflake", "dbt", "Airflow"]
    },
    {
      id: "activity-streaming",
      index: "02",
      domain: "STREAMING_PIPELINE",
      title: "Real-time User Activity Streaming",
      description: "Architected a Kafka-Flink pipeline processing 100k events/sec for real-time personalization engine. Reduced latency from 15min to 500ms.",
      tags: ["Kafka", "Flink", "Java"]
    },
    {
      id: "financial-ingestion",
      index: "03",
      domain: "FINANCIAL_INGESTION",
      title: "Automated Financial Ingestion",
      description: "Secure, compliant ingestion engine for banking transactions. Automated 100% of audit logging and PII masking protocols.",
      tags: ["Python", "AWS Glue", "S3"]
    },
    {
      id: "quality-framework",
      index: "04",
      domain: "QUALITY_FRAMEWORK",
      title: "Scalable Data Quality Framework",
      description: "Built a custom Python framework for proactive data validation using Great Expectations. Decreased upstream bugs by 75%.",
      tags: ["Python", "GX", "Slack API"]
    }
  ];

  const project = projectData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 text-on-surface">
        <h2 className="text-4xl font-headline font-bold mb-4">Project Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-primary text-on-primary font-bold rounded-lg hover:shadow-lg transition-all"
        >
          Return to Hub
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col text-on-surface">
      {/* Detail Header area */}
      <div className="w-full bg-surface-container-low border-b border-outline-variant/10 py-12 px-6 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-xs font-mono text-on-surface-variant hover:text-primary transition-colors mb-12 uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to Hub
          </button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-widest text-primary uppercase">
                #{project.index} Deep Dive / {project.domain}
              </div>
              <h1 className="text-5xl lg:text-7xl font-headline font-bold tracking-tight leading-tight">
                {project.title}
              </h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded bg-primary/10 border border-primary/20 text-xs font-mono text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow py-20 px-6 lg:px-20">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-3 gap-16">
          {/* Main narrative */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-6 border-b border-outline-variant/20 pb-2">
                Executive Overview
              </h3>
              <p className="text-2xl font-light leading-relaxed text-on-surface">
                {project.description}
              </p>
            </section>

            <section className="aspect-video w-full rounded-2xl bg-surface-container-low border border-outline-variant/10 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#58f5d1_1px,transparent_1px)] [background-size:24px_24px]"></div>
               <div className="text-sm font-mono text-on-surface-variant opacity-40 uppercase tracking-widest group-hover:opacity-60 transition-opacity">
                  [ Architecture_Visualization_Core.svg ]
               </div>
            </section>

            <section className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-sm font-mono text-primary uppercase tracking-widest">Key Transformations</h4>
                <ul className="space-y-4 text-on-surface-variant font-light">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-1">schema</span>
                    <div>
                      <span className="text-on-surface font-medium block">Dimensional Modeling</span>
                      Implemented Star Schema for 500+ metrics across E-commerce domains.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-1">memory</span>
                    <div>
                      <span className="text-on-surface font-medium block">Compute Optimization</span>
                      Refactored Snowflake queries resulting in a 40% reduction in warehouse costs.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-mono text-primary uppercase tracking-widest">Quality Control</h4>
                <ul className="space-y-4 text-on-surface-variant font-light">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-1">verified_user</span>
                    <div>
                      <span className="text-on-surface font-medium block">Data Integrity</span>
                      Automated daily reconciliation between S3 source and Snowflake gold layer.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-1">monitoring</span>
                    <div>
                      <span className="text-on-surface font-medium block">Real-time Alerting</span>
                      Slack-integrated dbt tests ensuring 99.9% data freshness.
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar / Technical Specs */}
          <aside className="space-y-8">
            <div className="p-8 bg-surface-container-low rounded-2xl border border-outline-variant/10 space-y-8 sticky top-8">
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mb-6">Technologies Leveraged</h4>
                <div className="grid grid-cols-2 gap-4">
                  {project.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-2 text-sm text-on-surface hover:text-primary transition-colors group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-all"></span>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-outline-variant/10 space-y-6">
                <button className="w-full px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">terminal</span>
                  Run Pipeline Demo
                </button>
                <button className="w-full px-8 py-4 border border-outline-variant/20 text-on-surface font-medium rounded-lg hover:bg-surface-container-high transition-all text-xs uppercase font-mono tracking-widest">
                  View Technical Docs
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
