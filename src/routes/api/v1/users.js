const passport = require("passport");
const getCurrentUser = require("../../../handlers/users/getCurrentUser");
const getUserbyId = require("../../../handlers/users/getUserbyId");

const router = require("express").Router();

router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  getCurrentUser
);

router.get("/:id", getUserbyId);

module.exports = router;
