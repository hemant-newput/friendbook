const authService = require('../services/authService');
const errorHandler = require('../handlers/errorHandler');
const successResponse = require('../utils/response');
const homeController = {

    validateLogin: async (req, res) => {
        try {
            const userName = req.body && req.body.userName;
            const password = req.body && req.body.password;
            const response = await authService.attemptLogin(userName, password)
            successResponse(req,res,response)
        } catch (error) {
            errorHandler(req, res, error)
        }
    },
    forget: async (req, res) => {
        try {
            const userName = req.body && req.body.userName;
            const response = await authService.resetPassword(userName)
            successResponse(req,res,response)
        } catch (error) {
            errorHandler(req, res, error)
        }
    },
    signUp: async (req, res) => {
        try {
            const queryData = {
                fullName: req.body && req.body.firstName && req.body.lastName && `${req.body.firstName} ${req.body.lastName}`,
                email: req.body && req.body.email,
                phone: req.body && req.body.mobile,
                company: req.body && req.body.company,
                position: req.body.position,
                dob: req.body && req.body.dateOfBirth,
                street: req.body && req.body.street,
                city: req.body && req.body.city,
                state: req.body && req.body.state,
                country: req.body && req.body.country,
                password: req.body && req.body.password,
                confirmPassword: req.body && req.body.confirmPassword,
                gender: req.body.gender,
                martialStatus: req.body.martialStatus,
                skills: req.body.skills,
                profileImage: req.body.profileImage
            }
            const response = await authService.signUp(queryData)
            successResponse(req,res,response)
        } catch (error) {
            errorHandler(req, res, error)
        }
    },
}
module.exports = homeController;