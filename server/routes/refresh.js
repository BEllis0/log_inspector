const router = require('express').Router();
const refreshController = require('../controllers/refresh.js');
const auth = require('../util/auth.js')

router.post('/', refreshController.post.refresh);

module.exports = router;