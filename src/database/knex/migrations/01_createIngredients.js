exports.up = knex => knex.schema.createTable('ingredients', table => {
    table.increments('id');
    table.text('name');
    table.text('picture');
});

exports.down = knex => knex.schema.dropTable('ingredients');
