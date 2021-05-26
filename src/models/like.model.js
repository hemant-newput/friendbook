module.exports = (sequelize, Sequelize) => {
    const likeTable = sequelize.define("like_table",
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          notNull: true,
          autoIncrement: true,
          primaryKey: true
        },
        userID: {
          type: Sequelize.DataTypes.INTEGER,
          notNull: true
        },
        postID: {
          type: Sequelize.DataTypes.INTEGER,
          notNull: true
        }
      });
    return likeTable;
  }