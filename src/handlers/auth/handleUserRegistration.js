const generatePasswordHash = require("../../utils/auth/generatePasswordHash");
const user = require("../../data/models/user.model.js");
const { logger } = require("../../utils/logger");

function handleUserRegistration(req, res) {
  if (!req.body) {
    res.status(400).json({
      message: "No request body",
    });
  } else if (!req.body.email) {
    res.status(400).json({
      message: "Missing email field",
    });
  } else if (!req.body.password) {
    res.status(400).json({
      message: "Missing password field",
    });
  } else if (!req.body.name) {
    res.status(400).json({
      message: "Missing name field",
    });
  }

  logger.info("handleUserRegistration: email: " + req.body.email);
  logger.info("handleUserRegistration: password: " + req.body.password);
  logger.info("handleUserRegistration: name: " + req.body.name);

  const { email, password, name } = req.body;

  const { hash, salt } = generatePasswordHash(password);

  const newUser = new user({
    name: name,
    email: email,
    hash: hash,
    salt: salt,
  });

  try {
    newUser.save().then((user) => {
      res.status(200).json({
        message: "User created",
        user: user,
      });
    });
  } catch (err) {
    res.status(500).json({
      message: "Error creating user",
    });
  }
}

module.exports = handleUserRegistration;
