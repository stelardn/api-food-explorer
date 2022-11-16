exports.up = knex => knex.schema.createTable('meal_ingredients', table => {
    table.increments('id');
    table.integer('ingredient_id').references('id').inTable('ingredients').onDelete('CASCADE');
    table.integer('meal_id').references('id').inTable('meals').onDelete('CASCADE');
});

exports.down = knex => knex.schema.dropTable('meal_ingredients');
