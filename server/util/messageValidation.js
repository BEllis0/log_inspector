const User = require('../models/user.model.js');

// performs whitelist check and api key validation

const whitelistValidation = (domains, requestHost) => {
    return domains.includes(requestHost);
};

const apiValidation = (requestKey) => {
    return User.find({ 'clientApiKey': requestKey });
};

module.exports.messageValidation = (requestApiKey, requestHost) => {
    return new Promise((resolve, reject) => {
        if (!requestApiKey) {
            reject({ message: "API key undefined." });
        }

        apiValidation(requestApiKey)
            .then(person => {
                const whitelistedDomains = person[0].domains;
                const isDomainValid = whitelistValidation(whitelistedDomains, requestHost);

                if (isDomainValid) {
                    resolve({ message: "API key valid and domain found", personId: person[0]._id });
                } else {
                    reject({ message: "Domain is not whitelisted." });
                }
            })
            .catch(err => {
                reject({ message: "API key does not match." });
            });
    });
};