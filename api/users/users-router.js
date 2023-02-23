const express = require("express");
const router = express.Router();
const md = require("./../middleware/middleware");

let id = 0;
getId = () => ++id;

const users = [
  {
    id: getId(),
    username: "yigit",
    password: 1234,
  },
  {
    id: getId(),
    username: "ali",
    password: 1234,
  },
  {
    id: getId(),
    username: "ayşe",
    password: 1234,
  },
];

router.get("/", (req, res) => {
  res.status(200).json(users);
});

router.post("/kayitol", md.validateUser, (req, res) => {
  let newUser = {
    id: getId(),
    username: req.username,
    password: req.password,
  };
  users.push(newUser);
  res.status(200).json(newUser);
});

module.exports = router;
