const { json } = require("express");
const express = require("express");

const app = express();

const appRoutes = require("./routes");

app.use(json());
app.use(appRoutes);

module.exports = app;
