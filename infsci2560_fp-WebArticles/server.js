// Alhanouf & Jiaxiang

let express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  flash = require("connect-flash"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  methodOverride = require("method-override"),
  Blog = require("./models/blog"),
  Comment = require("./models/comment"),
  User = require("./models/user");

let commentRouter = require("./routes/comment"),
  blogRouter = require("./routes/blog"),
  indexRouter = require("./routes/index"),
  userRouter = require("./routes/user");

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

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.use(
  require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

// routers
app.use("/", indexRouter);
app.use("/blogs", blogRouter);
app.use("/blogs/:bid/comments", commentRouter);
app.use("/user", userRouter);

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
