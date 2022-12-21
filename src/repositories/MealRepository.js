const knex = require('../database/knex');

class MealRepository {
    async create({ name, ingredients, price, description }) {

        const mealId = await knex('meals').insert({ name, price, description });

        if (ingredients) {
            ingredients.map(async (ingredient) => {
                await knex('ingredients').insert({
                    name: ingredient,
                    meal_id: mealId
                });
            });

        }

        return mealId;
    }

    // async createPicture(picture) {
    // }

    async findByName(name) {
        const existingMeal = await knex('meals').where({ name }).first();

        return existingMeal;
    }

    async selectAll() {
        const allMeals = await knex('meals').select();

        return allMeals;
    }

    async findById(id) {
        const meal = await knex('meals').where({ id }).first();

        return meal;
    }

    // update
    async updateText(mealNewInfoEntry) {
        const id = Number(mealNewInfoEntry.id);

        const previousMeal = await knex('meals').where({ id });

        const name = mealNewInfoEntry.name ?? previousMeal.name;
        const price = mealNewInfoEntry.price ?? previousMeal.price;
        const description = mealNewInfoEntry.description ?? previousMeal.description;

        // const ingredients = mealNewInfoEntry.ingredients ?? previousMeal.ingredients;

        // se houver ingredientes:
        // * verificar se são iguais
        //      * se sim: não faz nada
        //      * senão: 
        //          * verifica se foi adicionado (filtrar os que não são iguais) e cria o novo
        //          * E
        //          * verifica se foi excluído e eclui o existente

        // if (ingredients) {
        //     ingredients.map(async (ingredient) => {
        //         await knex('ingredients').insert({
        //             name: ingredient,
        //             meal_id: mealId
        //         });
        //     });

        // }



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