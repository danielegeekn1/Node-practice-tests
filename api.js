const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors()); //let cors be avaiable in all of our endpoints we set in our file
app.use(express.json()); //this allows us to receive json method in post request in express

app.get("/", (req, res) => {
  res.send("Hello World");
});
//getting whichever is put after the animal url with dynamic route in express
/*
app.get("/animal/:name", (req, res) => {
  console.log(req.params.name); //req.params.name is a built-in method which allows us
  //to have displayed in our console which dynamic url has been added in our endpoint
  res.send("Thank you");
});
*/
app.get("/api/animal/:name", (req, res) => {
  if (req.params.name === "meowsalot") {
    res.json({
      name: "Meow",
      species: "cat",
      photo:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1686&q=80",
    });
  } else if (req.params.name === "barksalot") {
    res.json({
      name: "Woof",
      species: "dog",
      photo:
        "https://plus.unsplash.com/premium_photo-1668208365386-4198381c6f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    });
  } else {
    res.json("Animal not found");
  }
});

app.get("/fake-search", (req, res) => {
  console.log(req.query); //that allows us to catch user dynamic url and have it displayed in our console
  res.json("thank you for your request");
});
app.post("/api/secret", (req, res) => {
  if (req.body.username === "john" && req.body.password === "qwerty") {
    res.json("you have secret access to our secret: 2+2 =4");
  } else {
    res.json("This is incorrect");
  }
});
app.listen(3000);
