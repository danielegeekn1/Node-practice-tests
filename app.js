//methods allowed by Node js global object
console.log("Hey Ninjas");
console.log("Hi I am Batman");

setTimeout(() => {
  console.log("2 seconds have passed");
}, 3000);
let time = 0;
const timer = setInterval(() => {
  time += 2;

  console.log(time + " seconds have passed");
  if (time > 5) {
    clearInterval(timer);
  }
}, 2000);

//directory name
console.log(__dirname);
//file name
console.log(__filename);

function callFunction(fun) {
  fun();
}
let sayBye = function () {
  console.log("Bye");
};
callFunction(sayBye);
let stuff = require("./stuff");
console.log(stuff.counter(["Shaun", "Crystal", "Mya"]));
console.log(stuff.adder(5, 6));
console.log(stuff.adder(stuff.pi, 5));

let events = require("events");
//element.on("click", function () {});
let myEmitter = new events.EventEmitter(); //here we store our event emitter
myEmitter.on("someEvent", (message) => {
  console.log(message);
});
myEmitter.emit("someEvent", "The event was emitted");

let util = require("util");
let Person = (name) => {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);
let James = new Person("James");
let Mary = new Person("Mary");
let Ryu = new Person("Ryu");
let peopleArray = [James, Mary, Ryu];
//since we inherited the event emitter we could then add also something to this array we made
peopleArray.forEach((person) => {
  person.on("speak", (msg) => {
    console.log(Person.name + "said" + msg);
  });
});
James.emit("speak", "hey dudes");
