const generatePasswordHash = require("../../utils/auth/generatePasswordHash");
const user = require("../../data/models/user.model.js");
const { logger } = require("../../utils/logger");
const issueToken = require("../../utils/auth/issueToken");

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
  const { email, password, name } = req.body;

  const { hash, salt } = generatePasswordHash(password);

  const newUser = new user({
    name: name,
    email: email,
    hash: hash,
    salt: salt,
  });

  newUser
    .save()
    .then((user) => {
      const { token, expiresIn } = issueToken(user);
      res.status(200).json({
        message: "User created",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        token: token,
        expiresIn: expiresIn,
      });
    })
    .catch((err) => {
      logger.error(err);
      res.status(500).json({
        message: "Error creating user",
        error: err.message,
      });
    });
}

module.exports = handleUserRegistration;
