const express = require("express");
const app = express();
app.set("view engine", "ejs"); //to allow our browser to read ejs files
app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Kyle" });
});
app.listen(3000);
