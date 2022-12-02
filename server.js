const express = require("express");
const app = express();
const path = require("path");
const { cors } = require("cors");
const { logger } = require("./middlewares/logEvents");
//defining the PORT of our server
const PORT = process.env.PORT || 3500;
//custom middleware logger
app.use(logger);
//using cors - Cross Origin Resource Sharing
const whitelist = [
  "https://www.yoursite.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
//built in middleware for url encoded data - form data
app.use(express.urlencoded({ extended: false }));
//built in middleware for json data
app.use(express.json());
//built in middleware to serve static file
app.use(express.static(path.join(__dirname, "/public")));
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
//Route handlers with next()
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("attempted to load hello.html");
    next();
  },
  (req, res) => {
    res.send("Hello Everybody");
  }
);
//chaining route handlers
const one = (req, res, next) => {
  console.log(one);
  next();
};
const two = (req, res, next) => {
  console.log(two);
  next();
};
const three = (req, res) => {
  console.log(three);
  res.send("finished finally");
};
app.get("/chain(.html)?", [one, two, three]);
app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
