const knex = require('../database/knex');
const { noSpecialCharacters } = require('../utils/noSpecialCharacters');

class MealRepository {
    async create({ name, ingredients, price, description, type }) {

        const mealId = await knex('meals').insert({ name, price, description, type });

        if (ingredients) {
            ingredients.map(async (ingredient) => {
                await knex('ingredients').insert({
                    name: ingredient,
                    meal_id: mealId,
                    picture: `${noSpecialCharacters(ingredient)}.png`
                });
            });

        }

        return mealId;
    }

    async findByName(name) {
        const existingMeal = await knex('meals').where({ name }).first();

        return existingMeal;
    }

    async selectAll(filterName) {
        const filter = filterName ?? '';

        const allMeals = await knex('meals')
            .select(
                [
                    'meals.id',
                    'meals.name',
                    'meals.price',
                    'meals.description',
                    'meals.picture',
                    'meals.type',
                ]
            )
            .innerJoin('ingredients', 'meals.id', 'ingredients.meal_id')
            .whereLike('meals.name', `%${filter}%`)
            .orWhereLike('ingredients.name', `%${filter}%`)
            .orderBy('meals.name')
            .groupBy('meals.id');

        return allMeals;
    }

    async findById(id) {
        const meal = await knex('meals').where({ id }).first();

        return meal;
    }

    async updateText(mealNewInfoEntry) {
        const id = Number(mealNewInfoEntry.id);

        const previousMeal = await knex('meals').where({ id });

        const name = mealNewInfoEntry.name ?? previousMeal.name;
        const price = mealNewInfoEntry.price ?? previousMeal.price;
        const description = mealNewInfoEntry.description ?? previousMeal.description;

        const meal = await knex('meals')
            .update({
                name,
                price,
                description,
                updated_at: knex.fn.now()
            })
            .where({ id });

        return meal;

    }

    async updatePicture({ filename, id }) {
        await knex('meals').update({ picture: filename }).where({ id });

        return;
    }

    async delete(id) {
        await knex('meals').delete().where({ id: Number(id) });

        return;
    }

}

module.exports = MealRepository;