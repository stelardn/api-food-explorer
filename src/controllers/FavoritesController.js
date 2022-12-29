const AppError = require('../utils/AppError');

const FavoritesRepository = require('../repositories/FavoritesRepository');
const favoritesRepository = new FavoritesRepository();

class FavoritesController {
    async index(request, response) {
        const user_id = request.user.id;

        const myFavorites = await favoritesRepository.indexUserFavorites(user_id);

        return response.json(myFavorites);
    }

    async create(request, response) {
        const user_id = request.user.id;

        const { meal_id } = request.body;

        const existingFavorite = await favoritesRepository.findExistingFavorite({ meal_id, user_id });

        if (existingFavorite) {
            throw new AppError('O prato já está nos favoritos!')
        }

        await favoritesRepository.create({ meal_id, user_id });

        return response.status(201).json(`Produto adicionado aos favoritos!`)
    }

    async delete(request, response) {
        const { id } = request.params;

        await await favoritesRepository.remove(id);

        return response.json();
    }


}

module.exports = FavoritesController;