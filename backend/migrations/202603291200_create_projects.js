exports.up = function(knex) {
  return knex.schema.createTable('projects', (table) => {
    table.string('id').primary();
    table.string('index');
    table.string('role');
    table.string('duration');
    table.string('domain');
    table.string('title');
    table.text('description');
    // Using JSON strings for complex arrays/objects for SQLite compatibility
    table.text('kpis'); // Array of {label, value, icon}
    table.text('detailedAnalysis'); // Object {problem, solution, impact}
    table.string('githubUrl');
    table.string('githubHighlightUrl');
    table.text('codeTeaser');
    table.text('tags'); // Array of strings
    table.text('challenges'); // Array of {challenge, solution, icon}
    table.text('mermaidCode');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects');
};
