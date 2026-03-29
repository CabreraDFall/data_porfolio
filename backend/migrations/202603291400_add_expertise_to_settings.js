exports.up = function(knex) {
  return knex.schema.table('settings', (table) => {
    table.text('expertise').defaultTo(JSON.stringify([
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
    ]));
  });
};

exports.down = function(knex) {
  return knex.schema.table('settings', (table) => {
    table.dropColumn('expertise');
  });
};
