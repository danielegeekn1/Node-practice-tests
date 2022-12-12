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
