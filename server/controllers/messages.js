const Message = require('../models/message.model.js');
const { messageValidation } = require('../util/messageValidation.js');

module.exports = {
    messages: {
        post: {
            new: (req, res) => {
                messageValidation(req.get('apiKey'), req.hostname)
                    .then(validatedPerson => {
                        console.log(req.headers.referer)
                        const convertMessagesToArr = () => {
                            let messageArr = [];
                            for(let message in req.body.message) {
                                messageArr.push(req.body.message[message]);
                            }
                            return messageArr;
                        }

                        const messagePayload = {
                            siteName: req.body.siteName || null,
                            environment: req.body.environment || null,
                            channel: req.body.channel || null,
                            domain: req.hostname,
                            ownerId: validatedPerson.personId || undefined, // returned from validation process
                            page: req.headers.referer || null,
                            message: convertMessagesToArr() || null,
                            type: req.body.type || null,
                            priorityLevel: req.body.priorityLevel || null,
                            severity: req.body.severity || null,
                            status: req.body.status || null,
                            context: req.body.context || null,
                            description: req.body.description || null,
                            projectTicketUrl: req.body.projectTicketUrl || null
                        };

                        const newMessage = Message(messagePayload);

                        newMessage.save()
                            .then(() => res.status(200).json({ message: "Message saved" }))
                            .catch(err => {
                                console.log("Error saving message", err);
                                res.status(500).json({ message: "Error saving message", error: err });
                            });
                    })
                    .catch(err => {
                        return res.status(403).json(err);
                    });
            },
        },
        get: {
            byUser: (req, res) => {
                const { user } = req;

                Message.find({ ownerId: user.user_id })
                    .then(messages => {
                        res.status(200).json(messages);
                    })
                    .catch(err => {
                        console.log('Error getting messages from logged in user: ', err);
                        res.status(400).json({message: "Error getting messages."});
                    });
            },
            byId: (req, res) => {
                const { user } = req;
                const { id } = req.params;

                Message.findById(id)
                    .then(message => {
                        res.status(200).json(message);
                    })
                    .catch(err => {
                        console.log('Error getting messages from logged in user: ', err);
                        res.status(400).json({ message: "Error getting message." });
                    });
            },
        },
        patch: {

        },
        delete: {
            byIds: (req, res) => {
                const { user } = req;
                const { messageIds } = req.body.data || req.body;
                
                messageIds

                Message.deleteMany(
                    {
                        _id: {
                          $in: messageIds
                        }
                    },
                    function(err, result) {
                        if (err) {
                            console.log('Error deleting messages by ids', err);
                            res.status(500).json({ message: 'Error deleting messages.' })
                        } else {
                          res.status(200).json();
                        }
                    }
                );
            }
        },
    },
};
