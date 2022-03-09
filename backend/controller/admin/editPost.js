const {selectPostByID, updatePost} = require('../../dataAccessLayer/blogs.js');

exports.edit = async (req, res, next) => {
    const {postID, title, subtitle, content} = req.body;

    try 
    {
        const requiredPost = await selectPostByID(postID);

        /* Create payload */
        const payload = {
            title:          title      ?  title      : requiredPost[0].title ,
            subtitle:       subtitle   ?  subtitle   : requiredPost[0].subtitle ,
            content:        content    ?  content    : requiredPost[0].content 
        };
        
        /* Update post with the payload values */
        updatePost(payload, postID);
        res.status(201).send('Post updated');    
    } 
    
    catch (error) 
    {
        if (error) res.status(500).send('Something went wrong.');
    }
}