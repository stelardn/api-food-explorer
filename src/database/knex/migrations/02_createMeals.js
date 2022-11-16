exports.up = knex => knex.schema.createTable('meals', table => {
    table.increments('id');
    table.text('name');
    table.text('description');
    table.float('price', 2);
    table.text('picture');

    table.timestamp('created_at').default(knex.fn.now());
    table.timestamp('updated_at').default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('meals');