const jwt = require('jsonwebtoken');

module.exports = {
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