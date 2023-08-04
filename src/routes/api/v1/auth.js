const handleUserAuthentication = require("../../../handlers/auth/handleUserAuthentication");
const handleUserRegistration = require("../../../handlers/auth/handleUserRegistration");

const router = require("express").Router();

router.post("/login", handleUserAuthentication);

router.post("/register", handleUserRegistration);

module.exports = router;
