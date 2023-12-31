module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: DataTypes.STRING,
        },
        content: {
          type: DataTypes.STRING,
        },
        userId: {
          type: DataTypes.INTEGER,
          foreignKey: true,
        },
        published: {
          type: DataTypes.DATE,
        },
        updated: {
            type: DataTypes.DATE,
          },
      }, {
        // sequelize,
        underscored: true,
        timestamps: false,
        tableName: 'blog_posts',
      });

      BlogPost.associate = (models) => {
        BlogPost.belongsTo( models.User, {
            foreignKey: 'user_id', as: 'user'
        })
      }
  
    return BlogPost;
  };