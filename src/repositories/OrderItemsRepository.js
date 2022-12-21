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
            'created_at',
            'user_id'
        ]);

        return allOrdersWithInfo;
    }

    async findOrderItemsAndOrderInfo() {
        const allOrderItemsWithInfo = await knex('order_items')
            .select([
                'orders.id',
                'order_items.quantity',
                'meals.name',
            ])
            .innerJoin('orders', 'orders.id', 'order_items.order_id')
            .innerJoin('meals', 'meals.id', 'order_items.meal_id')
            .orderBy('orders.id');

        return allOrderItemsWithInfo;
    }

    async findUserOrderItemsAndOrderInfo(user_id) {
        const allOrderItemsWithInfo = await knex('order_items')
            .select([
                'orders.id',
                'order_items.quantity',
                'meals.name',
                'meals.price'
            ])
            .innerJoin('orders', 'orders.id', 'order_items.order_id')
            .innerJoin('meals', 'meals.id', 'order_items.meal_id')
            .orderBy('orders.id')
            .where({ user_id });

        return allOrderItemsWithInfo;
    }

    async removeItem(meal_id, order_id) {
        return await knex('order_items').delete().where({ meal_id, order_id });
    }

}

module.exports = OrderItemsRepository;
// refactor: new (order)