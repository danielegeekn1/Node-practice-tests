//exporting some logic in other files
//exporting counter function
let counter = function (arr) {
  return "There are" + arr.length + "elements in this array ";
};
console.log(counter(["Shaun", "Crystal", "Mya"]));

let adder = function (a, b) {
  return `The sum of the two numbers is ${a + b}`;
};
let pi = 3.142;
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi,
};
