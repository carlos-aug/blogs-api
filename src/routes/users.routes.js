const express = require('express');
const userController = require('../controllers/users.controller');
const { userMid, validateToken } = require('../middlewares/user.mid');

const userRoutes = express.Router();

userRoutes.post('/', userMid, userController.insertUser);

userRoutes.get('/', validateToken, userController.getUsers);

module.exports = userRoutes;