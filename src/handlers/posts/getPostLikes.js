const posts = require("../../data/models/post.model");
const { logger } = require("../../utils/logger");

function getPostLikes(req, res) {
  const { id } = resq.params;

  if (!id) {
    res.status(400).json({
      message: "Id must be provided",
    });
  }

  try {
  } catch (err) {
    logger.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
