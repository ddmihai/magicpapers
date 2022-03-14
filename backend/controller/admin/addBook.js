const {insertBook} = require('../../dataAccessLayer/books.js');

exports.add = async (req, res, next) => {
    const { editionID, genereID, title, subtitle, quantity, book_condition, description, pages, price, authors} = req.body;

    try {
        await insertBook({
            editionID,
            genereID,
            title,
            subtitle,
            quantity,
            book_condition,
            description,
            pages,
            price,
            authors
        });

        res.status(201).send('Book added.');
    } 
    catch (error) {
        res.status(500).send(error);
    }

}