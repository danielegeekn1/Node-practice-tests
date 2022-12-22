const express = require("express");
const app = express();
const { middlewareTest } = require("./middlewares");
const { authTest } = require("./middlewares");
//app.use("/persons", middlewareTest);
//app.use([middlewareTest, authTest]);
app.use(middlewareTest);
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/private-area", authTest, (req, res) => {
  res.send("private-area");
});
/*
app.get("/persons", (req, res) => {
  res.send("Persons");
});
app.get("/persons/1", (req, res) => {
  res.send("person n 1");
});
*/
app.listen(3000);
