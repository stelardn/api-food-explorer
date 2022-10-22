const knex = require('../database/knex');

class OrderRepository {
    async create({user_id, status, price}) {
        const order = await knex('orders').insert({
            user_id,
            status,
            price,
            created_at: knex.fn.now()
        });

        return order;
    }
}

module.exports = OrderRepository;