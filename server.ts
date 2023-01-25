import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express, { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import { randomUUID } from "crypto";
import path from "path";
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
app.get("/", async (req, res) => {
  const data = await prisma.photos.findMany();
  res.json(data);
});
app.post("/:id/image", async (req, res) => {
  const id = req.params.id;
  const filename = req.file?.filename;
  const uploadImg = await prisma.photos.update({
    where: { id: +id },
    data: { filename: filename },
  });
  res.status(201).json(uploadImg);
});
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
