/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('settings').del();
  
  await knex('settings').insert([
    {
      id: 1,
      name: "Abraham Cabrera",
      role: "Data Architect",
      browser_title: "Abraham Cabrera | Data Architect Portfolio",
      hero_tagline: "Engineering high-throughput, fault-tolerant ecosystems that transform raw complexity into strategic intelligence.",
      skills: JSON.stringify(['Python', 'SQL', 'Spark', 'Airflow', 'Snowflake', 'DWH', 'Streaming']),
      github_url: "https://github.com/AbrahamCabrera",
      linkedin_url: "#",
      system_status: "Optimal",
      footer_text: "© 2026 Abraham Cabrera. Engineered for Precision.",
      expertise: JSON.stringify([
        {
          title: "Data Lakehouse",
          description: "Architecting unified storage & transformation layers on Snowflake/S3 for high-performance analytics.",
          icon: "database_schema",
          color: "from-primary/20",
        },
        {
          title: "Real-time Streaming",
          description: "Low-latency streaming pipelines with Kafka & Flink (100k+ events/sec).",
          icon: "bolt",
          color: "from-secondary/20",
        },
        {
          title: "Automated DQ",
          description: "Shifting 'Quality to the Left' with integrated Great Expectations & custom CI/CD gates.",
          icon: "verified",
          color: "from-tertiary/20"
        },
        {
          title: "Cloud Native",
          description: "Infrastructure as Code and serverless processing on AWS (Glue, Lambda, KMS).",
          icon: "cloud_done",
          color: "from-primary/20"
        }
      ])
    }
  ]);
};
