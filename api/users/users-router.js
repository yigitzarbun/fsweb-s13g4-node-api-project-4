const express = require("express");
const router = express.Router();

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

router.post("/kayitol", (req, res) => {
  let newUser = {
    id: getId(),
    username: req.body.username,
    password: req.body.password,
  };
  users.push(newUser);
  res.status(200).json(newUser);
});

module.exports = router;
