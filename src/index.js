import express from "express";
import { pinoHttp } from "pino-http";

export const app = express();

export const pino = pinoHttp({
  transport: {
    target: "pino-pretty",
  },
});

export const logger = pino.logger;

app.use(pino);
