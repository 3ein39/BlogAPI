const jwt = require('jsonwebtoken');
const config = require('config'); // You can use a configuration file for secrets
const { User } = require('./models/user'); // Import your User model
const secretKey = config.get('jwtSecret');

// Middleware function to authenticate the user
const authMiddleware = async (req, res, next) => {
    // Get the token from the request header
    let token = req.header('x-auth-token');
    console.log(token);
    // Check if a token was provided
    if (!token) {
        return res.status(401).json({ msg: 'Access denied. No token provided.' });
    }

    try {
        jwt.verify(token,secretKey,(err,user) => {
            if (err) return res.status(403).json("token is not valid")
            console.log(user);
            req.user = user;
            next();
        })
    } catch (error) {
        return res.status(401).json(error);
    }
};

module.exports = authMiddleware;
