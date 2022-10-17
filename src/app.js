require("express-async-errors");

const express = require("express");
const app = express();

const { json } = require("express");
app.use(json());

const appRoutes = require("./routes");
app.use(appRoutes);


const AppError = require("./utils/AppError");
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error."
  })
});



module.exports = app;
