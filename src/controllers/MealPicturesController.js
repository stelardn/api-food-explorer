const MealRepository = require('../repositories/MealRepository');
const mealRepository = new MealRepository();

const DiskStorage = require('../providers/DiskStorage');
const AppError = require('../utils/AppError');
const diskStorage = new DiskStorage();

class MealPicturesController {
    async updatePicture(request, response) {
        const { meal_id } = request.params;
        const mealPicFilename = request.file.filename;

        const meal = await mealRepository.findById(meal_id);

        if (!meal) {
            throw new AppError('Prato não encontrado.');
        }

        if (meal.picture) {
            await diskStorage.deleteFile(meal.picture);
        }

        const filename = await diskStorage.saveFile(mealPicFilename);

        await mealRepository.updatePicture({ filename, id: meal_id });

        return response.json(filename);

    }
}

module.exports = MealPicturesController;