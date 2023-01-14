require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

const posts = [
  {
    username: "Kyle",
    title: "post 1",
  },
  {
    username: "Jimmy",
    title: "post 2",
  },
];
app.get("/posts", (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});
//login
app.post("/login", (req, res) => {
  //authenticate user
  const username = req.body.username;
  const user = { name: username };
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});
/*
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split("")[1];
  if (token === null) return res.sendStatus(401);
  jwt.verify(token, procces.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
*/
const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
};
app.listen(4000, () => {
  console.log("server listening at port 4000");
});
