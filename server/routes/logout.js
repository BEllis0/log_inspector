const router = require('express').Router();
const logoutController = require('../controllers/logout.js');

router.post('/', logoutController.logout);

module.exports = router;