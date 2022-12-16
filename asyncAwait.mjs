import * as fs from "node:fs/promises";
/*
async function outPutFiles() {
  try {
    const file1 = await fs.readFile("file-0.txt", { encoding: "utf8" });
    console.log("data", file1);
    const file2 = await fs.readFile("file-2.txt", { encoding: "utf8" });
    console.log("data", file2);
  } catch (error) {
    console.error(error);
  }
}
outPutFiles();
*/
/*
//async awaiy example with promise all method
async function outputFilesTogether() {
  try {
    const data = await Promise.all([
      fs.readFile("file-0.txt", { encoding: "utf8" }),
      fs.readFile("file-2.txt", { encoding: "utf8" }),
    ]);
    console.log("data", data);
  } catch (error) {
    console.error(error);
  }
}
outputFilesTogether();
*/
//we could use this try catch block also outside an async function

try {
  const data = await Promise.all([
    fs.readFile("file-0.txt", { encoding: "utf8" }),
    fs.readFile("file-2.txt", { encoding: "utf8" }),
  ]);
  console.log("data", data);
} catch (error) {
  console.error(error);
}
