import { createServer } from "http";
import { app, logger } from "./src/index.js";

const port = process.env.PORT || 3000;

app.set("port", port);

const server = createServer(app);

server.listen(port);
server.on("error", (error) => {
  switch (error.name) {
    case "EADDRINUSE":
      console.error(`Port ${port} is already in use.`);
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
