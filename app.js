const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");
const app = express();
const port = 3030;

//set view engine
app.set("view engine", "ejs");
app.use(express.static("./public"));
//routes
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
