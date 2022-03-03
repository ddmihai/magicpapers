const express   = require('express');
const router    = express.Router();

const resetPassword = require('../controller/emails/resetPassword.js');

/* POST method to send email reset password form */
router.post('/send-email', resetPassword.reset);

module.exports = router;



