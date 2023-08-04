const express = require("express");
const swagger = require("swagger-ui-dist").absolutePath();
const passport = require("passport");
const cors = require("cors");

require("./config/passportConfig")(passport);

const authRouter = require("./routes/api/v1/auth");
const { pino } = require("./utils/logger");

const app = express();

app.use(passport.initialize());
app.use(cors());
app.use(pino);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(swagger));

app.use("/api/v1/auth", authRouter);

module.exports = app;
