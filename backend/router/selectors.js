const express   = require('express');
const router    = express.Router();

const getAllbooks = require('../controller/books/getAllBooks.js');

/* POST method to send email reset password form */
router.get('/get-all-books', getAllbooks.get);

module.exports = router;


