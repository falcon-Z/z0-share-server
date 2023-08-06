const express = require("express");
const swagger = require("swagger-ui-dist").absolutePath();
const passport = require("passport");
const cors = require("cors");

require("./data/models/user.model");
require("./data/models/post.model");
require("./config/passportConfig")(passport);

const authRouter = require("./routes/api/v1/auth");
const userRouter = require("./routes/api/v1/users");
const postsRouter = require("./routes/api/v1/posts");

const { pino } = require("./utils/logger");

const app = express();

app.use(passport.initialize());
app.use(cors());
app.use(pino);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(swagger));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postsRouter);

module.exports = app;
