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
