const posts = require("../../data/models/post.model");
const { logger } = require("../../utils/logger");

async function handleLikes(req, res) {
  const { id } = req.params;
  const { userId } = req.user;

  try {
    const post = await posts.findById(id);

    const { liked, likesCount } = post.handleLikes(userId);

    await post.save();

    res.status(200).json({
      liked,
      likesCount,
    });
  } catch (err) {
    logger.error(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}
