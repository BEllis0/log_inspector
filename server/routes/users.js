const router = require('express').Router();
const usersController = require('../controllers/users.js');
const auth = require('../util/auth.js');

router.get('/', auth, usersController.user.get.byId);
router.post('/new', usersController.user.post.new);
router.put('/update/username', auth, usersController.user.update.username);
router.put('/update/password', auth, usersController.user.update.password);
router.put('/update/email', auth, usersController.user.update.email);
router.put('/update/fields', auth, usersController.user.update.fields);
router.delete('/delete', auth, usersController.user.delete.byId);

module.exports = router;