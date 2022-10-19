const AppError = require("../utils/AppError");

class MealUpdateService {
  constructor(mealRepository) {
    this.mealRepository = mealRepository;
  }

  async executePictureUpdate(picture) {

  }

  async executeTextUpdate(mealNewInfo) {
    const { id } = mealNewInfo;
    const mealExists = this.mealRepository.findById(id);

    if (!mealExists) {
      throw new AppError("Prato não encontrado.");
    }

    const updatedMeal = await this.mealRepository.updateText({ id, ...mealNewInfo });

    return updatedMeal;
  }
}

module.exports = MealUpdateService;