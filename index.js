const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const app = express();
//modify the process functions that's been set once we save our file(photo in our case)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); //property to name, to which our img will be associated as value
  },
});
const upload = multer({ storage: storage }); //to receive photo in uploads folder in the way we set
app.post("/", upload.single("file"), (req, res) => {
  console.log(req.file);
  res.json({ message: "hola" });
});
const port = 3030;

app.listen(port, () => {
  console.log(`listening to server, at port ${port}`);
});
