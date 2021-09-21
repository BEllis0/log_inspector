let User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    login: (req, res) => {

        const { email, username, password } = req.body.data;

        if (!(email && password)) {
            res.status(400).send({ message: "Missing email or password for login." });
        }

        User.find({ email })
        .then(user => {
            //check if email address exists
            if(!user) {
                console.log('Login: User not found')
                return res.status(400).json({ message: "Email not found" });
            }

            //compare passwords
            bcrypt.compare(password, user[0].password)
            .then(isMatch => {
                if(isMatch) {
                    
                    const payload = {
                        user_id: user[0]._id,
                        username: user[0].username,
                        email: user[0].email,
                        whitelist: user[0].domains,
                        company: user[0].company,
                    };

                    const token = jwt.sign(
                        payload,
                        process.env.JWT_KEY,
                        {
                            expiresIn: "15m" // 1 year in seconds
                        },
                    );

                    // attach refresh token
                    res.cookie("refreshToken", user[0]._id, {
                        secure: process.env.NODE_ENV !== "development",
                        httpOnly: true,
                        expires: new Date(Date.now() + (60000 * 24)),
                    });
                        
                    res.status(200).json({
                        success: true,
                        message: "Successfully logged in",
                        token: token,
                        cookie: res.cookie
                    });
                }
            })
            .catch(err => {
                console.log('Error logging in: ', err);
                res.status(400).json({message: "Incorrect password."});
            });
        })
        .catch(err => {
            console.log('Error logging in: ', err);
            res.status(400).json({message: "Email not found."});
        });
    },
};
