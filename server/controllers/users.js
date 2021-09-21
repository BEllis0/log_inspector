const User = require('../models/user.model.js');
const { generateApiKey } = require('../util/generateApiKey.js');
const jwt = require('jsonwebtoken');

module.exports = {
    user: {
        get: {
            byId: (req, res) => {
                const { user_id } = req.user;
                User.findById(user_id)
                    .then(user => {
                        const { email, username, group, company, domains } = user;
                        const payload = {
                            email,
                            username,
                            group,
                            company,
                            domains
                        };

                        res.status(200).json(payload);
                    })
                    .catch(err => {
                        res.status(400).json({message: "User not found", error: err});
                    });
            },
        },
        post: {
            new: (req, res) => {
                const { email, username, password, firstName, lastName } = req.body.data;
                
                if (!(email && password && username)) {
                    res.status(400).json({ message: "Missing information for registration." });
                }

                //check if email or username already exists
                const checkExistingEmail = User.findOne({ email: email });
                const checkExistingUsername = User.findOne({ username: username });

                Promise.all([checkExistingEmail, checkExistingUsername])
                .then(user => {
                    // if user is found
                    if (user[0] || user[1]) {
                      return res.status(400).json({ error: user[0] ? "Email already exists." : "Username already exists." });
                    } 
                        
                    const apiKey = generateApiKey().apiKey;

                    const newUser = new User({
                        email,
                        firstName,
                        lastName,
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
            
                    // save user (encryption of pass in pre-save function)
                    newUser.save()
                        .then(() => res.status(201).json({ message: `Successfully created new user ${username}` }))
                        .catch(err => res.status(400).json({ message: "Error saving new user", error: err }));
                    
                })
                .catch(err => res.status(400).json("Error " + err));
            },
        },
        update: {
            username: (req, res) => {
                const { user_id } = req.user;
                const { username } = req.body;
                User.findByIdAndUpdate(user_id, { username })
                    .then(response => {
                        res.status(200).json({message: "Username successfully updated.", data: username });
                    })
                    .catch(err => {
                        console.log('Error updating username', err);
                        res.status(400).json({message: "Error updating username"});
                    });
            },
            password: (req, res) => {
                const { user_id } = req.user;
                const { password } = req.body;
                User.findByIdAndUpdate(user_id, { password })
                    .then(response => {
                        res.status(200).json({message: "Password successfully updated." });
                    })
                    .catch(err => {
                        console.log('Error updating password', err);
                        res.status(400).json({message: "Error updating password"});
                    });
            },
            email: (req, res) => {
                const { user_id } = req.user;
                const { email } = req.body;
                User.findByIdAndUpdate(user_id, { email })
                    .then(response => {
                        res.status(200).json({message: "Email successfully updated.", data: email });
                    })
                    .catch(err => {
                        console.log('Error updating email', err);
                        res.status(400).json({message: "Error updating email"});
                    });
            },
            fields: (req, res) => {
                
            },
        },
        delete: {
            byId: (req, res) => {
                const { user_id } = req.user;
                User.findByIdAndDelete(user_id)
                    .then(response => {
                        res.status(200).json({message: "User successfully deleted." });
                    })
                    .catch(err => {
                        console.log('Error deleting user', err);
                        res.status(400).json({message: "Error deleting user"});
                    });
            },
        },
    },
};
