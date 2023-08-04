function validatePassword(password, hash, salt) {
  const verifyHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return hash === verifyHash;
}

module.exports = validatePassword;
