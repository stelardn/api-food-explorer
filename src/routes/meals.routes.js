const { Router } = require("express");
const mealsRoutes = Router();

const MealsController = require("../controllers/MealsController");
const mealsController = new MealsController();

mealsRoutes.post("/", mealsController.create);

module.exports = mealsRoutes;