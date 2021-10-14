const Message = require('../models/message.model.js');

const deleteAllMessages = async () => {
    try {
        console.log('Deleting all messages.')
        Message.remove({});
    } catch(err) {
        console.log("Error deleting all messages: ", err);
    }
};

deleteAllMessages();