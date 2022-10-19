const MealRepositoryInMemory = require("../repositories/MealRepositoryInMemory");
const mealRepository = new MealRepositoryInMemory();
const MealCreateService = require("../services/MealCreateService");
const mealCreateService = new MealCreateService(mealRepository);
const MealUpdateService = require("../services/MealUpdateService");
const mealUpdateService = new MealUpdateService(mealRepository);

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
    const { id } = request.query;

    const { name, ingredients, price, description } = request.body;

    const newMeal = await mealUpdateService.executeTextUpdate({ id, name, ingredients, price, description });

    return response.json({ newMeal });
  }
}

module.exports = MealsController;