// ! How to use Express

const express = require("express");
const app = express();
const port = 5002;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile/:username", (req, res, next) => {
  res.send(`Hello i am ${a.params.username}`);
});

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
