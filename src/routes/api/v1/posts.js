const passport = require("passport");
const createNewPost = require("../../../handlers/posts/createNewPost");
const getAllPosts = require("../../../handlers/posts/getAllPosts");
const getPostById = require("../../../handlers/posts/getPostById");
const getPostLikes = require("../../../handlers/posts/getPostLikes");
const handleLikes = require("../../../handlers/posts/handleLikes");
const createNewComment = require("../../../handlers/posts/createNewComment");
const { route } = require("./auth");
const getAllComents = require("../../../handlers/posts/getAllComments");

const router = require("express").Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createNewPost
);

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.get("/:id/likes", getPostLikes);
router.post(
  "/:id/like",
  passport.authenticate("jwt", { session: false }),
  handleLikes
);

router.get("/:id/comments", getAllComents);
router.post(
  "/:id/comment",
  passport.authenticate("jwt", { session: false }),
  createNewComment
);

module.exports = router;
