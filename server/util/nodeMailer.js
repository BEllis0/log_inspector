const nodemailer = require("nodemailer");

    // for testing in dev
const createTestAccount = async () => {
    let testAcc = await nodemailer.createTestAccount();
    return testAcc;
}

var test = createTestAccount();

module.exports.emailService = nodemailer.createTransport({
    host: process.env.NODE_ENV === 'development' ? "smtp.ethereal.email" : process.env.EMAIL_HOST,
    port: process.env.NODE_ENV === 'development' ? 587 : process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.NODE_ENV === 'development' ? test.user : process.env.EMAIL_USERNAME,
        pass: process.env.NODE_ENV === 'development' ? test.pass : process.env.EMAIL_PW,
    },
});