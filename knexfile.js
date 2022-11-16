const { resolve } = require('path');

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: resolve(__dirname, 'src', 'database', 'database.db')
        },
        pool: {
            afterCreate: (connection, callback) => connection.run('PRAGMA foreign_keys = ON', callback)
        },
        migrations: {
            directory: resolve(__dirname, 'src', 'database', 'knex', 'migrations')
        },
        seeds: {
            directory: resolve(__dirname, 'src', 'database', 'knex', 'seeds')
        },
        useNullAsDefault: true,
    }

};
