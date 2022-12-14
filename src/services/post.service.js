const { BlogPost, Category, User } = require('../models');

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { as: 'user', attributes: { exclude: ['password'] }, model: User },
      { as: 'categories', model: Category, through: { attributes: [] } },
    ],
  });

  return { type: null, message: allPosts };
};

module.exports = { getAllPosts };
