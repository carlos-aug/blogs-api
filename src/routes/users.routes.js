const express = require('express');
const loginController = require('../controllers/login.controller');
const { loginMid } = require('../middlewares/login.mid');

const routers = express.Router();

routers.post('/', loginMid, loginController.login);

module.exports = routers;