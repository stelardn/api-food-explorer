const { Router } = require("express");
const appRoutes = Router();

const usersRouter = require("./user.routes");

appRoutes.use("/users", usersRouter);

module.exports = appRoutes;