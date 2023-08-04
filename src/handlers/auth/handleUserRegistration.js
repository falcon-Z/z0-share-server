const generatePasswordHash = require("../../utils/auth/generatePasswordHash");
const user = require("../../data/models/user.model.js");

function handleUserRegistration(req, res) {
  const { email, password, name } = req.body;

  const { hash, salt } = generatePasswordHash(password);

  const newUser = new user({
    name: name,
    email: email,
    hash: hash,
    salt: salt,
  });

  try {
    newUser.save().then((user) => {
      res.status(200).json({
        message: "User created",
        user: user,
      });
    });
  } catch (err) {
    res.status(500).json({
      message: "Error creating user",
    });
  }
}

module.exports = handleUserRegistration;
