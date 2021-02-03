const express = require("express");

function createSever() {
  let port = process.env.PORT || 3000;
  server = express();
  server.listen(port, () => console.log("Server listening on port 3000"));
  return server;
}

module.exports = createSever;
