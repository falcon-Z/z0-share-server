const passport = require("passport");
const getCurrentUser = require("../../../handlers/users/getCurrentUser");

const router = require("express").Router();

router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  getCurrentUser
);

module.exports = router;
