// Import the express module and create a new instance
const createServer = require("./utils/createServer");

const server = createServer();

const bodyParser = require("body-parser");

// Add middleware
// app.use(express.static("dist")); // Returns all static sites

server.use(bodyParser.urlencoded({ extended: true })); // Parse the HTTP requests

server.use(bodyParser.json());

// Handle get requests to the root url

server.get("/", (req, res) => {
  res.json({ sucess: true, message: "Hello from node.js server" });
});

server.post("/", (req, res) => {
  res.json({ sucess: true, message: "Thanks", data: req.body });
});
