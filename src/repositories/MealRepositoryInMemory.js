class MealRepositoryInMemory {
    meals = [
        {
            id: 1,
            name: 'Salada Caesar',
            ingredients: ['frango', 'alface', 'tomate'],
            price: 24,
            description: 'Alface, tomate, tiras de frango, torradas em cubos e molho Caesar.'
        },
        {
            id: 2,
            name: 'Salada Mediterrânea',
            ingredients: ['alface', 'tomate cereja', 'palmito', 'rúcula'],
            price: 24,
            description: 'Alface, tomate, tiras de frango, torradas em cubos e molho Caesar.'
        },

    ];

    async create({ name, ingredients, price, description }) {
        const meal = {
            id: Math.floor(Math.random() * 1000) + 1,
            name,
            ingredients,
            price,
            description
        };

        this.meals.push(meal);

        return meal;
    }

    // async createPicture(picture) {
    // }

    async findByName(name) {
        const existingMeal = this.meals.find(meal => meal.name === name);

        return existingMeal;
    }

    async selectAll() {
        const allMeals = this.meals;

        return { allMeals };
    }

    async findById(id) {
        const meal = this.meals.find(meal => meal.id === Number(id));

        return meal;
    }

    // update
    async updateText(mealNewInfoEntry) {
        const id = Number(mealNewInfoEntry.id);

        const previousMeal = this.meals.find(meal => meal.id === id);
        const mealIndex = this.meals.indexOf(previousMeal);

        let newMeal = { id };

        newMeal.name = mealNewInfoEntry.name ?? previousMeal.name;
        newMeal.ingredients = mealNewInfoEntry.ingredients ?? previousMeal.ingredients;
        newMeal.price = mealNewInfoEntry.price ?? previousMeal.price;
        newMeal.description = mealNewInfoEntry.description ?? previousMeal.description;

        this.meals[mealIndex] = newMeal;

        return this.meals[mealIndex];
    }

    // async updatePicture(picture) {

    // }

    async delete(id) {
        this.meals = this.meals.filter(meal => meal.id !== Number(id));

        console.log(this.meals);

        return;
    }




}

module.exports = MealRepositoryInMemory;