const knex = require('../database/knex');


class UserRepository {

    async create({ name, email, password }) {
        const user = await knex('users').insert({ name, email, password });

        return user;
    }

    async findByEmail(email) {
        const user = await knex('users').where({ email }).first();

        return user;
    }

    async findById(id) {
        const user = await knex('users').where({ id }).first();

        return user;
    }
}

module.exports = UserRepository;