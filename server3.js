const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: false })); //it'll look at the body of our POST request
//add superconvient named property to it
app.use(getWeather);

//
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //set it to read from our views folder

function getWeather(req, res, next) {
  req.visitorWeather = false;
  if (req.visitorWeather) {
    res.send("please come back to our app when it is not raining");
  } else {
    next();
  }
}
app.get("/", (req, res) => {
  res.render("home", {
    isRaining: req.visitorWeather,
    pets: [
      { name: "meow meow", species: "cat" },
      { name: "barks a lot", species: "dog" },
    ],
    //in the second parameter as object we set the data we want to be able to render in our template engine
  }); //rendering home.ejs template engine file we created
});
app.get("/about", (req, res) => {
  res.send("Thanks for learning more about us");
});
app.post("/result", (req, res) => {
  if (req.body.color.trim().toUpperCase() === "BLUE") {
    res.send("Congrats, that is correct");
  } else {
    res.send("incorrect, please try again");
  }
});
app.get("/result", (req, res) => {
  res.send("Why are you visiting this URL??");
});
app.listen(3000);
