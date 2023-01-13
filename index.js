const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const app = express();
const port = 3030;
app.listen(port, () => {
  console.log(`listening to server, at port ${port}`);
});
