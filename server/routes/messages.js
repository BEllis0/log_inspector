const router = require('express').Router();
const messageController = require('../controllers/messages.js');
const auth = require('../util/auth.js')

router.post('/new', messageController.messages.post.new);
router.get('/all', auth, messageController.messages.get.byUser);
router.delete('/remove', auth, messageController.messages.delete.byIds);

module.exports = router;
