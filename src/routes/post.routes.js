const express = require('express');
const postController = require('../controllers/post.controller');

const validateToken = require('../middlewares/validateToken.mid');

const postRouters = express.Router();

postRouters.get('/', validateToken, postController.getAllPosts);

module.exports = postRouters;