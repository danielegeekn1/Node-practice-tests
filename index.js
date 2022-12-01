const fsPromises = require("fs").promises;
const path = require("path");
const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "Nice to meet you"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (error) {
    console.error(error);
  }
};

fileOps();
//reading the file
/*
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }
);
*/
//console.log("Hi there");

//writing files
/*
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Nice to meet you mate",
  (err) => {
    if (err) throw err;
    console.log("write complete");
    //appendFile added as Callback  of writeFile, within its callback
    //used to update our reply text file
    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "/n/nYes it is",
      (err) => {
        if (err) throw err;
        console.log("append complete");
        //renameFile to change our file name, passed within the appenfile callback we passed as writeFile callback
        fs.rename(
          path.join(__dirname, "files", "reply.txt"),
          path.join(__dirname, "files", "newReply.txt"),
          (err) => {
            if (err) throw err;
            console.log("rename complete");
          }
        );
      }
    );
  }
);
*/
//catching eventual errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error:${err}`);
  process.exit(1);
});
