const User = require('../models/user.model.js');
const { generateApiKey } = require('../util/generateApiKey.js');
const jwt = require('jsonwebtoken');

module.exports = {
    user: {
        get: {
            allUsers: (req, res)  => {

            },
            byId: (req, res) => {

            },
        },
        post: {
            new: (req, res) => {
                const { email, username, password } = req.body;

                if (!(email && password && usernname)) {
                    res.status(400).json({ message: "Missing information for registration." });
                }

                //check if email already exists
                User.findOne({ email: email })
                .then(user => {
                    if (user) {
                      return res.status(400).json({ error: "Email already exists" });
                    } else {
                        
                        const apiKey = generateApiKey().apiKey;

                        const newUser = new User({
                            email,
                            username,
                            password,
                            clientApiKey: apiKey
                        });

                        // create JWT token and add to new user
                        const token = jwt.sign(
                            { user_id: newUser._id, email },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "2h",
                            }
                        );

                        newUser.token = token;
                
                        // save user (encryption of pass in pre-save function)
                        newUser.save()
                            .then(() => res.status(201).json({ message: `Successfully created new user ${username}` }))
                            .catch(err => res.status(400).json({ message: "Error saving new user", error: err }));
                    }
                })
                .catch(err => res.status(400).json("Error " + err));
            },
        },
        update: {
            username: (req, res) => {

            },
            password: (req, res) => {

            },
            email: (req, res) => {

            },
            fields: (req, res) => {
                
            },
        },
        delete: {
            byId: (req, res) => {

            },
        },
    },
};
