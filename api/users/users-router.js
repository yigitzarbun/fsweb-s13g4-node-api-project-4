const express = require("express");
const router = express.Router();
const md = require("./../middleware/middleware");
const users = require("./users");

let loggedInUsers = [];

router.get("/", md.logger, (req, res) => {
  res.status(200).json(users);
});

router.post("/kayitol", md.validateUser, md.logger, (req, res) => {
  let newUser = {
    id: getId(),
    username: req.username,
    password: req.password,
  };
  users.push(newUser);
  res.status(200).json(newUser);
});

router.post("/giris", md.validateUser, md.logger, (req, res) => {
  //İLK OLARAK LOGIN EKRANINDA KULLANICI BİLGİLERİ MEVCUT MU KONTROL
  //DAHA SONRA KULLANICI BİLGİLERİ DB'DE MEVCUT MU KONTROL
  let loginUser = {
    username: req.username,
    password: req.password,
  };

  let isAuth = false;

  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username === loginUser.username &&
      users[i].password === loginUser.password
    ) {
      isAuth = true;
      loggedInUsers.push(loginUser);
    }
  }
  isAuth
    ? res.status(200).json({ message: `hoşgeldin ${loginUser.username}` })
    : res.status(400).json({ message: "hatalı giriş bilgileri" });
});
module.exports = router;
