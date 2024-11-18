const { Router } = require('express');
const authenticateToken = require('../middleware/auth');
const router = Router();

var { getUsers, postUser } = require('../controllers/users');

router.get('/users', getUsers);
router.post('/user', postUser);

module.exports = router;