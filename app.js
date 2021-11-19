var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy; 
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username }, function (err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });
  }))
var Account =require('./models/account'); 


const connectionString = process.env.MONGO_CON;
mongoose = require("mongoose");
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var fanRouter = require("./routes/fan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var addmodsRouter = require("./routes/addmods");
var selectorRouter = require("./routes/selector");
//var Costume = require("./models/fan");
var resourceRouter = require('./routes/resource');
var fan = require("./models/fan");

// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await fan.deleteMany();

  let instance1 = new fan({
    Brand: "Usha",
    price: 10,
    color: "Green",
  });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved");
  });
  let instance2 = new fan({
    Brand: "tas",
    price: 20,
    color: "red",
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("second object saved");
  });
  let instance3 = new fan({
    Brand: "pot",
    price: 30,
    color: "white",
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("third object saved");
  });
}

let reseed = true;
if (reseed) {
  recreateDB();
}

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(require('express-session')({ 
  secret: 'keyboard cat', 
  resave: false, 
  saveUninitialized: false 
})); 
app.use(passport.initialize()); 
app.use(passport.session());

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});

app.use("/", indexRouter);
app.use("/fan", fanRouter);
app.use("/users", usersRouter);
app.use("/selector", selectorRouter);
app.use("/addmods", addmodsRouter);
//app.use("/costume", costumeRouter);
app.use('/resource', resourceRouter);

passport.use(new LocalStrategy(Account.authenticate())); 
passport.serializeUser(Account.serializeUser()); 
passport.deserializeUser(Account.deserializeUser()); 
 

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
