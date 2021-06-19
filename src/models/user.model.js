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
      email:{
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      phone:{
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      position: {
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      company:{
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
      address: {
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      city:{
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      state:{
        type: Sequelize.DataTypes.STRING,
        notNull: true
      },
      country:{
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
      company: {
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