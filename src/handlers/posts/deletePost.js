const { logger } = require("../../utils/logger");

function deletePost(req, res) {
  const { id } = req.params;

  try {
    Post.findByIdAndDelete({ _id: id })
      .then((post) => res.json(post))
      .catch((err) => res.status(400).json({ message: "Post not found" }));
  } catch (err) {
    logger.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = deletePost;
