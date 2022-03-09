const {insertBlog} = require('../../dataAccessLayer/blogs.js');

exports.create = async (req, res, next) => {
    const {title, subtitle} = req.body;
    try 
    {
        await insertBlog({
            title: title,
            subtitle: subtitle
        });
        
        res.status(201).send('Blog created.');
    } 
    
    catch (error) {
        res.status(500).send(error);
    }
}