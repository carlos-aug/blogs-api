const postService = require('../services/post.service');

const getAllPosts = async (_req, res) => {
  const { type, message } = await postService.getAllPosts();

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

module.exports = { getAllPosts };
