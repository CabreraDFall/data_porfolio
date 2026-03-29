/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').del();
  
  await knex('projects').insert([
    {
      id: "ecommerce-dwh",
      index: "01",
      role: "Lead Data Engineer",
      duration: "6 Months",
      domain: "DATA_WAREHOUSE",
      title: "End-to-End E-commerce DWH",
      description: "Unified 15+ fragmented data sources into a centralized Snowflake DWH using DBT and Airflow. Implemented SCD Type 2 tracking for inventory history.",
      kpis: JSON.stringify([
        { label: "Reporting Latency", value: "-95%", icon: "speed" },
        { label: "Data Quality", value: "99.9%", icon: "verified" },
        { label: "Manual Effort", value: "-10hrs/wk", icon: "history" }
      ]),
      detailedAnalysis: JSON.stringify({
        problem: "The legacy e-commerce system suffered from extreme data fragmentation across 15+ isolated sources (ERP, CRM, Shopify, etc.). Reporting was manual, error-prone, and lagged by over 24 hours, making real-time inventory decisions impossible.",
        solution: "I architected a modern Medallion DWH (Bronze/Silver/Gold) on Snowflake. We utilized Airflow for robust orchestration and dbt for modular, test-driven transformations. A key feature was the implementation of dbt-expectations to gate data quality at the source layer.",
        impact: "The new architecture delivered a 95% reduction in reporting latency and eliminated 200+ redundant manual Excel reconciliations. This empowered the executive team with a 'Single Source of Truth' for global margin and inventory performance."
      }),
      githubUrl: "https://github.com/AbrahamCabrera/ecommerce-dwh-dbt",
      githubHighlightUrl: "https://github.com/AbrahamCabrera/ecommerce-dwh-dbt/blob/main/models/fct_orders.sql",
      codeTeaser: "models:\n  - name: fct_orders\n    tests:\n      - dbt_expectations.expect_column_values_to_be_between:\n          column_name: order_date\n          min_value: '2020-01-01'",
      tags: JSON.stringify(["Snowflake", "dbt", "Airflow"]),
      challenges: JSON.stringify([
        { challenge: "Data Fragmentation", solution: "Unified 15+ sources into a centralized ODS layer.", icon: "account_tree" },
        { challenge: "Latency in Ingestion", solution: "Optimized Airflow tasks for incremental loading.", icon: "timer" },
        { challenge: "Data Quality Issues", solution: "Integrated dbt-expectations for automated DQ testing.", icon: "verified" }
      ]),
      mermaidCode: `
        graph LR
          subgraph Sources
            S1[ERP]
            S2[CRM]
            S3[E-comm]
          end
          Sources --> AF[Airflow]
          AF --> SF_RAW[RAW Layer]
          SF_RAW --> DBT[DBT Engine]
          DBT --> SF_GOLD[Gold Layer]
          SF_GOLD --> BI[Power BI]
      `
    },
    {
      id: "activity-streaming",
      index: "02",
      role: "Streaming Architect",
      duration: "4 Months",
      domain: "STREAMING_PIPELINE",
      title: "Real-time Activity Streaming",
      description: "Architected a Kafka-Flink pipeline processing 100k events/sec for real-time personalization engine. Achieved 500ms end-to-end latency.",
      kpis: JSON.stringify([
        { label: "Max Throughput", value: "100k/s", icon: "bolt" },
        { label: "E2E Latency", value: "500ms", icon: "timer" },
        { label: "CTR Increase", value: "+12%", icon: "trending_up" }
      ]),
      detailedAnalysis: JSON.stringify({
        problem: "The previous batch-based recommendation engine could only reflect user behavior from the prior day. This lack of real-time context led to low engagement and missed cross-sell opportunities during active sessions.",
        solution: "We deployed a Kafka-Flink pipeline that processes user events (clicks, views, carts) in real-time. By leveraging RocksDB state backends and custom watermark strategies, we maintained sub-second stateful consistency across ultra-high throughput streams.",
        impact: "Deployment of this real-time infrastructure directly powered the 'Dynamic Carousel,' resulting in a 12% increase in Click-Through Rate (CTR) and an immediate boost in per-session conversion metrics."
      }),
      githubUrl: "https://github.com/AbrahamCabrera/activity-streaming-flink",
      githubHighlightUrl: "https://github.com/AbrahamCabrera/activity-streaming-flink/blob/main/src/main/java/Processor.java",
      codeTeaser: "public void processElement(UserEvent event, Context ctx) {\n    ValueState<Profile> state = getRuntimeContext().getState(desc);\n    Profile p = state.value();\n    p.update(event);\n    state.update(p);\n}",
      tags: JSON.stringify(["Kafka", "Flink", "Java"]),
      challenges: JSON.stringify([
        { challenge: "High Throughput Ingestion", solution: "Implemented clustered Kafka, partitioned topics, optimized configs.", icon: "hub" },
        { challenge: "State Management", solution: "Utilized Flink's RocksDB backend, incremental checkpointing.", icon: "query_stats" },
        { challenge: "Schema Evolution", solution: "Adopted Avro schemas with Confluent Schema Registry.", icon: "schema" }
      ]),
      mermaidCode: `
        graph TD
          UA[User Activity] --> |100k ev/s| KAFKA[Kafka Cluster]
          KAFKA --> |Stream| FLINK[Flink Logic]
          subgraph Flink Cluster
            FLINK --> |Windowing| ST[State]
            ST --> |Low Latency| EN[Engine]
          end
          EN --> |Update| DB[Profile Store]
      `
    },
    {
      id: "financial-ingestion",
      index: "03",
      role: "Backend Engineer",
      duration: "5 Months",
      domain: "FINANCIAL_INGESTION",
      title: "Automated Financial Ingestion",
      description: "Secure, compliant ingestion engine for banking transactions. Automated 100% of audit logging and PII masking protocols.",
      kpis: JSON.stringify([
        { label: "Audit Coverage", value: "100%", icon: "security" },
        { label: "Manual Effort", value: "0h/wk", icon: "timer_off" },
        { label: "Ingestion Speed", value: "15min", icon: "rocket" }
      ]),
      detailedAnalysis: JSON.stringify({
        problem: "Banking transactions were being ingested via sensitive manual SFTP processes. Compliance teams were overwhelmed with 10+ hours a week of manual PII audits and documentation requirements.",
        solution: "I developed a secure serverless ingestion engine using AWS Glue and Python. We automated PII masking via SHA-256 hashing at the landing zone and implemented immutable S3 audit logs using AWS KMS for encryption-at-rest.",
        impact: "The system successfully passed a Tier-1 banking audit with zero non-compliance findings. Manual audit effort was eliminated entirely, and data ingestion frequency was increased from daily to 15-minute intervals."
      }),
      githubUrl: "https://github.com/AbrahamCabrera/financial-ingestion-aws",
      githubHighlightUrl: "https://github.com/AbrahamCabrera/financial-ingestion-aws/blob/main/glue_job.py",
      codeTeaser: "def mask_pii(df, columns):\n    for col in columns:\n        df = df.withColumn(col, sha2(df[col], 256))\n    return df",
      tags: JSON.stringify(["Python", "AWS Glue", "S3"]),
      challenges: JSON.stringify([
        { challenge: "PII Security", solution: "Applied KMS encryption and automated PII masking in-transit.", icon: "lock" },
        { challenge: "Peak Scalability", solution: "Dynamic Glue worker allocation based on partition size.", icon: "dynamic_feed" },
        { challenge: "Audit Compliance", solution: "Automated audit logs to immutable S3 bucket.", icon: "history_edu" }
      ]),
      mermaidCode: `
        graph LR
          BANK[Banking API] --> |SFTP| S3_IN[S3 Landing]
          subgraph AWS Layer
            S3_IN --> GLUE[AWS Glue]
            GLUE --> |Masking| KMS[Security Hub]
          end
          GLUE --> |Parquet| S3_GOLD[Analytics Ready]
      `
    },
    {
      id: "quality-framework",
      index: "04",
      role: "Data Quality Lead",
      duration: "3 Months",
      domain: "QUALITY_FRAMEWORK",
      title: "Scalable Data Quality Framework",
      description: "Built a custom Python framework for proactive data validation using Great Expectations. Decreased upstream bugs by 75%.",
      kpis: JSON.stringify([
        { label: "Bug Reduction", value: "-75%", icon: "bug_report" },
        { label: "Detection Time", value: "<5min", icon: "alarm" },
        { label: "Validation Points", value: "500+", icon: "check_circle" }
      ]),
      detailedAnalysis: JSON.stringify({
        problem: "Upstream data changes were frequently breaking downstream dashboards, causing executive 'trust lack' in reports. Bugs often went undetected for 24+ hours until a business user reported an anomaly.",
        solution: "We shifted 'Quality to the Left' by integrating Great Expectations into our CI/CD and Airflow pipelines. This created an automated gateway where all ingestion must pass 500+ granular validation points before loading.",
        impact: "Upstream bug frequency dropped by 75%. Automated 'Data Docs' now serve as a living contract between engineers and stakeholders, restoring organizational trust in the analytics layer."
      }),
      githubUrl: "https://github.com/AbrahamCabrera/data-quality-framework",
      githubHighlightUrl: "https://github.com/AbrahamCabrera/data-quality-framework/blob/main/dq_checks.py",
      codeTeaser: "results = checkpoint.run(run_name='manual')\nif not results.success:\n    slack.notify('DQ Failure: Gold Layer')",
      tags: JSON.stringify(["Python", "GX", "Slack API"]),
      challenges: JSON.stringify([
        { challenge: "Siloed Validations", solution: "Centralized GX checkpoint registry across all pipelines.", icon: "source" },
        { challenge: "Late Bug Detection", solution: "Pre-deployment validation scripts for CI/CD integration.", icon: "bug_report" },
        { challenge: "Reporting Gaps", solution: "Real-time Slack alerting with failure logs.", icon: "mark_chat_unread" }
      ]),
      mermaidCode: `
        graph TD
          PIPE[Pipeline] --> |Check Point| GX[Great Expectations]
          subgraph DQ Hub
            GX --> |Validate| JSON[JSON Rules]
            JSON --> |Pass/Fail| RULES[Logic Gate]
          end
          RULES --> |Fail| SLACK[Slack Alert]
          RULES --> |Pass| LOAD[Ready]
      `
    }
  ]);
};
