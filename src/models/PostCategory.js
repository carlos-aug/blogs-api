module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      // sequelize,
      underscored: true,
      timestamps: false,
      tableName: "posts_categories",
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: "category_id",
      as: "categories",
      through: PostCategory,
      otherKey: "post_id",
    });

    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: "post_id",
      as: "blog_posts",
      through: PostCategory,
      otherKey: "category_id",
    });
  };

  return PostCategory;
};
