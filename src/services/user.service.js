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

const getUsersID = async (id) => {
  const userId = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  return userId;
};

module.exports = {
  insertUser,
  getUsers,
  getUsersID,
};
