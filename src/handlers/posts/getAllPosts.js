const posts = require("../../data/models/post.model");
const { logger } = require("../../utils/logger");

function getAllPosts(req, res) {
  try {
    posts
      .find()
      .populate("createdBy")
      .sort({ createdAt: -1 })
      .then((posts) => {
        res.status(200).json(posts);
      })
      .catch((err) => {
        logger.error(err);
        res.status(500).json({
          message: "Internal server error",
        });
      });
  } catch (err) {
    {
      logger.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = getAllPosts;
