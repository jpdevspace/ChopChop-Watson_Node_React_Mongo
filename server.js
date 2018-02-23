const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const routes = require("./routes");
const session = require('express-session');
// Setting up a port
const PORT = process.env.PORT || 3001;

// Init Express Web Server
const app = express();

// Static Folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Express Session Middleware (allows testing in development but secured cookies in production)
const sess = {
  secret: 'cheffWKeyseGura',
  cookie: {}
}
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess));


// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cheffW");

// Handle routes
app.use('/', routes);

// All other routes handled with React
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Starting Web Server
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});