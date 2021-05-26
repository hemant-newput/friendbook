module.exports = (sequelize, Sequelize) => {
  const userTable = sequelize.define("user_table",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        notNull: true,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      position: {
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      gender: {
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      dob: {
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      location: {
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      martialStatus: {
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      skills: {
        type: Sequelize.DataTypes.TEXT,
        notNull: true
      },
      jobCompany: {
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      profileImage:{
        type: Sequelize.DataTypes.TEXT,
        notNull:true
      }
    });
    userTable.associate = function(models) {
      userTable.hasMany(models.postTable, { foreignKey: 'userid', as: 'userID' })
    };
  return userTable;
}