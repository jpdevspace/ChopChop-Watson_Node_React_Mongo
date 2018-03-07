const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');

const config = require('./config/config');
const routes = require("./routes");

// Setting up a port
const PORT = process.env.PORT || 3001;

// Init Express Web Server
const app = express();

// DB Setup
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

// Static Folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Middleware: Morgan (for debugging http requests)
app.use(morgan('combined'));

// Allow CORS
app.use(cors());

// Middleware: BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle routes
app.use('/', routes);

// All other routes handled with React
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Starting Web Server
app.listen( PORT, () => console.log(`🌎 ==> Server now on port ${PORT}!`) );