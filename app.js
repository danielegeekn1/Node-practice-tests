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
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    checkFileTypes(file, cb);
  },
}).single("myImg");

//checkFileTypes function to check types
const checkFileTypes = (file, cb) => {
  //allowed extensions
  const fileTypes = /jpeg|jpg|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);
  if (mimetype && extName) {
    return cb(null, true);
  } else {
    cb("Error, images only");
  }
};
//set view engine
app.set("view engine", "ejs");
app.use(express.static("./public"));
//routes
//get request
app.get("/", (req, res) => {
  res.render("home");
});
//post request to retrieve users chosen photos
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render("home", { msg: err });
    } else {
      console.log(req.file);
      if (req.file === "undefined") {
        res.render("index", { msg: "error, no file uploaded" });
      } else {
        res.render("home", {
          msg: "file uploaded",
          file: `uploads/${req.file.filename}`,
        });
      }
    }
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
