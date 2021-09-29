const router = require('express').Router();
const refreshController = require('../controllers/refresh.js');
const auth = require('../util/auth.js')

router.get('/poll/token', refreshController.get.poll);
router.post('/', refreshController.post.refresh);

module.exports = router;