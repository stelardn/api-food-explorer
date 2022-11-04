const MealRepository = require('../repositories/MealRepository');
const mealRepository = new MealRepository();
const MealCreateService = require('../services/MealCreateService');
const mealCreateService = new MealCreateService(mealRepository);
const MealUpdateService = require('../services/MealUpdateService');
const mealUpdateService = new MealUpdateService(mealRepository);
const MealDeleteService = require('../services/MealDeleteService');
const mealDeleteService = new MealDeleteService(mealRepository);

class MealsController {
    async create(request, response) {
        const { name, ingredients, price, description, picture } = request.body;

        const meal = await mealCreateService.execute({ name, ingredients, price, description, picture });

        return response.status(201).json({ meal });

    }

    async index(request, response) {
        const meals = await mealRepository.selectAll();

        return response.json({ meals });
    }

    async show(request, response) {
        const { id } = request.params;

        const meal = await mealRepository.findById(id);

        return response.json({ meal });
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