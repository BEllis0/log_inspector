const router = require('express').Router();
const messageController = require('../controllers/messages.js');

router.post('/new', messageController.messages.post.new);

module.exports = router;
