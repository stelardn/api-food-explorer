const MealRepositoryInMemory = require("../repositories/MealRepositoryInMemory");
const mealRepository = new MealRepositoryInMemory();
const MealCreateService = require("../services/MealCreateService");
const mealCreateService = new MealCreateService(mealRepository);

class MealsController {
  async create(request, response) {
    const { name, ingredients, price, description, picture } = request.body;

    const meal = await mealCreateService.execute({ name, ingredients, price, description, picture });

    return response.status(201).json({ meal });

  }
}

module.exports = MealsController;