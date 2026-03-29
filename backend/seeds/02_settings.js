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
      footer_text: "© 2026 Abraham Cabrera. Engineered for Precision."
    }
  ]);
};
