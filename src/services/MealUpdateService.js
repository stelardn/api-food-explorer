const AppError = require("../utils/AppError");

class MealUpdateService {
  constructor(mealRepository) {
    this.mealRepository = mealRepository;
  }

  async executePictureUpdate(picture) {

  }

  async executeTextUpdate(mealNewInfo) {
    const { id } = mealNewInfo;
    const mealExists = await this.mealRepository.findById(id);

    if (!mealExists) {
      throw new AppError("Prato não encontrado.");
    }

    if (mealNewInfo.name) {
      const mealWithThisName = await this.mealRepository.findByName(mealNewInfo.name);

      if (mealWithThisName) {
        const nameUnavailable = mealWithThisName.id !== id;

        if (nameUnavailable) {
          throw new AppError("Este nome não está disponível.")
        }
      }

    }

    const updatedMeal = await this.mealRepository.updateText({ id, ...mealNewInfo });

    return updatedMeal;
  }
}

module.exports = MealUpdateService;