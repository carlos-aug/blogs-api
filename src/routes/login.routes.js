const express = require('express');
const loginController = require('../controllers/login.controller');
const { loginMid } = require('../middlewares/login.mid');

const loginRouters = express.Router();

loginRouters.post('/', loginMid, loginController.login);

// routers.post('/', .);

module.exports = loginRouters;