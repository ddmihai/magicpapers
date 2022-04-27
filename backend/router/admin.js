const express = require('express');
const router = express.Router();

/* Middlewares */
const auth      = require('../middleware/jwt.js');
const multer    = require('../middleware/multer.js');

/* Controllers */
const updateTicket          = require('../controller/admin/editTickets.js');
const createBlog            = require('../controller/admin/createBlog.js'); 
const createPost            = require('../controller/admin/createPost.js');
const addImagePost          = require('../controller/admin/addPostImage.js');
const editPost              = require('../controller/admin/editPost.js');
const addGenere             = require('../controller/admin/addGenere.js');
const addEdition            = require('../controller/admin/addEdition.js');
const editEdition           = require('../controller/admin/updateEdition.js');
const addBook               = require('../controller/admin/addBook.js');
const editBook              = require('../controller/admin/editBook.js');
const addBookPic            = require('../controller/admin/addBookPicture.js');
const deleteSingleImg       = require('../controller/admin/deleteBookImage.js');
const promotions            = require('../controller/admin/promoteBook.js');
const manualRemovePromotion = require('../controller/admin/manualRemovePromotion.js');
const getAllGeneres         = require('../controller/admin/getAllGeneres.js');
const getEditions           = require('../controller/admin/getAllEditions.js');
const getLastAddedBook      = require('../controller/books/getLastAddedBook.js');
const getAllBlogCategories  = require('../controller/admin/getAllBlogs.js');
const getAllPostsFromCateg  = require('../controller/admin/getAllPostsFromOneBlog.js'); 
const getNormalBooks        = require('../controller/books/getAllBooks.js');


/* PUT routes */
router.put('/admin/update-ticket',  auth, updateTicket.edit);
router.put('/admin/add-image-post', auth, multer, addImagePost.addImage);
router.put('/admin/edit-post',      auth, editPost.edit);
router.put('/admin/edit-edition',   auth, editEdition.edit);
router.put('/admin/edit-book',      auth, editBook.edit);


/* POST routes */
router.post('/admin/create-blog',       auth, createBlog.create);
router.post('/admin/create-post',       auth, createPost.create);
router.post('/admin/create-genere',     auth, addGenere.add);
router.post('/admin/create-edition',    auth, addEdition.add);
router.post('/admin/create-book',       auth, addBook.add);
router.post('/admin/add-book-picture',  auth, multer, addBookPic.addPicture);
router.post('/admin/promote-book',      auth, promotions.add)


/* DELETE route */
router.delete('/admin/delete-single-book-image',    deleteSingleImg.deleteSingleImage)
router.delete('/admin/remove-promotion',            manualRemovePromotion.remove);


/* Get all generes */
router.get('/admin/get-generes',                    getAllGeneres.getAllGeneres);
router.get('/admin-get-editions',                   getEditions.getAllEditions); 
router.get('/admin/get-last-book',                  getLastAddedBook.getLastBook);
router.get('/admin-get-all-blogs',                  getAllBlogCategories.getAll);
router.get('/admin-get-posts-from-blog/:id',        getAllPostsFromCateg.get);
router.get('/get-normal-price-books',               getNormalBooks.get)


module.exports = router;