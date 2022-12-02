console.log("node testing!");
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItems = `${dateTime}\t${uuid()}\t${message}`;
  console.log(logItems);
  try {
    if (!fs.existsSync(path.join(__dirname, "Logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "Logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "Logs", "eventLogs.txt"),
      logItems
    );
  } catch (error) {
    console.log(error);
  }
};
console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
console.log("one piece is the top");
console.log(uuid());

module.exports = logEvents;
