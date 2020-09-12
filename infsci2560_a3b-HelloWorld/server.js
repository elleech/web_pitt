// init project
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// env file
require("dotenv").config();

// Establish a connection with the Mongo Database
// Get the username, password, host, and databse from the .env file
const mongoDB = process.env.MONGODB_ATLAS_URL;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();

// use the static files in the public folder
app.use(express.static("public"));
app.use(bodyParser.json()); // or app.use(express.json()) if it's the latest version
// https://stackoverflow.com/questions/47232187/express-json-vs-bodyparser-json/47232318#47232318
app.use(bodyParser.urlencoded({ extended: true }));

// init routes
app.use("/api", require("./routes/api"));

// tell express where to get your views and which template engine to use
app.set("views", __dirname + "/views/");
app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("index");
});

// error handler
app.get("*", function (req, res, next) {
  setImmediate(() => {
    next(
      new Error(
        "Oops, invalid URL. Please check for your spellings or capitals."
      )
    );
  });
});

// error handler middleware
app.use((err, req, res, next) => {
  res.status(422).send({
    error: {
      status: err.status,
      message: err.message,
    },
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
