const jwt = require('jsonwebtoken');

module.exports = {
    get: {
        // poll the server for token expiration
        poll: (req, res) => {
            // if req makes it to this handler, just send success
            res.status(200).end();
        }
    },
    post: {
        refresh: (req, res) => {
            console.log(req)
            // look for httpOnly refresh cookie
            if (req.cookies) {
                const newToken = jwt.sign(
                    { id: req.cookies.refreshToken._id },
                    process.env.JWT_KEY
                );

                res.status(201).json({
                    message: "new token created",
                    token: newToken
                });
            } else {
                req.status(401).json({ message: "Token expired. Please log in again." });
            }
        },
    },
};