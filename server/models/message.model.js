const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const messageSchema = new Schema({
    siteName: String,
    environment: String,
    channel: String,
    domain: String, // parsed from the api request. Used for CORs security. Only allow whitelisted domains in the users' domain list
    page: String,  // either received in req body or parsed from req headers
    message: Array,
    type: String,
    priorityLevel: String,
    severity: String,
    status: String,
    context: String, // exploring how we can dig into the context of the message (outter function, filename, etc)
    description: String, // entered by users
    ownerId: ObjectId, // mapped to a user _id
    companyId: ObjectId, // mapped to a company account
    projectTicketUrl: String, // optional url to project ticket
}, {
    timestamps: true
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;