import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express from "express";
import multer from "multer";
import { randomUUID } from "crypto";
import path from "path";
import ejs from "ejs";
const app = express();
const port = process.env.PORT;
//setting multer options for destination and file name
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${randomUUID()} ${file.originalname}`);
  },
});
//setting multer options for size limits
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    checkFileExt(file, cb);
  },
}).single("filename");
const checkFileExt = (file: any, cb: any) => {
  const fileTypes = /jpeg|jpg|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);
  if (mimetype && extName) {
    return cb(null, true);
  } else {
    cb("Error, images only");
  }
};
//global middlewares
app.use(express.json());
app.use(express.static("./public"));
//allowing express to use ejs files
app.set("view engine", "ejs");
//routes
app.get("/", (req, res) => {
  res.render("home");
});
app.post("/:id/upload", (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.render("home", { msg: err });
    } else {
      console.log(req.file);
      if (req.file?.filename === "undefined") {
        res.render("home", { msg: "no file uploaded" });
      } else {
        res.render("home", {
          msg: "image successfully uploaded",
          file: `uploads/${req.file?.filename}`,
        });
      }
    }
  });
});
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
