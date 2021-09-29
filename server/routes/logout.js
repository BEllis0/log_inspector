const router = require('express').Router();
const logoutController = require('../controllers/logout.js');
const auth = require('../util/auth.js');

router.post('/', auth, logoutController.logout);

module.exports = router;