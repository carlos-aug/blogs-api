const express = require('express');
const categoryController = require('../controllers/categories.controller');
const { validateToken } = require('../middlewares/user.mid');

const categoryRouters = express.Router();

categoryRouters.post('/', validateToken, categoryController.insertCategory);

module.exports = categoryRouters;