const posts = require("../../data/models/post.model");
const { logger } = require("../../utils/logger");

function getPostById(req, res) {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({
      message: "Missing id",
    });
  }

  try {
    posts
      .findById({ _id: id })
      .populate("createdBy", "likes")
      .then((post) => {
        if (post) {
          res.status(200).json(post);
        } else {
          res.status(404).json({
            message: "Post not found",
          });
        }
      })
      .catch((err) => res.status(500).json({ message: "Database Error" }));
  } catch (err) {
    logger.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = getPostById;
