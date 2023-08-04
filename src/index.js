const express = require("express");
const pino = require("pino-http").pinoHttp({
  transport: {
    target: "pino-pretty",
  },
});

const logger = pino.logger;

const app = express();

module.exports = { app, logger };
