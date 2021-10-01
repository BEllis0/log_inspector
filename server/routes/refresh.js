const router = require('express').Router();
const refreshController = require('../controllers/refresh.js');
const auth = require('../util/auth.js')

router.get('/poll/token', auth, refreshController.get.poll);
router.post('/', auth, refreshController.post.refresh);

module.exports = router;