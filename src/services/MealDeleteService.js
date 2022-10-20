const AppError = require("../utils/AppError");

class MealDeleteService {
  constructor(mealRepository) {
    this.mealRepository = mealRepository;
  }

  async execute(id) {
    const existingMeal = await this.mealRepository.findById(id);

    if (!existingMeal) {
      throw new AppError("Prato não encontrado.");
    }

    await this.mealRepository.delete(id);

    return;
  }

}

module.exports = MealDeleteService