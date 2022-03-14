const express = require('express');
const router = express.Router();

/* Middlewares */
const auth      = require('../middleware/jwt.js');
const multer    = require('../middleware/multer.js');

/* Controllers */
const updateTicket  = require('../controller/admin/editTickets.js');
const createBlog    = require('../controller/admin/createBlog.js'); 
const createPost    = require('../controller/admin/createPost.js');
const addImagePost  = require('../controller/admin/addPostImage.js');
const editPost      = require('../controller/admin/editPost.js');
const addGenere     = require('../controller/admin/addGenere.js');
const addEdition    = require('../controller/admin/addEdition.js');
const editEdition   = require('../controller/admin/updateEdition.js');
const addBook       = require('../controller/admin/addBook.js');
const editBook      = require('../controller/admin/editBook.js');


/* PUT routes */
router.put('/admin/update-ticket',  auth, updateTicket.edit);
router.put('/admin/add-image-post', auth, multer, addImagePost.addImage);
router.put('/admin/edit-post',      auth, editPost.edit);
router.put('/admin/edit-edition',   auth, editEdition.edit);
router.put('/admin/edit-book',    editBook.edit);


/* POST routes */
router.post('/admin/create-blog',       auth, createBlog.create);
router.post('/admin/create-post',       auth, createPost.create);
router.post('/admin/create-genere',     auth, addGenere.add);
router.post('/admin/create-edition',    auth, addEdition.add);
router.post('/admin/create-book',       auth, addBook.add);


module.exports = router;