
let users = [];

const addUser = (user) => {
  users.push(user);
};

const getUser = (username) => {
  return users.find((user) => user.username === username);
};

const getActiveUserCount = () => {
  return users.length;
};

module.exports = { addUser, getUser, getActiveUserCount };
