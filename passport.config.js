const localStrategy = require("passport-local").Strategy;
//in order to use local version of passport
const bcrypt = require("bcrypt");
const initialize = (passport) => {
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
    new localStrategy(
      {
        usernameField: "email",
      },
      authenticateUsers
    ),

    passport.serializeUser((user, done) => {}),
    passport.deserializeUser((id, done) => {})
  );
};
module.exports = initialize;
