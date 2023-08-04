const { logger } = require("../..");
const users = require("../../data/models/user.model");

function handleUserAuthentication(req, res) {
  const { email, password } = req.body;

  users
    .findOne()
    .byEmail(email)
    .exec((err, user) => {
      logger.debug({ user, err });
    });
}

module.exports = handleUserAuthentication;
