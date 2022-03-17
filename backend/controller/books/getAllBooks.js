const {selectAllBooks, selectAllPromotions} = require('../../dataAccessLayer/books.js');

exports.get = async (req, res, next) => {
    try {
        const allBooks = await selectAllBooks();
        const allPromotions = await selectAllPromotions();

        res.send({
            allBooks,
            allPromotions
        })
    } catch (error) {
        
    }
}