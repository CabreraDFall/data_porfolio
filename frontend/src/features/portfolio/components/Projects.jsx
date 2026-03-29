import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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

  return (
    <section className="py-24 px-6 lg:px-20 bg-surface" id="projects">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section from Image */}
        <div className="flex justify-between items-baseline mb-16 border-b border-outline-variant/10 pb-6">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-on-surface tracking-tight uppercase">
            DEPLOYED_ARCHITECTURES
          </h2>
          <div className="text-[10px] font-mono text-primary uppercase tracking-widest hidden md:block">
            [TOTAL_PROJECTS: {projectData.length.toString().padStart(2, '0')}]
          </div>
        </div>
        
        {/* Grid Layout strictly matching the image provided (2x2) */}
        <div className="grid md:grid-cols-2 gap-px bg-outline-variant/10 border border-outline-variant/10 rounded-2xl overflow-hidden shadow-2xl">
          {projectData.map((project) => (
            <div key={project.id} className="bg-surface p-1">
              <ProjectCard 
                {...project} 
                onViewDeepDive={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Detail Overlay / CMS View */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
