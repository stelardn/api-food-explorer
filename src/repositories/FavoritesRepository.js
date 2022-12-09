const knex = require('../database/knex');

class FavoritesRepository {
    async create({ meal_id, user_id }) {
        await knex('favorites').insert({ meal_id, user_id });

        return;
    }

    async indexUserFavorites(user_id) {
        const userFavorites = await knex('favorites')
            .select([
                'meals.name',
                'meals.picture',
                'meals.price',
                'favorites.meal_id',
                'favorites.id'
            ])
            .where({ user_id })
            .innerJoin('meals', 'meals.id', 'favorites.meal_id');

        return userFavorites;
    }

    async findExistingFavorite({ meal_id, user_id }) {
        const existingFavorite = await knex('favorites').where({ meal_id, user_id }).first();

        return existingFavorite;
    }

    async remove(id) {
        return await knex('favorites').delete().where({ meal_id: id });
    }
}

module.exports = FavoritesRepository;