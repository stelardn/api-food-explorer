const { Router } = require('express');
const appRoutes = Router();

const usersRouter = require('./users.routes');
const mealsRouter = require('./meals.routes');
const ingredientsRouter = require('./ingredients.routes');
const ordersRouter = require('./orders.routes');
const favoritesRouter = require('./favorites.routes');
const sessionsRouter = require('./sessions.routes');

appRoutes.use('/users', usersRouter);
appRoutes.use('/meals', mealsRouter);
appRoutes.use('/ingredients', ingredientsRouter);
appRoutes.use('/orders', ordersRouter);
appRoutes.use('/favorites', favoritesRouter);
appRoutes.use('/sessions', sessionsRouter);

module.exports = appRoutes;