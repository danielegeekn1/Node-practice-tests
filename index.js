console.log("node testing!");
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
console.log("one piece is the top");
console.log(uuid());
