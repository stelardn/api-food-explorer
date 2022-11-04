const { Router } = require('express');
const appRoutes = Router();

const usersRouter = require('./users.routes');
const mealsRouter = require('./meals.routes');
const ingredientsRouter = require('./ingredients.routes');
const ordersRouter = require('./orders.routes');
const favoritesRouter = require('./favorites.routes');
const sessionsRouter = require('./sessions.routes');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

appRoutes.use('/users', usersRouter);
appRoutes.use('/meals', ensureAuthenticated, mealsRouter);
appRoutes.use('/ingredients', ensureAuthenticated, ingredientsRouter);
appRoutes.use('/orders', ensureAuthenticated, ordersRouter);
appRoutes.use('/favorites', ensureAuthenticated, favoritesRouter);
appRoutes.use('/sessions', sessionsRouter);

module.exports = appRoutes;