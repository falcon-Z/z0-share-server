const passport = require("passport");
const createNewPost = require("../../../handlers/posts/createNewPost");

const router = require("express").Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createNewPost
);

module.exports = router;
