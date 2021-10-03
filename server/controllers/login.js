let User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    login: async (req, res) => {

        const { email, username, password } = req.body.data || req.body;

        // missing email
        if (!email === true) {
            return res.status(400).json({ message: "Missing email for login." });
        }

        // missing password
        if (!password === true) {
            return res.status(400).json({ message: "Missing password for login." });
        }

        const user = await User.findOne({ email: email });

        // user not found
        if (!user) {
            console.log('User email not found.')
            return res.status(400).json({ message: "Email not found." });
        }

        //compare passwords
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch) {
                
                const payload = {
                    user_id: user._id,
                    username: user.username,
                    email: user.email,
                    whitelist: user.domains,
                    company: user.company,
                };

                const token = jwt.sign(
                    payload,
                    process.env.JWT_KEY,
                    {
                        expiresIn: "15m"
                    },
                );

                // attach refresh token
                res.cookie("token", token, {
                    secure: process.env.NODE_ENV !== "development",
                    httpOnly: true,
                    sameSite: true,
                    expires: new Date(Date.now() + (60000 * 24)),
                });
                    
                return res.status(200).json({
                    success: true,
                    message: "Successfully logged in",
                    // token: token,
                    user_id: user.id
                });
            } else {
                return res.status(400).json({message: "Incorrect password."});
            }
        })
        .catch(err => {
            console.log('Error comparing passwords: ', err);
            res.status(400).json({message: "Incorrect password."});
        });

    },
};
