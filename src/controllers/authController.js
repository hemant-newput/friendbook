const authService = require('../services/authService');
const { postTable, dbConnector, getDBConnection } = require('../utils/dbUtil');
const homeController = {

    validateLogin: async (req, res) => {
        const userName = req.body && req.body.userName;
        const password = req.body && req.body.password;
        const response = await authService.attemptLogin(userName, password)
        res.send(response)
    },
    signUp: async (req, res) => {
        const queryData = {
            fullName: req.body && req.body.fullName,
            email: req.body && req.body.email,
            phone: req.body && req.body.phone,
            occupation: req.body && req.body.occupation,
            dob: req.body && req.body.dob,
            address: req.body && req.body.address,
            password: req.body && req.body.password,
            confirmPassword: req.body && req.body.confirmPassword,
            gender: 'Male',
            location: 'Ayodhya',
            martialStatus: 'Unmarried',
            skills: { skills: ['python', 'Javascript'] }

        }
        const response = await authService.signUp(queryData)
        res.send(response)
    },
    test: async (req, res) => {
       try {
           const postGenie = await postTable();
        res.send( await  postGenie.findAll({}))
       } catch (error) {
           console.log(error)
       }
    },
}
module.exports = homeController;