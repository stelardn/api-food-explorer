const AppError = require('../utils/AppError');

class MealCreateService {
    constructor(mealRepository) {
        this.mealRepository = mealRepository;
    }

    async execute(data) {
        const { name, ingredients, price, description, picture } = data;

        if (!name || !ingredients || !price || !description) {
            throw new AppError('Preencha todos os campos.');
        }

        const existingMeal = await this.mealRepository.findByName(name);

        if (existingMeal) {
            throw new AppError('Já existe um prato cadastrado com esse nome. Para evitar confusão de pedidos, informe um nome diferente.');
        }

        let meal = this.mealRepository.create({ name, ingredients, price, description });

        if (picture) {
            const picture = this.mealRepository.createPicture(picture);

            meal = {
                ...meal,
                picture
            };
        }


        return meal;

    }
}

module.exports = MealCreateService;