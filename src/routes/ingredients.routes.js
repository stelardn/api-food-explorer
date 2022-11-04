const IngredientsController = require('../controllers/IngredientsController');
const ingredientsController = new IngredientsController();

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const { Router } = require('express');
const ingredientsRouter = Router();

ingredientsRouter.get('/', ensureAuthenticated, ingredientsController.show);

module.exports = ingredientsRouter;