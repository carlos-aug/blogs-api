const express = require('express');
const categoryController = require('../controllers/categories.controller');
const validateToken = require('../middlewares/validateToken.mid');

const categoryRouters = express.Router();

categoryRouters.post('/', validateToken, categoryController.insertCategory);

categoryRouters.get('/', validateToken, categoryController.getCategory);

module.exports = categoryRouters;