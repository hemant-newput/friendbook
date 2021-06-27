const dbUtil = require("../utils/dbUtil");
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const { google } = require("googleapis")
const { v4: uuidv4 } = require('uuid');
const CustomError = require("../utils/customError");
require('dotenv').config()
const authService = {
    attemptLogin: async (userName, password) => {
        try {
            const loginGenie = await dbUtil.loginTable();
            const userGenie = await dbUtil.userTable();
            const serviceParameterData = await loginGenie.findAll({})
            for (const user of serviceParameterData) {
                if (user.userName === userName) {
                    if (user.password === password) {
                        const userData = await userGenie.findOne({
                            where: { id: user.userID }
                        })
                        const token = jwt.sign(userData && userData.dataValues, process.env.ACCESS_TOKEN_SECRET_KEY)
                        return {
                            customMessage: `Welcome Back ${userName}`,
                            data: {
                                userID: `${user.userID}`,
                                token: token
                            }
                        }
                    } else {
                        throw new Error(`Wrong Password ${userName}`);
                    }
                } else {
                    throw new Error(`No user Found with that userName`);
                }
            }
        } catch (error) {
            throw new CustomError(error, error.message || "Error while login contact admin or try resetting your password");
        }
    },
    resetPassword: async (queryData) => {
        try {
            const loginGenie = await dbUtil.loginTable();
            const loginUser = await loginGenie.findOne({
                where: {
                    userName: queryData
                }
            })
            if (!loginUser) {
                throw new Error("Invalid Username")
            }
            const CLIENT_ID = process.env.CLIENT_ID;
            const CLIENT_SECRET = process.env.CLIENT_SECRET;
            const REDIRECT_URL = process.env.REDIRECT_URL;
            const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
            const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
            oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

            const accessToken = await oAuth2Client.getAccessToken();
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: "OAUTH2",
                    user: "hemant@newput.com",
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken,
                }
            })
            const newPassword = uuidv4();
            var mailOptions = {
                from: 'shrivastava.hemant7415@gmail.com',
                to: queryData,
                subject: 'RESET PASSWORD',
                text: `Its Okay It happens!! Here is your new password: ${newPassword}`
            };

            await transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            await loginGenie.update({ password: newPassword }, { where: { userName: queryData } })
            return {
                customMessage: "Password reset Successful. Please check your Email",
                data: {}
            }
        } catch (error) {
            throw new CustomError(error, error.message || "Error while resetting password Please contact admin");
        }
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
            return {
                customMessage: "Congratulations SignUp Successful. Kindly Login",
                data: userData
            }
        } catch (err) {
            throw new CustomError(error, error.message || "Error while Signing Up Please contact admin ");
        }

    }
}
module.exports = authService;