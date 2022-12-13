const express = require('express');
const userController = require('../controllers/users.controller');
const { userMid, validateToken } = require('../middlewares/user.mid');

const userRoutes = express.Router();

userRoutes.post('/', userMid, userController.insertUser);

userRoutes.get('/', validateToken, userController.getUsers);

userRoutes.get('/:id', validateToken, userController.getUsersID);

module.exports = userRoutes;