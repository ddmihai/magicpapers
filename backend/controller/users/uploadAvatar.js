const {selectUserByID, updateUser} = require('../../dataAccessLayer/usersLayers.js');
const {deleteImage} = require('../../services/deleteImage.js');


/* 
    Updating the user's avatar---
    create image link for upload, get the user from DB, create the upload payload,
    update the user's avatar with the new image, 

    if there is a old image, in order to save disk space DELETE THE OLD IMAGE
    if there is no old image than send confirmation from the catch block 
*/

exports.addAvatar = async(req, res, next) => {
    let {userID} = req.body;
    let imageLink;
    try {
    /* Create the image link */
        let url = req.protocol + '://' + req.get('host');
        imageLink = req.file ? url + '/images/' + req.file.filename : '';

        /* Get the old user and look for the picture */
            let user      = await selectUserByID(userID);
            let payload   = {userAvatar: imageLink};
            await updateUser(payload, userID);
            /* Delete the picture */
            deleteImage(user[0].userAvatar);
            res.status(201).send('User updated!');

    } catch (error) {
        if (error.syscall === 'unlink') res.status(201).send('Photo uploaded.');
        else {
            res.status(500).send('Something went wrong!');
            if (imageLink) deleteImage(imageLink);
        };
    }
}