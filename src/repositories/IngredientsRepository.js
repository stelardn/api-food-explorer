const knex = require('../database/knex');
const { noSpecialCharacters } = require('../utils/noSpecialCharacters');

class IngredientsRepository {
    async findByMealId(meal_id) {
        const ingredients = await knex('ingredients').where({ meal_id });

        return ingredients;
    }

    async create(name, meal_id) {
        const picture = `${noSpecialCharacters(name)}.png`
        return await knex('ingredients').insert({ name, meal_id, picture });
    }

    async delete(id) {
        return await knex('ingredients').delete().where({ id });
    }
}

module.exports = IngredientsRepository;