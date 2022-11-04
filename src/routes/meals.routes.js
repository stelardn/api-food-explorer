const { Router } = require('express');
const mealsRoutes = Router();

const MealsController = require('../controllers/MealsController');
const mealsController = new MealsController();

mealsRoutes.post('/', mealsController.create);
mealsRoutes.get('/', mealsController.index);
mealsRoutes.get('/:id', mealsController.show);
mealsRoutes.put('/:id', mealsController.update);
mealsRoutes.delete('/:id', mealsController.delete);

module.exports = mealsRoutes;