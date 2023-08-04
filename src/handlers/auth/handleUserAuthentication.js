const { logger } = require("../../utils/logger");
const users = require("../../data/models/user.model");
const issueToken = require("../../utils/auth/issueToken");
const validatePassword = require("../../utils/auth/validatePassword");

function handleUserAuthentication(req, res) {
  const { email, password } = req.body;

  try {
    users
      .findOne()
      .byEmail(email)
      .select("+hash +salt")
      .exec()
      .then((user) => {
        if (!user) {
          logger.error("User not found");
          return res.status(404).json({ message: "User not found" });
        }

        const isValidPassword = validatePassword(
          password,
          user.hash,
          user.salt
        );

        if (!isValidPassword) {
          logger.error("Invalid password");
          return res.status(401).json({ message: "Invalid password" });
        } else {
          const { token, expiresIn } = issueToken(user);
          logger.info("User authenticated");
          return res.status(200).json({
            message: "User authenticated",
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
            },
            token: token,
            expiresIn: expiresIn,
          });
        }
      })
      .catch((err) => {
        logger.error(err);
        return res
          .status(500)
          .json({ message: "Failed to Authenticate User", error: err.message });
      });
  } catch (err) {
    logger.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = handleUserAuthentication;
