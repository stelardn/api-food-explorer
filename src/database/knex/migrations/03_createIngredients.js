exports.up = knex => knex.schema.createTable('ingredients', table => {
    table.increments('id');
    table.text('name');
    table.integer('meal_id').references('id').inTable('meals').onDelete('CASCADE');
    table.text('picture');
});

exports.down = knex => knex.schema.dropTable('ingredients');
