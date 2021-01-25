// Import the express module and create a new instance

const express = require("express");
const app = express();

const bodyParser = require("body-parser");


// Add middleware
// app.use(express.static("dist")); // Returns all static sites

app.use(bodyParser.urlencoded({ extended: true })); // Parse the HTTP requests

app.use(bodyParser.json())

// Instruct the app to listen on port 3000

app.listen(3000, () => {
  console.log(`Server listening on port 3000`); // Call back when server listening
});

// Handle get requests to the root url

app.get("/", (req, res) => {
  console.log(``${req.method}:`)
  res.json({ sucess: true, message: "Hello from node.js server" });
});

app.post("/", (req, res) => {
  console.log(req.body.);

  res.json({ sucess: true, message: "Thanks", data: req.body });
});

