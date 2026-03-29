exports.up = function(knex) {
  return knex.schema.table('settings', (table) => {
    table.string('cv_url').defaultTo('#');
  });
};

exports.down = function(knex) {
  return knex.schema.table('settings', (table) => {
    table.dropColumn('cv_url');
  });
};
