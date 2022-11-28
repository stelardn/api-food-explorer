exports.up = knex => knex.schema.createTable('order_items', table => {
    table.increments('id');
    table.integer('order_id').references('id').inTable('orders').onDelete('CASCADE');
    table.integer('meal_id').references('id').inTable('meals').onDelete('CASCADE');
    table.integer('quantity');
});

exports.down = knex => knex.schema.dropTable('order_items');
