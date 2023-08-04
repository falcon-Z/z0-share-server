const express = require("express");
const pino = require("pino-http").pinoHttp({
  transport: {
    target: "pino-pretty",
  },
});

const authRouter = require("./routes/api/v1/auth");

const logger = pino.logger;

const app = express();

app.use("/api/v1/auth", authRouter);

module.exports = { app, logger };
