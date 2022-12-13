const { Category } = require('../models');

const insertCategory = async (name) => {
  await Category.create({
    name,
  });
};

const getCategory = async () => {
  const category = await Category.findAll();

  return { type: null, message: category };
};

module.exports = {
    insertCategory,
    getCategory,
};
