const posts = require("../../data/models/post.model");

async function createNewComment(req, res) {
  const { comment } = req.body;
  const { id } = req.params;

  const { _id } = req.user;

  if (!comment) {
    return res.status(400).json({ message: "Comment is required" });
  }

  try {
    const post = await posts.findById(id);

    post.comments.push({
      comment: comment,
      commentBy: _id,
    });

    await post.save();

    await post.populate("comments.commentBy");

    res
      .status(200)
      .json({ message: "Comment added successfully", comments: post.comments });
  } catch (err) {
    res.status(500).json({ message: "Failed to add comment" });
  }
}

module.exports = createNewComment;
