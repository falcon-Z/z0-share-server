const posts = require("../../data/models/post.model");
const { logger } = require("../../utils/logger");

function createNewPost(req, res) {
  if (!req.body.title || !req.body.imageUri) {
    return res.status(400).json({ message: "Please fill out all fields" });
  }

  const { title, imageUri, tags } = req.body;
  const { _id } = req.user;

  const newPost = new posts({
    title,
    imageUri,
    tags: tags ? tags : [],
    createdBy: _id,
  });

  try {
    newPost
      .save()
      .then((post) => {
        return res
          .status(201)
          .json({ message: "Post created successfully", post });
      })
      .catch((err) => {
        logger.error(err);
        return res.status(500).json({ message: "Database error" });
      });
  } catch (err) {
    logger.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = createNewPost;
