
exports.up = function(knex) {
  return knex.schema.createTable('cities', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('population')
    table.string('drinking')
    table.string('food')
    table.string('cats')
    table.string('crime')
    table.string('img')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cities')
};
