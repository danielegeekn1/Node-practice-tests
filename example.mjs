/*
import * as fs from "node:fs";
fs.readFile("file-0.txt", { encoding: "utf8" }, (error, file1data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(file1data);
  fs.readFile("file-2.txt", { encoding: "utf8" }, (error, file2data) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(file2data);
  });
});
*/
//promise examples
/*
const someTask = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is some data");
  }, 2000);
});
console.log(someTask);
someTask.then(
  (value) => {
    console.log("value", value);
    console.log("someTask", someTask);
  },
  (reason) => {
    console.log("reason", reason);
    console.log("someTask", someTask);
  }
);
*/
/*
const someTask = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Something went wrong"));
  }, 2000);
});
console.log(someTask);
someTask.then(
  (value) => {
    console.log("value", value);
    console.log("someTask", someTask);
  },
  (reason) => {
    console.log("reason", reason);
    console.log("someTask", someTask);
  }
);
*/
import * as fs from "node:fs/promises";
fs.readFile("file-0.txt", { encoding: "utf8" }).then((data) => {
  console.log("data", data);
  (error) => {
    console.error(error);
  };
});
