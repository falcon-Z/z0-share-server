const express = require("express");

const authRouter = require("./routes/api/v1/auth");
const { pino } = require("./utils/logger");

const app = express();

app.use(pino);

app.use("/api/v1/auth", authRouter);

module.exports = app;
