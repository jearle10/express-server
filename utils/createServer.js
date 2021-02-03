const express = require("express");

// Create express server and use port 3000 if not env variables are set

function createServer() {
  let port = process.env.PORT || 3000;
  server = express();
  server.listen(port, () => console.log("Server listening on port 3000"));
  return server;
}

module.exports = createServer;
