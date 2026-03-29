exports.up = function(knex) {
  return knex.schema.table('settings', (table) => {
    table.string('about_subtitle').defaultTo('Código con propósito');
    table.text('about_bio').defaultTo('Creo que el mejor código es el que resuelve problemas reales sin añadir complejidad innecesaria. Mi filosofía: elegancia en la simplicidad. Cada proyecto es una oportunidad de fusionar creatividad con ingeniería. Me especializo en crear experiencias digitales que no solo funcionan perfectamente, sino que inspiran. Estoy en la etapa de aprendizaje y crecimiento constante, y disfruto cada desafío que me propone la tecnología.');
    table.text('about_quote').defaultTo('"El único modo de hacer un gran trabajo es amar lo que haces."');
    table.string('about_quote_author').defaultTo('Steve Jobs');
    table.string('about_image_url').defaultTo('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop');
  });
};

exports.down = function(knex) {
  return knex.schema.table('settings', (table) => {
    table.dropColumn('about_subtitle');
    table.dropColumn('about_bio');
    table.dropColumn('about_quote');
    table.dropColumn('about_quote_author');
    table.dropColumn('about_image_url');
  });
};
