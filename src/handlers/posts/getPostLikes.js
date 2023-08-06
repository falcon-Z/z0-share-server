const { post } = require("../..");
const posts = require("../../data/models/post.model");
const { logger } = require("../../utils/logger");

function getPostLikes(req, res) {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({
      message: "Id must be provided",
    });
  }

  try {
    posts
      .findById({ _id: id })
      .populate("likes")
      .then((post) => {
        res.status(200).json({ likes: post.likes });
      });
  } catch (err) {
    logger.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = getPostLikes;
