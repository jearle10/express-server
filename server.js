// Import the express module and create a new instance

const express = require("express");
const app = express();

// Instruct the app to listen on port 3000

app.listen(3000, function() {
  console.log("Server listening on port 3000"); // Call back when server listening
});

// Handle get requests to the root url

app.get("/", function(req, res) {
  console.log(req); // Log the request
  // res.send("Hello World") Send a none file response
  res.sendFile(__dirname + "/index.html"); // Send a response
});

const route = "/about"; // Store the about route in const

// Handle get requests to an additional url
app.get(`${route}`, function(req, res) {
  res.send("Welcome to the about page");
});
