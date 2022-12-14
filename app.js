// //methods allowed by Node js global object

// /*
// console.log("Hey Ninjas");
// console.log("Hi I am Batman");

// setTimeout(() => {
//   console.log("2 seconds have passed");
// }, 3000);
// let time = 0;
// const timer = setInterval(() => {
//   time += 2;

//   console.log(time + " seconds have passed");
//   if (time > 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// //directory name
// console.log(__dirname);
// //file name
// console.log(__filename);

// function callFunction(fun) {
//   fun();
// }
// let sayBye = function () {
//   console.log("Bye");
// };
// callFunction(sayBye);
// let stuff = require("./stuff");
// console.log(stuff.counter(["Shaun", "Crystal", "Mya"]));
// console.log(stuff.adder(5, 6));
// console.log(stuff.adder(stuff.pi, 5));

// let events = require("events");
// //element.on("click", function () {});
// let myEmitter = new events.EventEmitter(); //here we store our event emitter
// myEmitter.on("someEvent", (message) => {
//   console.log(message);
// });
// myEmitter.emit("someEvent", "The event was emitted");

// let util = require("util");
// let Person = (name) => {
//   this.name = name;
// };

// util.inherits(Person, events.EventEmitter);
// let James = new Person("James");
// let Mary = new Person("Mary");
// let Ryu = new Person("Ryu");
// let peopleArray = [James, Mary, Ryu];
// //since we inherited the event emitter we could then add also something to this array we made
// peopleArray.forEach((person) => {
//   person.on("speak", (msg) => {
//     console.log(Person.name + "said" + msg);
//   });
// });
// James.emit("speak", "hey dudes");
// */
// let fs = require("fs");
// // let readMe = fs.readFileSync("readMe.txt", "utf8");
// // console.log(readMe);
// // fs.writeFileSync("writeMe.txt", readMe);
// fs.readFile("readMe.txt", "utf8", (data, err) => {
//   console.log(data);
//   fs.writeFileSync("writeMe.txt", data);
// });
// console.log("test");

// //creating a directiory and adding some read file into another asynchronously
// fs.mkdir("stuff", () => {
//   fs.readFile("readMe.txt", "utf8", (data, err) => {
//     fs.writeFile("./stuff", writeMe.txt, data);
//   });
// });
// fs.unlink("./stuff/writeMe.txt", function () {
//   fs.rmdir("stuff");
// });

//let fs = require("fs");

// myReadStream.on("data", (chunk) => {
//   console.log("new chunk received");
//   console.log(chunk);
//   myWriteStream.write(chunk);
// });
/*
let http = require("http");
let server = http.createServer((req, res) => {
  console.log("request was made" + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text / html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text / html" });
    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  } else if (req.url === "/api/ninjas") {
    let ninjas = [
      {
        name: "Ryu",
        age: 29,
        job: "Ninja",
      },
      {
        name: "Daniele",
        age: 33,
        job: "Samurai",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, { "Content-Type": "text / html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});
server.listen(3000, "127.0.0.1"); //first our server port number, then our server ip
console.log("yo men, now listening to port 3000");
*/
let express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.send("This is the homepage");
});
app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});
app.listen(3000);
