const users = require("../../data/models/user.model");
const { logger } = require("../../utils/logger");

function getCurrentUser(req, res) {
  if (!req.user) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    const _id = req.user._id;

    try {
      users.findById({ _id: _id }).then((user) => {
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      });
    } catch (err) {
      logger.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = getCurrentUser;
