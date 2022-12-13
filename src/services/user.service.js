const { User } = require('../models');

const insertUser = async (displayName, email, password, image) => {
  await User.create({
    displayName,
    email,
    password,
    image,
  });
};

const getUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

module.exports = {
  insertUser,
  getUsers,
};
