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
                'meals.price',
                'order_items.quantity',
            ])
            .where({ order_id })
            .innerJoin('meals', 'meals.id', 'order_items.meal_id');


        return orderItems;
    }

    // async findOrderItemsNamesByMealId(meal_id) {
    //     const orderNames = await knex('order_items')
    //         .select([
    //             'meals.id',
    //             'meals.name',
    //             'order_items.quantity',
    //         ]).where({ meal_id })
    //         .innerJoin('meals', 'meals.id', 'order_items.meal_id');

    //     return orderNames;
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