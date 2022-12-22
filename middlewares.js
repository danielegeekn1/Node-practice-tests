const middlewareTest = (req, res, next) => {
  const { method, url } = req;
  const time = new Date().getMinutes();
  console.log(method, url, time);
  next();
};
const authTest = (req, res, next) => {
  const { user } = req.query;
  if (user === "Luca") {
    next();
  } else {
    res.status(401).send("not authorized");
  }
  console.log(`Access done`);
  next();
};
//clearly that's just an example to get how to manage authorizazion in middlewares, but it's gonna be
//a lot more complicated then that, we'll need the password and a lot of other thing

module.exports = { middlewareTest: middlewareTest, authTest: authTest };
