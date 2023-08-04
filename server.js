const http = require("http");
const dotenv = require("dotenv");

const { app, logger } = require("./src/index.js");
const connectToDB = require("./src/utils/db.js");

dotenv.config();

const port = process.env.PORT || 3000;

app.set("port", port);
const server = http.createServer(app);

server.listen(port);
connectToDB();

server.on("error", (error) => {
  switch (error.name) {
    case "EADDRINUSE":
      logger.error(`Port ${port} is already in use.`);
      break;
    case "EACCES":
      logger.error(`Port ${port} requires elevated privileges.`);
      break;
    default:
      logger.error(error.message);
  }
});

server.on("listening", () => {
  const address = server.address();

  logger.info(`Server is listening on ${address.address}:${address.port}`);
});
