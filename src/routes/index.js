const { Router } = require("express");
const appRoutes = Router();

const usersRouter = require("./users.routes");
const mealsRouter = require("./meals.routes");

appRoutes.use("/users", usersRouter);
appRoutes.use("/meals", mealsRouter);

module.exports = appRoutes;