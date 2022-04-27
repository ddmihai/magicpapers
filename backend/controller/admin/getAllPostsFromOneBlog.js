const {selectAllBlogsFromCategory} = require('../../dataAccessLayer/blogs.js')

exports.get = async (req, res, next) => {
    const variable = req.params.id;

    try {
        const response = await selectAllBlogsFromCategory(variable);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}