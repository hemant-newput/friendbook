module.exports = (sequelize, Sequelize) => {
    const postTable = sequelize.define("post_table",
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          notNull: true,
          autoIncrement: true,
          primaryKey: true
        },
        caption: {
          type: Sequelize.DataTypes.STRING,
          notNull: true
        },
        description: {
          type: Sequelize.DataTypes.STRING,
          notNull: true
        },
        numberOfLikes: {
          type: Sequelize.DataTypes.STRING,
          notNull: true
        },
        numberOfShares: {
          type: Sequelize.DataTypes.STRING,
          notNull: true
        },
        userid: {
          type: Sequelize.DataTypes.INTEGER,
          notNull: true,
        },
        image_url: {
          type: Sequelize.DataTypes.TEXT,
          notNull: true
        },
        postType: {
          type: Sequelize.DataTypes.STRING,
          notNull: true
        },
      });
      postTable.associate = function(models) {
        postTable.belongsTo(models.userTable, { foreignKey: 'id', as: 'userID' })
      };
    return postTable;
  }
