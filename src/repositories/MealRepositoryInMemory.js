class MealRepositoryInMemory {
  meals = [
    {
      name: "Salada Caesar",
      ingredients: ["frango", "alface", "tomate"],
      price: 24,
      description: "Alface, tomate, tiras de frango, torradas em cubos e molho Caesar."
    }
  ];

  async create({ name, ingredients, price, description }) {
    const meal = {
      id: Math.floor(Math.random() * 1000) + 1,
      name,
      ingredients,
      price,
      description
    }

    this.meals.push(meal);

    return meal;
  }

  async createPicture(picture) {
  }

  async findByName(name) {
    const existingMeal = this.meals.find(meal => meal.name === name);


    return existingMeal;
  }


}

module.exports = MealRepositoryInMemory;