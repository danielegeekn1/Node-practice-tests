const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");
const app = express();
const port = 3030;

//set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
//further options for multer
const upload = multer({
  storage: storage,
}).single("myImg");
//set view engine
app.set("view engine", "ejs");
app.use(express.static("./public"));
//routes
app.get("/", (req, res) => {
  res.render("home");
});
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render("index", { msg: err });
    } else {
      console.log(req.file);
      res.send("text");
    }
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
