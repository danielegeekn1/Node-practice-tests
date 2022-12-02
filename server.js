const express = require("express");
const app = express();
const path = require("path");

//defining the PORT of our server
const PORT = process.env.PORT || 3500;
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
