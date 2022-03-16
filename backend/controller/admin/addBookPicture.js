const {insertBookImage} = require('../../dataAccessLayer/books.js');
const {deleteImage} = require('../../services/deleteImage.js');

exports.addPicture = async (req, res, next) => {
    const {bookID} = req.body;

    try {
        /* Create the image link */
        let url = req.protocol + '://' + req.get('host');
        var book_image = req.file ? url + '/images/' + req.file.filename : '';
        

        await insertBookImage({ bookID, book_image });
        res.status(201).send('Image uploaded');

    } 
    catch (error) {
        if (error.code === 'ER_NO_REFERENCED_ROW_2') {
            /* Delete Image allready uploaded */
            deleteImage(book_image);
            res.status(500).send('Please chose a real book to be updated');
        }
        else res.status(500).send('Something went wrong');
    }
}