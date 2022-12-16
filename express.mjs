import express from "express";
const app = express();
app.use(function setHeaderMiddleware(request, response, next) {
  console.log("called:setHeaderMiddleware");
  response.setHeader("X-Custom-Header", "1234");
  next();
});
app.use(function setMiddleware(request, response, next) {
  console.log("called:setMiddleware");
  response.json({ data: "this is some data" });
  next();
});
app.use(function seMiddlewareWithError(request, response, next) {
  console.log("called:setHeaderMiddlewareWithError");
  next(new Error("There has been an error"));
});
app.use(function handlingMiddlewareErrors(error, response, request) {
  console.log("error:handlingMiddlewareErrors");
  response.status(500);
  response.json({ message: error.message });
  next();
});
app.listen(3000);
