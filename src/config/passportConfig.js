const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const fs = require("fs");
const path = require("path");
const Users = require("../data/models/user.model");
const { logger } = require("../utils/logger");

const pathToKey = path.join(__dirname, "../../", "id_rsa_pub.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"],
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      const _id = jwt_payload.sub;

      Users.findById({ _id: _id })
        .then((user) => {
          if (user._id) {
            return done(null, {
              _id: user._id.toString(),
              name: user.name,
              email: user.email,
            });
          }
          return done(null, false);
        })
        .catch((err) => {
          logger.error(err);
          return done(err, false);
        });
    })
  );
};
