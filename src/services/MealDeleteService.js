const DiskStorage = require('../providers/DiskStorage');
const diskStorage = new DiskStorage();

const AppError = require('../utils/AppError');

class MealDeleteService {
    constructor(mealRepository) {
        this.mealRepository = mealRepository;
    }

    async execute(id) {
        const existingMeal = await this.mealRepository.findById(id);

        if (!existingMeal) {
            throw new AppError('Prato não encontrado.');
        }

        DiskStorage
        if (existingMeal.picture) {
            await diskStorage.deleteFile(existingMeal.picture);
        }

        await this.mealRepository.delete(id);

        return;
    }

}

module.exports = MealDeleteService;