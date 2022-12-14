const knex = require('../database/knex');

class OrderRepository {
    async create({ user_id, status, price }) {
        const order = await knex('orders').insert({
            user_id,
            status,
            price,
            created_at: knex.fn.now()
        });

        return order;
    }

    async findById(id) {
        const order = await knex('orders').where({ id }).first();

        return order;
    }

    async update(orderUpdate) {
        const { order_id, price } = orderUpdate;

        const updatedOrder = await knex('orders').update({ price }).where({ id: order_id });

        return updatedOrder;
    }

    async updateStatus({ status, id }) {
        const updatedStatus = await knex('orders').update({ status }).where({ id });

        return updatedStatus;
    }

    async findUserOrders(user_id) {
        const allOrdersWithInfo = knex('orders').select([
            'id',
            'status',
            'price',
            'updated_at'
        ]).where({ user_id });

        return allOrdersWithInfo;
    }

    async findAllOrders() {
        const allOrdersWithInfo = knex('orders').select([
            'id',
            'status',
            'created_at',
            'user_id'
        ]).orderBy('id', 'desc');

        return allOrdersWithInfo;
    }

}

module.exports = OrderRepository;