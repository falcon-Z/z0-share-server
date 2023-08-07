const posts = require("../../data/models/post.model");
const { logger } = require("../../utils/logger");

async function getAllCOmments(req, res) {
  const { id } = req.params;

  try {
    const post = await posts.findById(id);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    await post.populate("comments.commentBy");

    res.status(200).json({ comments: post.comments });
  } catch (err) {
    logger.error(err);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = getAllCOmments;
