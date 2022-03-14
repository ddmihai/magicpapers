const express = require('express');
const router = express.Router();

/* Middlewares */
const auth = require('../middleware/jwt.js');


/* Controller import */
const createComment = require('../controller/comments/createComment.js');

router.post('/create-comment', auth, createComment.createComment);

module.exports = router;