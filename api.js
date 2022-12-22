const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});
//getting whichever is put after the animal url with dynamic route in express
app.get("/animal/:name", (req, res) => {
  console.log(req.params.name); //req.params.name is a built-in method which allows us
  //to have displayed in our console which dynamic url has been added in our endpoint
  res.send("Thank you");
});
app.listen(3000);
