const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false })); //it'll look at the body of our POST request
//add superconvient named property to it
app.use(getWeather);
function getWeather(req, res, next) {
  req.visitorWeather = false;
  if (req.visitorWeather) {
    res.send("please come back to our app when it is not raining");
  } else {
    next();
  }
}
app.get("/", (req, res) => {
  res.send(`<h1>What color is the sky on a clear day?</h1>
  <form action="/result" method="POST">
  <input type="text" name="color">
  <button>Submit answer</button>
  </form>
  <p>${req.visitorWeather === true ? "It is raining" : "It is not raining"}</p>
  `);
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
