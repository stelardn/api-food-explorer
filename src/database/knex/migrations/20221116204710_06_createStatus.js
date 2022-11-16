exports.up = knex => knex.schema.createTable('status', table => {
    table.increments('id');
    table.text('name');
    table.text('color');
});

exports.down = knex => knex.schema.dropTable('status');