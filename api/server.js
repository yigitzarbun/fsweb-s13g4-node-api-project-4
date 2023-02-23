const express = require("express");
const server = express();
server.use(express.json());
require("dotenv").config();

const usersRouter = require("./users/users-router");

server.use("/users", usersRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: process.env.MESSAGE || "Hey server is up and running..",
  });
});

module.exports = server;
