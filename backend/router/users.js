const express = require('express');
const router = express.Router();
const auth = require('../middleware/jwt.js');

const createUser = require('../controller/users/signup.js');
const loginUser = require('../controller/users/login.js');
const editUser = require('../controller/users/edit.js');

router.post('/create-user',     createUser.createUser);
router.post('/login-user',      loginUser.login);
router.put('/edit-user',        auth, editUser.edit);

module.exports = router;