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
      cv_url: "#",
      system_status: "Optimal",
      footer_text: "© 2026 Abraham Cabrera. Engineered for Precision.",
      about_subtitle: "Código con propósito",
      about_bio: "Creo que el mejor código es el que resuelve problemas reales sin añadir complejidad innecesaria. Mi filosofía: elegancia en la simplicidad. Cada proyecto es una oportunidad de fusionar creatividad con ingeniería. Me especializo en crear experiencias digitales que no solo funcionan perfectamente, sino que inspiran. Estoy en la etapa de aprendizaje y crecimiento constante, y disfruto cada desafío que me propone la tecnología.",
      about_quote: '"El único modo de hacer un gran trabajo es amar lo que haces."',
      about_quote_author: "Steve Jobs",
      about_image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop",
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
