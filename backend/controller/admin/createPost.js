const {insertPost} = require('../../dataAccessLayer/blogs.js');

exports.create = async (req, res, next) => {
    const {blogID, title, subtitle, content} = req.body;

    try 
    {
        const post = await insertPost({
            blogID      : blogID,
            title       : title,
            subtitle    : subtitle,
            content     : content
        });

        if (post) return res.status(201).send('Post created.');
    } 
    
    catch (error) {
        // 'Internal error'
        if (error.code === 'ER_NO_REFERENCED_ROW_2') res.status(500).send('Not added. Please chose a valid Blog ID');
        else if (error) res.status(500).send(error);
    }
}