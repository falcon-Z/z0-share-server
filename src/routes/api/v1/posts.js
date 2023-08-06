const passport = require("passport");
const createNewPost = require("../../../handlers/posts/createNewPost");
const getAllPosts = require("../../../handlers/posts/getAllPosts");
const getPostById = require("../../../handlers/posts/getPostById");
const deletePost = require("../../../handlers/posts/deletePost");
const getPostLikes = require("../../../handlers/posts/getPostLikes");

const router = require("express").Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createNewPost
);

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.delete("/:id", deletePost);

router.get("/:id/likes", getPostLikes);
router.post("/:id/likes", getPostLikes);

module.exports = router;
