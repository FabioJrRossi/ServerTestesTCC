const express = require("express");
const mongodb = require("./app/config/mongodb");

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

let PORT = process.env.PORT || 1988;

require("./app/routes/board.routes.js")(server);
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
