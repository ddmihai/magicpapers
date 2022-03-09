const express   = require('express');
const router    = express.Router();
const auth      = require('../middleware/jwt.js');
const multer    = require('../middleware/multer.js');

const createUser    = require('../controller/users/signup.js');
const loginUser     = require('../controller/users/login.js');
const editUser      = require('../controller/users/edit.js');
const addAvatar     = require('../controller/users/uploadAvatar.js');
const silenceUser   = require('../controller/users/silenceUser.js');

router.post('/create-user',     createUser.createUser);
router.post('/login-user',      loginUser.login);
router.post('/silence-user',    auth, silenceUser.add);

router.put('/edit-user',        auth, editUser.edit);
router.put('/edit-avatar',      auth, multer, addAvatar.addAvatar);

module.exports = router;    