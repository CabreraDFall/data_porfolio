exports.up = function(knex) {
  return knex.schema.createTable('settings', (table) => {
    table.increments('id').primary();
    table.string('name').defaultTo('Abraham Cabrera');
    table.string('role').defaultTo('Data Architect');
    table.string('browser_title').defaultTo('Abraham Cabrera | Data Architect Portfolio');
    table.text('hero_tagline').defaultTo('Engineering high-throughput, fault-tolerant ecosystems that transform raw complexity into strategic intelligence.');
    table.text('skills').defaultTo(JSON.stringify(['Python', 'SQL', 'Spark', 'Airflow', 'Snowflake', 'DWH', 'Streaming']));
    table.string('github_url').defaultTo('https://github.com/AbrahamCabrera');
    table.string('linkedin_url').defaultTo('#');
    table.string('system_status').defaultTo('Optimal');
    table.string('footer_text').defaultTo('© 2026 Abraham Cabrera. Engineered for Precision.');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('settings');
};
