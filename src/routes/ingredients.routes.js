const IngredientsController = require('../controllers/IngredientsController');
const ingredientsController = new IngredientsController();

const { Router } = require('express');
const ingredientsRouter = Router();

ingredientsRouter.get('/', ingredientsController.show);

module.exports = ingredientsRouter;