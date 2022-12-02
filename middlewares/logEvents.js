console.log("node testing!");
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItems = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItems);
  try {
    if (!fs.existsSync(path.join(__dirname, "..", "Logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "Logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "Logs", "..", logName),
      logItems
    );
  } catch (error) {
    console.log(error);
  }
};
const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.header.origin}\t${req.url}`, "reqLog.txt");
  console.log(`${req.method} ${req.path}`);
  next();
};
console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
console.log("one piece is the top");
console.log(uuid());

module.exports = { logger, logEvents };
