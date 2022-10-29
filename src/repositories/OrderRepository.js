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
        const order = await knex("orders").where({ id }).first();

        return order;
    }

    async update(orderUpdate) {
        const { order_id, price } = orderUpdate;

        // if (status) {
        //     const updatedOrder = await knex('orders').update({ status, price }).where({ id: order_id });

        //     return updatedOrder;
        // }

        const updatedOrder = await knex('orders').update({ price }).where({ id: order_id });

        return updatedOrder;
    }

    // async listAll() {
    //     const allOrders = await knex('orders')
    //         .select([
    //             'orders.id',
    //             'orders.status',
    //             'orders.created_at',
    //             'order_items.quantity'
    //         ])
    //         .innerJoin('order_items', 'order_items.order_id', 'orders.id');


    //     return allOrders;
    // }

}

module.exports = OrderRepository;