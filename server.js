require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
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
app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

app.listen(3000, () => {
  console.log("server listening at port 3000");
});
