require("express-async-errors");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const { json } = require("express");
app.use(json());

const { UPLOADS_FOLDER } = require("./configs/uploads");
const { PUBLIC_FOLDER } = require("./configs/public");
app.use("/files", express.static(UPLOADS_FOLDER));
app.use("/public", express.static(PUBLIC_FOLDER));

const appRoutes = require("./routes");
app.use(appRoutes);

const AppError = require("./utils/AppError");
app.use((error, request, response, _next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
});

module.exports = app;

