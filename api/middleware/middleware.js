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

function validateUserLogin() {
  //KULLANICI BİLGİLERİ DB'DE MEVCUT MU?
}

module.exports = {
  validateUser,
  validateUserLogin,
};
