import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Mermaid from '../../shared/components/Mermaid';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectData = [
    {
      id: "ecommerce-dwh",
      index: "01",
      domain: "DATA_WAREHOUSE",
      title: "End-to-End E-commerce DWH",
      description: "Unified 15+ fragmented data sources into a centralized Snowflake DWH using DBT and Airflow. Implemented SCD Type 2 tracking for inventory history.",
      tags: ["Snowflake", "dbt", "Airflow"],
      challenges: [
        { challenge: "Data Fragmentation", solution: "Unified 15+ sources into a centralized ODS layer.", icon: "account_tree" },
        { challenge: "Latency in Ingestion", solution: "Optimized Airflow tasks for incremental loading.", icon: "timer" },
        { challenge: "Data Quality Issues", solution: "Integrated dbt-expectations for automated DQ testing.", icon: "verified" }
      ],
      metrics: [
        { label: "Latency", legacyValue: "24h", newValue: "15min", type: "line" },
        { label: "Accuracy", legacyValue: "85%", newValue: "99.9%", type: "bar" }
      ],
      mermaidCode: `
        graph LR
          subgraph Sources
            S1[ERP System]
            S2[CRM Hub]
            S3[E-comm API]
          end
          Sources --> AF[Airflow Orchestrator]
          AF --> SF_RAW[Snowflake RAW]
          SF_RAW --> DBT[DBT Transformations]
          DBT --> SF_GOLD[Snowflake Gold Layer]
          SF_GOLD --> BI[Power BI / Analytics]
      `,
      codeSnippet: "models: \n  - name: fct_orders\n    tests:\n      - dbt_expectations.expect_column_values_to_be_between:\n          column_name: order_date\n          min_value: '2020-01-01'\n          max_value: '2025-12-31'"
    },
    {
      id: "activity-streaming",
      index: "02",
      domain: "STREAMING_PIPELINE",
      title: "Real-time User Activity Streaming",
      description: "Architected a Kafka-Flink pipeline processing 100k events/sec for real-time personalization engine. Achieved a dramatic latency reduction from 15 minutes down to 500ms, improving system responsiveness and user engagement.",
      tags: ["Kafka", "Flink", "Java"],
      challenges: [
        { challenge: "High Throughput Ingestion", solution: "Implemented clustered Kafka, partitioned topics, optimized producer configs.", icon: "hub" },
        { challenge: "State Management & Latency", solution: "Utilized Flink's RocksDB backend, incremental checkpointing, watermarks.", icon: "query_stats" },
        { challenge: "Schema Evolution", solution: "Adopted Avro schemas with Confluent Schema Registry for forward compatibility.", icon: "schema" }
      ],
      metrics: [
        { label: "Latency Improvement (End-to-End)", legacyValue: "15 min", newValue: "500 ms", type: "line" },
        { label: "Throughput Capacity (Events/Sec)", legacyValue: "10k", newValue: "100k", type: "bar" }
      ],
      mermaidCode: `
        graph TD
          UA[User Activity] --> |100k ev/s| KAFKA[Kafka Cluster]
          KAFKA --> |Source Stream| FLINK[Flink Processing]
          subgraph Flink Cluster
            FLINK --> |Windowing| ST[State Manager]
            ST --> |Low Latency| EN[Personalization Engine]
          end
          EN --> |Update Profile| DB[Real-time DB]
      `,
      codeSnippet: "public class UserActivityProcessor extends KeyedProcessFunction<String, UserEvent, UserProfile> {\n    @Override\n    public void processElement(UserEvent event, Context ctx, Collector<UserProfile> out) {\n        ValueState<UserProfile> state = getRuntimeContext().getState(profileStateDescriptor);\n        UserProfile profile = state.value();\n        profile.update(event);\n        state.update(profile);\n        out.collect(profile);\n    }\n}"
    },
    {
      id: "financial-ingestion",
      index: "03",
      domain: "FINANCIAL_INGESTION",
      title: "Automated Financial Ingestion",
      description: "Secure, compliant ingestion engine for banking transactions. Automated 100% of audit logging and PII masking protocols.",
      tags: ["Python", "AWS Glue", "S3"],
      challenges: [
        { challenge: "PII Security", solution: "Applied KMS encryption and automated PII masking in-transit.", icon: "lock" },
        { challenge: "Scalability during peak", solution: "Dynamic Glue worker allocation based on partition size.", icon: "dynamic_feed" },
        { challenge: "Audit Compliance", solution: "Automated audit logs to immutable S3 bucket for compliance.", icon: "history_edu" }
      ],
      metrics: [
        { label: "Ingestion Speed", legacyValue: "4h", newValue: "15min", type: "line" },
        { label: "Manual Effort", legacyValue: "10h/week", newValue: "0h/week", type: "bar" }
      ],
      mermaidCode: `
        graph LR
          BANK[Banking Portal] --> |SFTP/API| S3_IN[S3 Landing]
          subgraph AWS Security
            S3_IN --> GLUE[AWS Glue ETL]
            GLUE --> |KMS/Masking| KMS[Secret Manager]
          end
          GLUE --> |Parquet| S3_CLEAN[S3 Clean Zone]
          S3_CLEAN --> AUDIT[Audit Logging]
      `,
      codeSnippet: "def mask_pii(df, columns):\n    for col in columns:\n        df = df.withColumn(col, sha2(df[col], 256))\n    return df\n\nfinancial_df = mask_pii(raw_df, ['account_number', 'customer_name'])"
    },
    {
      id: "quality-framework",
      index: "04",
      domain: "QUALITY_FRAMEWORK",
      title: "Scalable Data Quality Framework",
      description: "Built a custom Python framework for proactive data validation using Great Expectations. Decreased upstream bugs by 75%.",
      tags: ["Python", "GX", "Slack API"],
      challenges: [
        { challenge: "Siloed Validations", solution: "Centralized GX checkpoint registry across all pipelines.", icon: "source" },
        { challenge: "Late Bug Detection", solution: "Pre-deployment validation scripts for CI/CD integration.", icon: "bug_report" },
        { challenge: "Reporting Gaps", solution: "Real-time Slack alerting with context-rich failure logs.", icon: "mark_chat_unread" }
      ],
      metrics: [
        { label: "Upstream Bugs", legacyValue: "45", newValue: "10", type: "line" },
        { label: "Time to Detect", legacyValue: "24h", newValue: "5min", type: "bar" }
      ],
      mermaidCode: `
        graph TD
          PIPE[Existing Pipeline] --> |Check Point| GX[Great Expectations]
          subgraph DQ Engine
            GX --> |Validate JSON| JSON[JSON Schema]
            JSON --> |Pass/Fail| RULES[Logic Rules]
          end
          RULES --> |Fail| SLACK[Slack Alert]
          RULES --> |Pass| LOAD[Final Load]
      `,
      codeSnippet: "checkpoint = context.get_checkpoint('orders_gold')\nresults = checkpoint.run(run_name='manual_test')\nif not results.success:\n    slack_client.chat_postMessage(channel='#alerts', text='DQ Fail: Orders')"
    }
  ];

  const project = projectData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
    <div className="min-h-screen bg-background text-on-background selection:bg-primary/30">
      {/* Header breadcrumbs & tech chips */}
      <nav className="flex items-center justify-between p-6 max-w-[1440px] mx-auto border-b border-white/5 bg-background/50 backdrop-blur-xl sticky top-0 z-50">
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-[10px] font-mono text-on-surface-variant hover:text-primary transition-all uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Hub <span className="text-white/20">/</span> Deep Dive <span className="text-white/20">/</span> <span className="text-primary">{project.domain}</span>
        </button>
        <div className="flex gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container-highest/50 border border-primary/20 text-[10px] font-mono text-primary shadow-[0_0_15px_rgba(88,245,209,0.1)]">
               <span className="w-1 h-1 rounded-full bg-primary animate-pulse"></span>
               {tag}
            </span>
          ))}
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto p-6 lg:p-12 space-y-12 lg:space-y-24">
        {/* Title & Overview */}
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3 space-y-8">
            <h1 className="text-5xl lg:text-8xl font-headline font-bold tracking-tighter text-on-surface leading-[0.9] drop-shadow-[0_0_40px_rgba(88,245,209,0.2)]">
              {project.title}
            </h1>
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">Executive Overview</h3>
              <p className="text-xl lg:text-2xl font-light text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {/* Architecture Visualization with Mermaid.js */}
            <div className="w-full glass-panel rounded-3xl border border-white/10 overflow-hidden relative">
               <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#58f5d1_1px,transparent_1px)] [background-size:32px_32px]"></div>
               <div className="relative w-full min-h-[400px] flex items-center justify-center">
                  <Mermaid chart={project.mermaidCode} />
                  <div className="absolute top-0 right-0 p-4">
                    <div className="text-[8px] font-mono text-primary/40 uppercase tracking-widest">ARCHITECTURE_VISUALIZATION_CORE.MERMAID</div>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-8 glass-panel rounded-3xl border border-white/5 space-y-8 sticky top-32 bg-surface-container-lowest/30">
              <div className="space-y-6">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-on-surface-variant border-b border-white/5 pb-4">Project Sidebar</h4>
                <div>
                  <div className="text-[10px] font-mono text-primary mb-4">Technologies Leveraged</div>
                  <ul className="space-y-3">
                    {project.tags.map(tag => (
                      <li key={tag} className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-white transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl hover:shadow-[0_0_30px_rgba(88,245,209,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2 group">
                  <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">bolt</span>
                  Run Pipeline Demo
                </button>
                <button className="w-full py-4 bg-surface-container-highest border border-white/5 text-[10px] font-mono uppercase tracking-widest text-on-surface-variant hover:text-white transition-all rounded-xl">
                  View Technical Docs
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Challenges & Solutions */}
        <section className="space-y-12">
          <div className="space-y-2">
             <h3 className="text-2xl font-headline font-bold text-on-surface uppercase tracking-tight">Technical Challenges & Solutions</h3>
             <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {project.challenges.map((item, i) => (
              <div key={i} className="p-8 glass-panel rounded-3xl border border-white/5 space-y-6 group hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-primary uppercase tracking-widest">Challenge:</div>
                    <div className="text-xl font-headline font-bold text-on-surface leading-tight">{item.challenge}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-tertiary uppercase tracking-widest">Solution:</div>
                    <div className="text-sm font-light text-on-surface-variant leading-relaxed">{item.solution}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Metrics & Code */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Charts */}
          <section className="space-y-12">
            <div className="space-y-2">
              <h3 className="text-2xl font-headline font-bold text-on-surface uppercase tracking-tight">Performance Metrics</h3>
              <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>
            <div className="grid gap-8">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-8 glass-panel rounded-3xl border border-white/5 space-y-6 relative overflow-hidden group">
                  <div className="flex justify-between items-end">
                    <div className="space-y-2">
                      <div className="text-sm text-on-surface-variant font-light">{metric.label}</div>
                      <div className="flex items-baseline gap-4">
                        <span className="text-4xl font-headline font-bold text-on-surface">{metric.newValue}</span>
                        <span className="text-xs font-mono text-primary uppercase">(New Pipeline)</span>
                      </div>
                    </div>
                    <div className="text-right">
                       <span className="text-xs font-mono text-on-surface-variant block uppercase tracking-widest">{metric.legacyValue}</span>
                       <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">(Legacy)</span>
                    </div>
                  </div>
                  {/* Pseudo Chart SVG */}
                  <div className="h-24 w-full flex items-end gap-1 px-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    {metric.type === 'bar' ? (
                      [...Array(12)].map((_, idx) => (
                        <div key={idx} className="flex-1 bg-primary/20 rounded-t" style={{ height: `${20 + Math.random() * 80}%` }}></div>
                      ))
                    ) : (
                      <svg viewBox="0 0 400 100" className="w-full h-full stroke-primary/40 fill-none stroke-2">
                        <path d="M 0 100 Q 100 20 200 80 T 400 10" />
                        <circle cx="400" cy="10" r="4" className="fill-primary animate-ping" />
                        <circle cx="400" cy="10" r="4" className="fill-primary" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Code Implementation */}
          <section className="space-y-12">
            <div className="space-y-2">
              <h3 className="text-2xl font-headline font-bold text-on-surface uppercase tracking-tight">Code Implementation</h3>
              <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#0d121b] overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#1a212e]/50 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest opacity-50">{id}.src / implementation.js</div>
              </div>
              {/* Code Editor Body */}
              <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto">
                <div className="flex gap-6">
                  <div className="text-on-surface/20 text-right select-none space-y-1">
                    {[...Array(10)].map((_, i) => <div key={i}>{i+1}</div>)}
                  </div>
                  <pre className="text-on-surface/80">
                    <code className="text-blue-400">import</code> <code className="text-white">{id}.nodeProcesses.js</code>{'\n'}
                    {project.codeSnippet}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Let's Connect Footer */}
        <section className="py-24 border-t border-white/5 flex flex-col items-center space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-6xl lg:text-8xl font-headline font-bold tracking-tighter text-on-surface drop-shadow-[0_0_30px_rgba(88,245,209,0.2)]">Let's Connect</h2>
              <p className="text-on-surface-variant font-light tracking-wide">Let's connect to communicate other communities.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-2xl px-6">
                <a href="#" className="flex-grow flex items-center justify-center gap-3 px-12 py-6 glass-panel rounded-2xl border border-white/10 text-on-surface hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all group overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                   <span className="material-symbols-outlined text-3xl">share</span>
                   <span className="text-xl font-headline font-bold">GitHub</span>
                </a>
                <a href="#" className="flex-grow flex items-center justify-center gap-3 px-12 py-6 glass-panel rounded-2xl border border-white/10 text-on-surface hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all group overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                   <span className="material-symbols-outlined text-3xl">hub</span>
                   <span className="text-xl font-headline font-bold">LinkedIn</span>
                </a>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
