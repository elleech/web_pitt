// init project
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// use the static files in the public folder
app.use(express.static("public"));
app.use(bodyParser.json()); // or app.use(express.json()) if it's the latest version
                            // https://stackoverflow.com/questions/47232187/express-json-vs-bodyparser-json/47232318#47232318

// init routes
app.use("/api", require("./routes/api"));

// tell express where to get your views and which template engine to use
app.set("views", __dirname + "/views/");
app.set("view engine", "ejs");

app.get("/", function(request, response) {
  response.render("index");
});

// error handler
app.get("*", function(req, res, next) {
  setImmediate(() => {
    next(new Error("You've misspelled something."));
  });
});

// error handler middleware
app.use((err, req, res, next) => {
  res.status(422).send({
    error: {
      status: err.status,
      message: err.message
    }
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
