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
  {
    id: getId(),
    username: "dilara",
    password: 1234,
  },
];

module.exports = users;
