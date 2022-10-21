const AppError = require("../utils/AppError");
const IngredientsRepository = require("../repositories/IngredientsRepository");

const ingredientsRepository = new IngredientsRepository();

class IngredientsController {
  async show(request, response) {
    const meal_id = Number(request.query.meal_id);

    const ingredients = await ingredientsRepository.findByMealId(meal_id);

    return response.json(ingredients);
  }
}

module.exports = IngredientsController;