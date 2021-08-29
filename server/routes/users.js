const router = require('express').Router();
const usersController = require('../controllers/users.js');

router.get('/', usersController.user.get.allUsers);
router.get('/:id', usersController.user.get.byId);
router.post('/new', usersController.user.post.new);
router.put('/:id', usersController.user.update.byId);
router.delete('/:id', usersController.user.delete.byId);

module.exports = router;