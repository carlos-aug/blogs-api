const category = require('../services/categories.service');

const insertCategory = async (req, res) => {
  const { name } = req.body;

  await category.insertCategory(name);

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  res.status(201).json({ name });
};

const getCategory = async (req, res) => {
    const { type, message } = await category.getCategory();

    if (type) {
        return res.status(type).json({ message });
    }

    return res.status(200).json(message);
};

module.exports = {
  insertCategory,
  getCategory,
};
