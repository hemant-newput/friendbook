module.exports = (sequelize, Sequelize) => {
  const LoginTable = sequelize.define("login_table",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        notNull: true,
        autoIncrement: true,
        primaryKey: true
      },
      userID: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
      },
      userName: {
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        notNull: true
      }
    });
 
  return LoginTable
}