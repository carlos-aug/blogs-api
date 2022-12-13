const category = require('../services/categories.service');

const insertCategory = async (req, res) => {
  const { name } = req.body;

  await category.insertCategory(name);

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  res.status(201).json({ name });
};

module.exports = {
  insertCategory,
};
