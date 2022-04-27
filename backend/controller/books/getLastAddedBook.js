const {selectLastAddedBook} = require('../../dataAccessLayer/books.js');

exports.getLastBook = async (req, res, next) => {
    try {
        const lastBook = await selectLastAddedBook();
        res.status(200).send(lastBook);

    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}
