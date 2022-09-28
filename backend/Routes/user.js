const express = require('express');
const router = express.Router();
router.post('/', require('../Controllers/user').createUser);
router.get('/', require('../Controllers/user').getUsers);
router.get('/:id', require('../Controllers/user').getUser);
router.put('/:userID' , require('./../Controllers/user').updateUser);
router.delete('/:id', require('../Controllers/user').deleteUser);

module.exports = router;