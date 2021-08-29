const axios = require('axios');

module.exports = {
    messages: {
        post: {
            new: (req, res) => {
                // add message to db
                console.log('message received', req.body)
                console.log('host', req.hostname)
                res.json("got your message");
            },
        },
        get: {
            all: (req, res) => {
                // get messages from db
            },
        },
    },
};
