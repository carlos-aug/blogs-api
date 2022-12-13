const { Category } = require('../models');

const insertCategory = async (name) => {
  await Category.create({
    name,
  });
};

module.exports = {
    insertCategory,
};
