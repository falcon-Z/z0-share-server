const db = require("mongoose");
const { logger } = require("..");

async function connectToDB() {
  try {
    await db.connect(`${process.env.MONGODB_URI}`);
    logger.info(`Connected to Database: ${db.connection.name}`);
  } catch (error) {
    logger.error("Database COnnection Failed" + error);
    process.exit(1);
  }
}

module.exports = connectToDB;
