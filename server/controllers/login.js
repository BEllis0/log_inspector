let User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    login: (req, res) => {
        User.find({ email: req.body.email })
        .then(user => {
            //check if email address exists
            if(!user) {
                console.log('Login: User not found')
                return res.status(400).json({ message: "Email not found" });
            }

            //compare passwords
            bcrypt.compare(req.body.password, user[0].password)
            .then(isMatch => {
                if(isMatch) {
                    
                    const payload = {
                        id: user.id,
                        name: user.username
                    };

                    jwt.sign(
                        payload,
                        process.env.JWT_KEY,
                        {
                            algorithm: 'HS256',
                            expiresIn: 31556926 // 1 year in seconds
                        },
                        (err, token) => {
                            if (err) {
                                console.log('Error generating JWT in login.')
                                res.status(500).json({message: "Error logging in."});
                            }
                            console.log(`User ${user[0].username} successfully logged in`);
                            res.status(200).json({
                                success: true,
                                message: "Successfully logged in",
                                token: token,
                            });
                        }
                    );
                }
                else {
                    console.log('Password Incorrect');
                    return res
                    .status(400)
                    .json({ message: "Password incorrect" });
                }
            })
            .catch(err => {
                console.log('Error logging in: ', err);
                res.status(400).json("Error" + err)
            });
        })
        .catch(err => {
            console.log('Error logging in: ', err);
            res.status(400).json("Error: " + err)
        });
    },
};
