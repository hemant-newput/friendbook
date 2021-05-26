const Sequelize = require('sequelize') // this is the main instance  we  use this when ever we have to use Sequelize properties like datatypes
const config = require("../../config/config");
const loginSeeder = require('../models/seedValues/login.seed');
const userSeeder = require('../models/seedValues/user.seed');
const likeSeeder = require('../models/seedValues/like.seed');
const postSeeder = require('../models/seedValues/post.seed');
const friendSeeder = require('../models/seedValues/friend.seed');
const shareSeeder = require('../models/seedValues/share.seed');
const getDBInstanceByConnection = async(sequelize) => {
    const Sequelize = require("sequelize");
    const db = {};
    db.sequelize = sequelize;
    db.loginTable = require("../models/login.model")(sequelize, Sequelize);
    await syncSequelize(sequelize);
    db.userTable = require("../models/user.model")(sequelize, Sequelize);
    await syncSequelize(sequelize);
    db.likeTable = require("../models/like.model")(sequelize, Sequelize);
    await syncSequelize(sequelize);
    db.postTable = require("../models/post.model")(sequelize, Sequelize);
    await syncSequelize(sequelize);
    db.friendTable = require("../models/friend.model")(sequelize, Sequelize);
    await syncSequelize(sequelize);
    db.shareTable = require("../models/share.model")(sequelize, Sequelize);
    await syncSequelize(sequelize);

    // either use hasone or belongTO
    db.loginTable.hasOne(db.userTable,{foreignKey:'id',as:'userTable'}) // hasone says that forign key is in target model
    // db.loginTable.belongsTo(db.userTable,{foreignKey:'userID',as:'userTable'}) // hasone says that forign key is in source model
    db.postTable.belongsTo(db.userTable,{foreignKey:"userid"})
    // db.userTable.belongsTo(db.postTable,{foreignKey:"id"})
    // db.userTable.hasMany(db.postTable,{foreignKey:"id", as:"userTable"})   
    return db
}

const getDBConnection = async () => {
    try {
        // const sequelize = new Sequelize(
        //     config.DATABASE,
        //     config.DATABASE_USER,
        //     config.DATABASE_PASSWORD,
        //     {
        //         dialect: 'postgres',
        //         host: config.DATABASE_HOST,
        //         port: config.POST,
        //         logging: false
        //     },
        // );
        const sequelize = new Sequelize(process.env.DATABASE_URL);
        sequelize
            .authenticate()   // simple promise that tells wheather connection true of not   
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });

        return await getDBInstanceByConnection(sequelize);

    }
    catch (err) {
        console.log('Error getting tenant connection, db.js');
        return Promise.reject(err);
    }
};

const dbConnector = async()=>{
    const sequelize = new Sequelize(
        config.DATABASE,
        config.DATABASE_USER,
        config.DATABASE_PASSWORD,
        {
            dialect: 'postgres',
            host: config.DATABASE_HOST,
            port: config.POST,
            logging: true
        },
    );
    sequelize
        .authenticate()   // simple promise that tells wheather connection true of not   
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
        return sequelize;
}
const loginTable = async () => {

    const sequelize = await getDBConnection();
    const loginTable = await getDBInstanceByConnection(sequelize).loginTable;
    return loginTable;
}

const userTable = async () => {

    const sequelize = await getDBConnection();
    const userTable = await getDBInstanceByConnection(sequelize).userTable;
    return userTable
}

const likeTable = async () => {

    const sequelize = await getDBConnection();
    const likeTable = await getDBInstanceByConnection(sequelize).likeTable;
    return likeTable
}
const postTable = async () => {

    const sequelize = await getDBConnection();
    const postTable =await  getDBInstanceByConnection(sequelize).postTable;
    return postTable
}
const friendTable = async () => {

    const sequelize = await getDBConnection();
    const friendTable = await getDBInstanceByConnection(sequelize)
    return friendTable
}
const shareTable = async () => {

    const sequelize = await getDBConnection();
    const shareTable = await getDBInstanceByConnection(sequelize)
    return shareTable
}


const syncSequelize = async (sequelize) => {
    await sequelize.sync({ alter: true })
        .then(() => {
            console.log(`Database & tables created!`);
        })
        .catch(err => {
            console.error('Unable to create table and database:', err);
        });
}

const seeder = async () => {
    const sequelize = new Sequelize(
        config.DATABASE,
        config.DATABASE_USER,
        config.DATABASE_PASSWORD,
        {
            dialect: 'postgres',
            host: config.DATABASE_HOST,
            port: config.POST,
            logging: false
        },
    );
    sequelize
        .authenticate()   // simple promise that tells wheather connection true of not   
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    const db = await getDBConnection();
    const userTable = db.userTable;
    await syncSequelize(sequelize);
    await userSeeder.seedUserValues(userTable);

    const loginTable = db.loginTable;
    await syncSequelize(sequelize);
    await loginSeeder.seedLoginValues(loginTable);

    const likeTable = db.likeTable;
    await syncSequelize(sequelize);
    await likeSeeder.seedLikeValues(likeTable);

    const postTable = db.postTable;
    await syncSequelize(sequelize);
    await postSeeder.seedPostValues(postTable);

    const friendTable = db.friendTable;
    await syncSequelize(sequelize);
    await friendSeeder.seedFriendValues(friendTable);

    const shareTable = db.shareTable;
    await syncSequelize(sequelize);
    await shareSeeder.seedShareValues(shareTable);
}

module.exports =
{
    getDBConnection,
    userTable,
    loginTable,
    likeTable,
    postTable,
    dbConnector,
    friendTable,
    shareTable,
    seeder,
    
}
