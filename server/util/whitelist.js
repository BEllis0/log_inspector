/*
    find all domains on user profiles to generate a whitelist
    run as middleware to validate that request hosts are included in the whitelist
    if not included return cors error
*/

let User = require('../models/user.model.js');

const getDomains = () => {
    try {
        let domainsArr = User.find({}, 'domains');
        console.log('All domains from db: ', domainsArr);
        return domainsArr;
    } catch(err) {
        console.log('Error getting domains from db: ', err);
    }
};

const whitelist = getDomains();

module.exports = whitelist;
