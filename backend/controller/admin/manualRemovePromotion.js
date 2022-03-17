const {deletePromotion, updateBook} = require('../../dataAccessLayer/books.js');


/**
 *  This function delete the promotion book from promotion table and
 *  set the availability of normal price to true 
 */

exports.remove = async (req, res, next) => {
    const {bookID} = req.body;

    try {
        await deletePromotion(bookID);
        await updateBook({ available: true }, bookID)
        res.status(201).send('Promotion deleted!');
    } 
    catch (error) {
        res.status(500).send('Something went wrong');
    }
}