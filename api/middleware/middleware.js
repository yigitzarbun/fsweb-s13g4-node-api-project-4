const users = require("./../users/users");

function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const timeStamp = new Date().toLocaleString();
  console.log(`${method} -- ${url} -- ${timeStamp}`);
  next();
}

function validateUser(req, res, next) {
  //YENİ OLUŞTURULAN KULLANICI BİLGİLERİ MEVCUT MU?
  const { username } = req.body;
  const { password } = req.body;
  if (username && password) {
    req.username = username;
    req.password = password;
    next();
  } else {
    res.status(400).json({ message: "gerekli bilgiler eksik" });
  }
}

function validateUserLogin(req, res, next) {
  //KULLANICI BİLGİLERİ DB'DE MEVCUT MU?
  /*let isAuthUser = false;
  const { username } = req.body;
  const { password } = req.body;
  let loginUser = {
    username: username,
    password: password,
  };
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username === loginUser.username &&
      users[i].password === loginUser.password
    ) {
      isAuthUser = true;
      next();
    }
  }*/
}

module.exports = {
  logger,
  validateUser,
  validateUserLogin,
};
