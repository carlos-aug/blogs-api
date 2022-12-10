const express = require('express');
const userController = require('../controllers/users.controller');
const { userMid } = require('../middlewares/user.mid');

const userRoutes = express.Router();

userRoutes.post('/', userMid, userController.insertUser);

module.exports = userRoutes;