const Sequelize = require('sequelize') // this is the main instance  we  use this when ever we have to use Sequelize properties like datatypes
const config = require("../../config/config");
require('dotenv').config()
const loginSeeder = require('../models/seedValues/login.seed');
const userSeeder = require('../models/seedValues/user.seed');
const likeSeeder = require('../models/seedValues/like.seed');
const postSeeder = require('../models/seedValues/post.seed');
const friendSeeder = require('../models/seedValues/friend.seed');
const shareSeeder = require('../models/seedValues/share.seed');
const getDBInstanceByConnection = async (sequelize) => {
    const Sequelize = require("sequelize");
    const db = {};
    db.sequelize = sequelize;
    db.loginTable = require("../models/login.model")(sequelize, Sequelize);
    db.userTable = require("../models/user.model")(sequelize, Sequelize);
    db.likeTable = require("../models/like.model")(sequelize, Sequelize);
    db.postTable = require("../models/post.model")(sequelize, Sequelize);
    db.friendTable = require("../models/friend.model")(sequelize, Sequelize);
    db.shareTable = require("../models/share.model")(sequelize, Sequelize);

    // either use hasone or belongTO
    db.loginTable.hasOne(db.userTable, { foreignKey: 'id', sourceKey: 'userID', as: 'user' }); // hasone says that forign key is in target model
    // db.loginTable.belongsTo(db.userTable,{foreignKey:'userID',as:'userTable'}) // belongsTo says that forign key is in source model
    db.userTable.hasMany(db.postTable, { foreignKey: 'userid', sourceKey: 'id', as: "posts" });
    db.postTable.hasOne(db.userTable, { foreignKey: "id", sourceKey: "userid", as: "user" });
    db.postTable.hasMany(db.likeTable, { foreignKey: "userID", sourceKey: "userid", as: "likes" });
    db.postTable.hasMany(db.shareTable, { foreignKey: "userID", sourceKey: "userid", as: "shares" });
    db.userTable.hasMany(db.friendTable, { foreignKey: "userID", sourceKey: "id", as: "friends" });
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
        const sequelize = new Sequelize(
            process.env.DATABASE_URL,
            {
                dialectOptions: {
                    ssl: {
                        require: true,
                        rejectUnauthorized: false // <<<<<<< YOU NEED THIS
                    }
                },
                pool: {
                    idle: 10000, // milliseconds
                    evict: 20000, // milliseconds
                  }
            }
        );
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

const dbConnector = async () => {
    // const sequelize = new Sequelize(
    //     config.DATABASE,
    //     config.DATABASE_USER,
    //     config.DATABASE_PASSWORD,
    //     {
    //         dialect: 'postgres',
    //         host: config.DATABASE_HOST,
    //         port: config.POST,
    //         logging: true
    //     },
    // );
    const sequelize = new Sequelize(
        process.env.DATABASE_URL,
        {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false // <<<<<<< YOU NEED THIS
                }
            },
            pool: {
                idle: 10000, // milliseconds
                evict: 20000, // milliseconds
              }
        }
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
    const loginTable = await sequelize.loginTable
    return loginTable;
}

const userTable = async () => {
    const sequelize = await getDBConnection();
    const userTable = await sequelize.userTable
    return userTable
}

const likeTable = async () => {
    const sequelize = await getDBConnection();
    const likeTable = await sequelize.likeTable
    return likeTable
}
const postTable = async () => {
    const sequelize = await getDBConnection();
    const postTable = await sequelize.postTable
    return postTable
}
const friendTable = async () => {
    const sequelize = await getDBConnection();
    const friendTable = await sequelize.friendTable
    return friendTable
}
const shareTable = async () => {
    const sequelize = await getDBConnection();
    const shareTable = await sequelize.shareTable
    return shareTable
}


const syncSequelize = async (sequelize) => {
    await sequelize.sync({ alter: true })
        .then(() => {
            console.log(`Database & Tables created!`);
        })
        .catch(err => {
            console.error('Unable to create table and database:', err);
        });
}

const seeder = async () => {
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
    const sequelize = new Sequelize(
        process.env.DATABASE_URL,
        {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false // <<<<<<< YOU NEED THIS
                },      
            },
            pool: {
                idle: 10000, // milliseconds
                evict: 20000, // milliseconds
              }
        }
    );
    sequelize
        .authenticate()   // simple promise that tells wheather connection true of not   
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    // const db = await getDBInstanceByConnectionSeeder();
    const userTable = require("../models/user.model")(sequelize, Sequelize);
    await syncSequelize(sequelize);
    await userSeeder.seedUserValues(userTable);

    const loginTable = require("../models/login.model")(sequelize, Sequelize);
    await syncSequelize(sequelize);
    await loginSeeder.seedLoginValues(loginTable);

    const likeTable = require("../models/like.model")(sequelize, Sequelize);
    await syncSequelize(sequelize);
    await likeSeeder.seedLikeValues(likeTable);

    const postTable = require("../models/post.model")(sequelize, Sequelize);
    await syncSequelize(sequelize);
    await postSeeder.seedPostValues(postTable);

    const friendTable = require("../models/friend.model")(sequelize, Sequelize);
    await syncSequelize(sequelize);
    await friendSeeder.seedFriendValues(friendTable);

    const shareTable = require("../models/share.model")(sequelize, Sequelize);
    await syncSequelize(sequelize);
    await shareSeeder.seedShareValues(shareTable);
}

const deleter = async () => {
    const connection = await dbConnector();
    await connection.query("drop table login_Tables;drop table post_Tables;drop table user_Tables;drop table like_Tables;drop table share_Tables;drop table friend_Tables");
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
    deleter
}
