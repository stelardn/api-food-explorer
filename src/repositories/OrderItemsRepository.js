const knex = require('../database/knex');

class OrderItemsRepository {
    async addItem({ meal_id, quantity, order_id }) {
        const addedItem = await knex("order_items").insert({ meal_id, quantity, order_id });

        return addedItem;
    }

    async findItemInOrderByMealId({ meal_id, order_id }) {
        const itemIsInOrder = await knex('order_items').where({ meal_id, order_id }).first();

        return itemIsInOrder;
    }

    async updateExistingItemQuantity({ meal_id, quantity, order_id }) {
        const updatedItem = await knex('order_items').update({ quantity }).where({ meal_id, order_id });

        return updatedItem;
    }

    // retornar mealid, preço, quantidade
    async findOrderItemsWithPriceByOrderId(order_id) {
        const orderItems = await knex('order_items')
            .select([
                'meals.id',
                'meals.name',
                'meals.price',
                'order_items.quantity',
            ])
            .where({ order_id })
            .innerJoin('meals', 'meals.id', 'order_items.meal_id');


        return orderItems;
    }

    async findAllOrders() {
        const allOrdersWithInfo = knex('orders').select([
            'id',
            'status',
            'created_at'
        ]);

        return allOrdersWithInfo;
    }


    // listar todas as informações E o order_id
    // depois usar o map para pegar todos os itens onde o order_id == order.id
    // async findOrderItemsNamesByOrderId(order_id) {
    //     const orderNames = await knex('order_items')
    //         .select([
    //             'meals.name',
    //             'meal.price',
    //             'order_items.quantity',
    //         ]).where({ order_id })
    //         .innerJoin('meals', 'meals.id', 'order_items.meal_id');

    //     return orderNames;
    // }

    // async findOrderItemsWithInfo(order_id) {
    //     const allOrderItemsWithInfo = await knex('order_items')
    //         .select([
    //             'meals.name',
    //             'meals.price',
    //             'order_items.quantity',
    //             'orders.price'
    //         ])
    //         .where({ order_id })
    //         .innerJoin('orders', 'orders.id', 'order_items.order_id')
    //         .innerJoin('meals', 'meals.id', 'order_items.meal_id')
    //     // .orderBy('id');

    //     return allOrderItemsWithInfo;
    // }

    async findOrderItemsAndOrderInfo() {
        const allOrderItemsWithInfo = await knex('order_items')
            .select([
                'orders.status',
                'orders.id',
                'order_items.quantity',
                'meals.name',
                'orders.created_at'
            ])
            .innerJoin('orders', 'orders.id', 'order_items.order_id')
            .innerJoin('meals', 'meals.id', 'order_items.meal_id')
            .orderBy('orders.id');

        return allOrderItemsWithInfo;
    }

}

module.exports = OrderItemsRepository;
// refactor: new (order)