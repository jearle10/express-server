// Import the express module and create a new instance

const express = require("express");
const app = express();

// Add middleware to return all site static files
app.use(express.static("dist"));

// Instruct the app to listen on port 3000

app.listen(3000, function() {
  console.log("Server listening on port 3000"); // Call back when server listening
});

// Handle get requests to the root url

app.get("/", function(req, res) {
  // res.send("Hello World") Send a none file response

  res.sendFile(__dirname + "/index.html");
});

// Store the about route in const

const route = "/about";

// Handle get requests to an additional url

app.get(`${route}`, function(req, res) {
  res.send("Welcome to the about page");
});
