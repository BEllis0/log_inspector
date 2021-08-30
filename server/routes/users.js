const router = require('express').Router();
const usersController = require('../controllers/users.js');

router.get('/', usersController.user.get.allUsers);
router.get('/:id', usersController.user.get.byId);
router.post('/new', usersController.user.post.new);
router.put('/update/username', usersController.user.update.username);
router.put('/update/password', usersController.user.update.password);
router.put('/update/email', usersController.user.update.email);
router.put('/update/fields', usersController.user.update.fields);
router.delete('/:id', usersController.user.delete.byId);

module.exports = router;