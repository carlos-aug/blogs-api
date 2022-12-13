const express = require('express');
const userController = require('../controllers/users.controller');
const { userMid } = require('../middlewares/user.mid');
const validateToken = require('../middlewares/validateToken.mid');

const userRouters = express.Router();

userRouters.post('/', userMid, userController.insertUser);

userRouters.get('/', validateToken, userController.getUsers);

userRouters.get('/:id', validateToken, userController.getUsersID);

module.exports = userRouters;