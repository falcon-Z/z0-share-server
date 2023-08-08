const posts = require("../../data/models/post.model");
const { logger } = require("../../utils/logger");

async function getPostById(req, res) {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({
      message: "Missing id",
    });
  }

  try {
    const post = await posts
      .findById(id)
      .populate("createdBy")
      .sortPosts()
      .populate("comments.commentBy")
      .exec();
    res.status(200).json({ post: post });
  } catch (err) {
    logger.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = getPostById;
