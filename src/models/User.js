const UserModel = (Sequelize, DataTypes) => {
    const User = Sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER
          },
          display_name: {
            type: DataTypes.STRING
          },
          email: {
            type: DataTypes.STRING
          },
          password: {
            type: DataTypes.STRING
          },
          image: {
            type: DataTypes.STRING
          }
    })  
    
    return User;
}

module.exports = UserModel;