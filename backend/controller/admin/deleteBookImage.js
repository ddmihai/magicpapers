const {deleteImageByID, selectImageByImageID} = require('../../dataAccessLayer/books.js');
const {deleteImage} = require('../../services/deleteImage.js');

/* 
    This middleware is important because it delete book images and in same time removes images from the server
    1. Get the whole row elements by the imageID to find the image link
    2. Remove image from server
    3. remove image row from database
*/

exports.deleteSingleImage = async (req, res, next) => {
    const {imageID} = req.body;

    try {
        const row = await selectImageByImageID(imageID);
        deleteImage(row[0].book_image);
        await deleteImageByID(imageID);
        
        
        res.status(200).send('Image deleted')
    } 
    catch (error) {
        res.send(error)
    }
}