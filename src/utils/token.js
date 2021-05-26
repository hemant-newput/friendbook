const jwt = require('jsonwebtoken')
require('dotenv').config()
//Format of Token
const verifyToken = function verifyToken(req, res, next) {
    //get auth header value
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== undefined) {
        const token = bearerHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, token) => {
            if (err) {
                res.sendStatus(403) // we see u have a token but that is no longer valid
            }
            req.token = token;
        })
        next();
    }
    else {
        res.sendStatus(401) // u dont have a token bro
    }
}

module.exports = {
    verifyToken
}
