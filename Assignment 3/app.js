const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./utils/path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "2.html"));
});

app.use("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "1.html"));
});

app.listen(5000);