const dbUtil = require("../utils/dbUtil");
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shrivastava.hemant7415@gmail.com',
        pass: 'hemant13245'
    }
});
require('dotenv').config()
const authService = {
    attemptLogin: async (userName, password) => {

        try {
            const loginGenie = await dbUtil.loginTable();
            const serviceParameterData = await loginGenie.findAll({})
            let resultData = {}
            let data = {}
            for (const user of serviceParameterData) {
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
            let userData;
            if (data && data.userID) {
                const userGenie = await dbUtil.userTable();
                userData = await userGenie.findOne({
                    where: {
                        id: data.userID
                    }
                })
            }

            const token = jwt.sign(userData.dataValues, process.env.ACCESS_TOKEN_SECRET_KEY)
            resultData['token'] = token;
            return resultData
        } catch (error) {
            return { success: false, message: 'Error Occured Contact Admin', data: error }
        }

    },
    resetPassword: async (queryData) => {
        const userGenie = await dbUtil.userTable();
        const postGenie = await dbUtil.postTable();
        const likeGenie = await dbUtil.likeTable();
        const shareGenie = await dbUtil.shareTable();
        const userData = await userGenie.findOne({
            where: {
                id: queryData
            },
            include: [{
                model: postGenie,
                as: "posts",
                required: false,
                where: {
                 userid: queryData
                },
                include:[{
                    model: likeGenie,
                    as: "likes",
                    required: false,
                    where: {
                     userID: queryData
                    },  
                },{
                    model: shareGenie,
                    as: "shares",
                    required: false,
                    where: {
                     userID: queryData
                    },
                }]
        }]
    });
        console.log(userData)
        // console.log("HELLLO")

        // var mailOptions = {
        //     from: 'shrivastava.hemant7415@gmail.com',
        //     to: queryData,
        //     subject: 'Sending Email using Node.js',
        //     text: 'That was easy!'
        // };

        // await transporter.sendMail(mailOptions, function (error, info) {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //     }
        // });
    },
    signUp: async (queryData) => {
        for (const key in queryData) {
            console.log(key + " : " + queryData[key])
        }
        const userGenie = await dbUtil.userTable();
        const loginGenie = await dbUtil.loginTable();
        try {
            const userData = await userGenie.create({
                name: queryData.fullName,
                email: queryData.email,
                phone: queryData.phone,
                position: queryData.position,
                company: queryData.company,
                dob: queryData.dob,
                address: queryData.street,
                city: queryData.city,
                state: queryData.state,
                country: queryData.country,
                gender: queryData.gender,
                martialStatus: queryData.martialStatus,
                skills: JSON.stringify(queryData.skills),
                profileImage: queryData.profileImage
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