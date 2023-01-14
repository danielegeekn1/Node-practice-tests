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
  res.json(posts);
});
//login
app.post("/login", (req, res) => {
  //authenticate user
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});
app.listen(3000, () => {
  console.log("server listening at port 3000");
});
