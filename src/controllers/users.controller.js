const user = require('../services/user.service');
const { User } = require('../models');
const { createToken } = require('../auth/auth');

const insertUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const userExist = await User.findOne({ where: { email } });

  if (userExist) {
    return res.status(409).json({ message: 'User already registered' });
  }

  await user.insertUser(displayName, email, password, image);

  const token = createToken(email);

  res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const users = await user.getUsers();

  return res.status(200).json(users);
};

const getUsersID = async (req, res) => {
  const { id } = req.params;
  const userID = await user.getUsersID(id);

  if (!userID) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(userID);
};

module.exports = {
  insertUser,
  getUsers,
  getUsersID,
};
