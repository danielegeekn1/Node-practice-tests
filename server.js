const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const logEvents = require("./logEvents");
const EventEmitter = require("events");

class Emitter extends EventEmitter {}
//initialize the obj we're going to create
const myEmitter = new Emitter();

//add listener for the log event
// myEmitter.on("log", (msg) => logEvents(msg));

// myEmitter.emit("log", "log event emitted");

//defining the PORT of our server
const PORT = process.env.PORT || 3500;
//defining server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  /* possibile way to manage server 
  let path;
  if (req.url === "/" || req.url === "index.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    path = path.join(__dirname, "views", "index.html");
    fs.readFile(path, "utf8", (err, data) => {
      res.end(data);
    });
  }
  */
  //other way to manage better the server req
  /*
  let path;
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      path = path.join(__dirname, "views", "index.html");
      fs.readFile(path, "utf8", (err, data) => {
        res.end(data);
      });
      break;
  }
  */
  //other way to manager server req
  const extension = path.extname(req.url);
  let contentType;
  switch (extension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".txt":
      contentType = "text/plain";
      break;
    default:
      contentType = "text/html";
  }
  let filePath =
    contentType === "text.html" && req.url === "/"
      ? path.join(__dirname, "views", "index.html")
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "views", req.url, "index.html")
      : contentType === "text.html"
      ? path.join(__dirname, "views", req.url)
      : path.join(__dirname, req.url);

  //makes .html extension not required in the browser
  if (!extension && req.url.slice(-1) !== "/") filePath += ".html";
  //variable to check wether a specific path exist or not
  const fileExist = fs.existsSync(filePath); //expects a boolean true or false value
  if (fileExist) {
    //serve the file
  } else {
    //404
    //301 redirect
    console.log(path.parse(filePath));
  }
});
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
