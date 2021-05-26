const dbUtil = require("../utils/dbUtil");
const jwt = require('jsonwebtoken')
require('dotenv').config()
const authService = {
    attemptLogin: async (userName, password) => {

        try {
            const masterConn = await dbUtil.dbConnector();
            const serviceParameterData = await masterConn.query("select * from login_tables");
            let resultData = {}
            let data = {}
            for (const user of serviceParameterData[0]) {
                if (user.userName === userName) {
                    if (user.password === password) {
                        resultData = { validate: true, message: `Welcome Back ${userName}`, userID: `${user.userID}` }
                        data = user;
                        break;
                    } else {
                        resultData = { validate: false, message: `Wrong Password ${userName}..` }
                        break;
                    }
                } else {
                    resultData = { validate: false, message: `No user Found with that userName` }
                }
            }
            const userGenie = await (await dbUtil.getDBConnection()).userTable;
            const userData = await userGenie.findOne({
                where: {
                    id: data.userID
                }
            })

            const token = jwt.sign(userData.dataValues, process.env.ACCESS_TOKEN_SECRET_KEY)
            resultData['token'] = token;
            return resultData
        } catch (error) {
            return { success: false, message: 'Error Occured Contact Admin', data: error }
        }

    },
    signUp: async (queryData) => {
        for (const key in queryData) {
            console.log(key + " : " + queryData[key])
        }
        const userGenie = await (await dbUtil.getDBConnection()).userTable;
        const loginGenie = await (await dbUtil.getDBConnection()).loginTable;
        try {
            const userData = await userGenie.create({
                name: queryData.fullName,
                email: queryData.email,
                phone: queryData.phone,
                position: queryData.occupation,
                dob: queryData.dob,
                address: queryData.address,
                gender: queryData.gender,
                location: queryData.location,
                martialStatus: queryData.martialStatus,
                skills: JSON.stringify(queryData.skills),
            });
            const token = jwt.sign(userData.dataValues, process.env.ACCESS_TOKEN_SECRET_KEY)
            userData['token'] = token;
            const loginData = await loginGenie.create({
                userID: userData.id,
                userName: queryData.email,
                password: queryData.password
            })
            return { success: true, message: `Congratulations SignUp Successful. Kindly Login`, data: userData }
        } catch (err) {
            return { success: false, message: 'Error Occured Contact Admin', data: err }
        }

    }
}
module.exports = authService;