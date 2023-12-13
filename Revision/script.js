const express = require("express");
const app = express();
const port = 5000;

app.set("view engine", "ejs");
// app.use(express.static("Revision/./public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
