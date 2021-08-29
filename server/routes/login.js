const router = require('express').Router();
const loginController = require('../controllers/login.js');

router.post('/', loginController.login);

module.exports = router;