const logger = require(".././../utils/logger");

const posts = require("../../data/models/post.model");

async function handleLikes(req, res) {
  const { id } = req.params;

  try {
    const post = await posts.findById(id);

    post.likes += 1;

    await post.save();
    res
      .status(200)
      .json({ message: "Successfully liked post", likes: post.likes });
  } catch (err) {
    logger.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = handleLikes;
