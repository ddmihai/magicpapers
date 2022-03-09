const {selectPostByID, updatePost} = require('../../dataAccessLayer/blogs.js');
const {deleteImage} = require('../../services/deleteImage.js');

exports.addImage = async (req, res, next) => {
    const {userID, postID} = req.body;

    try 
    {
        /* Create the image link */
        let url = req.protocol + '://' + req.get('host');
        let imageLink = req.file ? url + '/images/' + req.file.filename : '';
        
        const post = await selectPostByID(postID);
        let payload   = {image: imageLink};

        await updatePost(payload, postID);
        deleteImage(post[0].image);

        /* Send confirmation */
        res.status(201).send('Post updated!');
    } 
    catch (error) {
        if (error.syscall === 'unlink') res.status(201).send('Photo uploaded.');
        else                            res.status(500).send(error);
    }
}