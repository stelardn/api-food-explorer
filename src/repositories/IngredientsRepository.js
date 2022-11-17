const knex = require('../database/knex');

class IngredientsRepository {
    async findByMealId(meal_id) {
        const ingredients = await knex('ingredients').where({ meal_id });

        return ingredients;
    }
}

module.exports = IngredientsRepository;