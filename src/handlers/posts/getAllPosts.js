const posts = require("../../data/models/post.model");
const logger = require("../../utils/logger");

async function getAllPosts(req, res) {
  try {
    const allposts = await posts
      .find()
      .populate("createdBy")
      .sortPosts()
      .populate("comments.commentBy")
      .exec();
    res.status(200).json({ posts: allposts });
  } catch (err) {
    logger.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = getAllPosts;
