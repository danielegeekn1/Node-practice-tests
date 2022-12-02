const logEvents = require("./logEvents");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
//initialize the obj we're going to create
const myEmitter = new MyEmitter();
//add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));
setTimeout(() => {
  myEmitter.emit("log", "log event emitted");
}, 2000);
