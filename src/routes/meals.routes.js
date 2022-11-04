const { Router } = require('express');
const mealsRoutes = Router();

const MealsController = require('../controllers/MealsController');
const mealsController = new MealsController();

const MealPicturesController = require('../controllers/MealPicturesController');
const mealPicturesController = new MealPicturesController();

const { MULTER } = require('../configs/uploads');
const multer = require('multer');
const upload = multer(MULTER);

mealsRoutes.post('/', mealsController.create);
mealsRoutes.get('/', mealsController.index);
mealsRoutes.get('/:id', mealsController.show);
mealsRoutes.put('/:id', mealsController.update);
mealsRoutes.delete('/:id', mealsController.delete);
mealsRoutes.patch('/picture/:meal_id', upload.single('picture'), mealPicturesController.updatePicture);

module.exports = mealsRoutes;