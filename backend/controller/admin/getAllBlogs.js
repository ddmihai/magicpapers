const {selectAllBlogs} = require('../../dataAccessLayer/blogs.js');


exports.getAll = async (req, res, next) => {
    try {
        const allBlogs = await selectAllBlogs();
        res.status(200).send(allBlogs);
    } catch (error) {
        res.status(500).send(error);
    }
}
