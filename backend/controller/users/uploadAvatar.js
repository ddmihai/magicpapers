const {selectUserByID, updateUser} = require('../../dataAccessLayer/dao.js');
const {deleteImage} = require('../../services/deleteImage.js');


/* 
    Updating the user's avatar---
    create image link for upload, get the user from DB, create the upload payload,
    update the user's avatar with the new image, 

    if there is a old image, in order to save disk space DELETE THE OLD IMAGE
    if there is no old image than send confirmation from the catch block 
*/

exports.addAvatar = async(req, res, next) => {
    const {userID} = req.body;

    try {
    /* Create the image link */
        const url = req.protocol + '://' + req.get('host');
        const imageLink = req.file ? url + '/images/' + req.file.filename : '';

            const user      = await selectUserByID(userID);
            const payload   = {userAvatar: imageLink};
            await updateUser(payload, userID);
            deleteImage(user[0].userAvatar);
            res.status(201).send('User updated!');

    } catch (error) {
        if (error.syscall === 'unlink') res.status(201).send('Photo uploaded.');
        else                            res.status(500).send('Something went wrong!');
    }
}