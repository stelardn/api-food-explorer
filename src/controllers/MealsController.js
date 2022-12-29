const MealRepository = require('../repositories/MealRepository');
const mealRepository = new MealRepository();
const IngredientsRepository = require('../repositories/IngredientsRepository');
const ingredientsRepository = new IngredientsRepository();

const MealCreateService = require('../services/MealCreateService');
const mealCreateService = new MealCreateService(mealRepository);
const MealUpdateService = require('../services/MealUpdateService');
const mealUpdateService = new MealUpdateService(mealRepository, ingredientsRepository);
const MealDeleteService = require('../services/MealDeleteService');
const mealDeleteService = new MealDeleteService(mealRepository);

const FavoritesRepository = require('../repositories/FavoritesRepository');
const favoritesRepository = new FavoritesRepository;


class MealsController {
    async create(request, response) {
        const { name, ingredients, price, description, picture, type } = request.body;

        if (!type) {
            request.body.type = 'Pratos principais';
        }

        const meal = await mealCreateService.execute({ name, ingredients, price, description, picture, type });

        return response.status(201).json({ meal });

    }

    async index(request, response) {
        const user_id = request.user.id;

        const { filter } = request.query;

        const meals = await mealRepository.selectAll(filter);

        const userFavorites = await favoritesRepository.indexUserFavorites(user_id);

        const mealsWithFavorites = meals.map(meal => {

            const mealWithFavorite = { ...meal }
            const isFavorite = userFavorites.filter(favorite => favorite.meal_id === meal.id);

            if (isFavorite[0]) {
                mealWithFavorite.isFavorite = true;
            } else {
                mealWithFavorite.isFavorite = false;
            }

            return mealWithFavorite;
        })

        return response.json(mealsWithFavorites);
    }

    async show(request, response) {
        const user_id = request.user.id;

        const { id } = request.params;

        const meal = await mealRepository.findById(id);

        const ingredients = await ingredientsRepository.findByMealId(id);

        const isFavorite = await favoritesRepository.findExistingFavorite({ meal_id: id, user_id })

        const mealWIthIngredients = {
            ...meal,
            ingredients,
            isFavorite: isFavorite ? true : false
        }

        return response.json(mealWIthIngredients);
    }

    async update(request, response) {
        const { id } = request.params;

        const update = request.body;

        const newMeal = await mealUpdateService.executeTextUpdate({ id, ...update });

        return response.json({ newMeal });
    }

    async delete(request, response) {
        const { id } = request.params;

        await mealDeleteService.execute(id);

        return response.json({});
    }
}

module.exports = MealsController;