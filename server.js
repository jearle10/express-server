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
  res.send("<h1> Hello World </h1>"); // Send a response
});

// Handle get requests to an additional url
app.get("/contact", function(req, res) {
  res.send("Welcome to the about page");
});
