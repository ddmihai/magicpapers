const {insertComment} = require('../../dataAccessLayer/blogs.js');

exports.createComment = async(req, res, next) => {
    const {userID, postID, comment} = req.body;

    try {      
        if ([...comment].length === 0) return res.send('Please add a valid comment.');
        
        await insertComment({ userID, postID, comment });
        res.status(201).send('Comment created.');

    } 
    // Catch block
        catch (error) {
            if (error.code === 'ER_NO_REFERENCED_ROW_2') return res.status(500).send('Invalid id values!');
            else return res.status(500).send('Internal error!');
    }
}