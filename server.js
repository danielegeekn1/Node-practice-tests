const express = require("express");
const app = express();
const path = require("path");

//defining the PORT of our server
const PORT = process.env.PORT || 3500;
app.get("^/$|/index(.html)?", (req, res) => {
  //we could send file in this way, used a lot while working in EXPRESS
  res.sendFile("./views/index.html", { root: __dirname });
  //we could also send file in this way that's how we usually would do in NODE.JS
  //res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});
app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); //302 by default( that will not redirect )
});
app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
