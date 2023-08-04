const users = require("../../data/models/user.model");

function getUserbyId(req, res) {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({
      message: "Missing id",
    });
  }

  try {
    users
      .findById({ _id: id })
      .then((user) => {
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({
            message: "User not found",
          });
        }
      })
      .catch((err) => {
        logger.error(err);
        res.status(500).json({
          message: "Database Error",
        });
      });
  } catch (err) {
    logger.error(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = getUserbyId;
