const FavoritesController = require('../controllers/FavoritesController');
const favoritesController = new FavoritesController();

const { Router } = require('express');
const favoritesRouter = Router();

favoritesRouter.get('/', favoritesController.index);
favoritesRouter.post('/', favoritesController.create);
favoritesRouter.delete('/:id', favoritesController.delete);

module.exports = favoritesRouter;