const express = require('express');
const router = express.Router();

const createUser = require('../controller/users/signup.js');
const loginUser = require('../controller/users/login.js');


router.post('/create-user', createUser.createUser);
router.post('/login-user', loginUser.login);


module.exports = router;