const AppError = require('../utils/AppError');

class MealUpdateService {
    constructor(mealRepository, ingredientsRepository) {
        this.mealRepository = mealRepository;
        this.ingredientsRepository = ingredientsRepository;
    }


    async executeTextUpdate(mealNewInfo) {
        const { id } = mealNewInfo;
        const mealExists = await this.mealRepository.findById(id);

        if (!mealExists) {
            throw new AppError('Prato não encontrado.');
        }

        if (mealNewInfo.name) {
            const mealWithThisName = await this.mealRepository.findByName(mealNewInfo.name);

            if (mealWithThisName) {
                const nameUnavailable = mealWithThisName.id !== id;

                if (nameUnavailable) {
                    throw new AppError('Este nome não está disponível.');
                }
            }

        }

        const currentIngredients = await this.ingredientsRepository.findByMealId(id);

        if (mealNewInfo.ingredients) {

            const currentIngredientsNames = currentIngredients.map(ingredient => ingredient.name) ?? [];

            const ingredientsToCreate = mealNewInfo.ingredients.filter(requestIngredient => !currentIngredientsNames.includes(requestIngredient));

            const ingredientsToRemove = currentIngredients.filter(currentIngredient => !mealNewInfo.ingredients.includes(currentIngredient.name));

            if (ingredientsToCreate) {
                ingredientsToCreate.map(async (ingredient) => {
                    await this.ingredientsRepository.create(ingredient, id);
                });

            }

            if (ingredientsToRemove) {
                ingredientsToRemove.map(async (ingredient) => {
                    await this.ingredientsRepository.delete(ingredient.id);
                });
            }
        }

        const updatedMeal = await this.mealRepository.updateText({ id, ...mealNewInfo });

        return updatedMeal;
    }
}

module.exports = MealUpdateService;