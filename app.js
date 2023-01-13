import express from "express";
const app = express();
app.post("/users", (req, res) => {
  res.send({});
});
export default app;
