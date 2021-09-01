const Message = require('../models/message.model.js');
const { messageValidation } = require('../util/messageValidation.js');

module.exports = {
    messages: {
        post: {
            new: (req, res) => {
                messageValidation(req.get('apiKey'), req.hostname)
                    .then(validatedPerson => {
                        const messagePayload = {
                            siteName: req.body.siteName || null,
                            environment: req.body.environment || null,
                            domain: req.hostname,
                            ownerId: validatedPerson.personId || undefined, // returned from validation process
                            page: req.protocol + "://" + req.hostname + req.originalUrl || null,
                            message: req.body.message || null,
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
                // get messages from db
            },
            
        },
    },
};
