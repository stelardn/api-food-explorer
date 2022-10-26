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

}

module.exports = OrderItemsRepository;
// refactor: new (order)