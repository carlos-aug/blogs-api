"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("posts_categories", {
      post_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: "post_id",
        references: {
          model: "blog_posts",
          key: "id"
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: "category_id",
        references: {
          model: "categories",
          key: "id"
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("posts_categories");
  },
};
