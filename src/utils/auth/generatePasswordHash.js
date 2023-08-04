const crypto = require("crypto");

function generatePasswordHash(password) {
  const salt = crypto.randomBytes(32).toString("hex");
  const generatedHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt: salt,
    hash: generatedHash,
  };
}

module.exports = generatePasswordHash;
