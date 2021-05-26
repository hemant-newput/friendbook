module.exports = (sequelize, Sequelize) => {
    const friendTable = sequelize.define("friend_table",
      {
        userID: {
          type: Sequelize.DataTypes.INTEGER,
          notNull: true
        },
        friendID: {
          type: Sequelize.DataTypes.INTEGER,
          notNull: true
        },
        friendStatus:{
          type:Sequelize.DataTypes.BOOLEAN,
          notNull: true
        }
      });
    return friendTable;
  }