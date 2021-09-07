const router = require('express').Router();
const usersController = require('../controllers/users.js');
const auth = require('../util/auth.js');

router.get('/', auth, usersController.user.get.byId);
router.post('/new', usersController.user.post.new);
router.patch('/update/username', auth, usersController.user.update.username);
router.patch('/update/password', auth, usersController.user.update.password);
router.patch('/update/email', auth, usersController.user.update.email);
router.patch('/update/fields', auth, usersController.user.update.fields);
router.delete('/delete', auth, usersController.user.delete.byId);

module.exports = router;