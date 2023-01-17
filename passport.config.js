const LocalStrategy = require("passport-local").Strategy;
//in order to use local version of passport
const bcrypt = require("bcrypt");
const initialize = (passport, getUserByEmail, getUserById) => {
  const authenticateUsers = async (email, password, done) => {
    const user = getUserByEmail(email);
    if ((user = null)) {
      return done(null, false, { message: "no user with that email" });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "password incorrect" });
      }
    } catch (error) {
      return done(e);
    }
  };
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      authenticateUsers
    ),

    passport.serializeUser((user, done) => done(null, user.id)),
    passport.deserializeUser((id, done) => {
      return done(null, getUserById(id));
    })
  );
};
module.exports = initialize;
