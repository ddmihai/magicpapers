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

/* PUT routes */
router.put('/admin/update-ticket',  auth, updateTicket.edit);
router.put('/admin/add-image-post', auth, multer, addImagePost.addImage);
router.put('/admin/edit-post',      auth, editPost.edit);

/* POST routes */
router.post('/admin/create-blog',   auth, createBlog.create);
router.post('/admin/create-post',   auth, createPost.create);


module.exports = router;