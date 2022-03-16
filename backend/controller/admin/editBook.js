const {selectBookByID, updateBook} = require('../../dataAccessLayer/books.js');

exports.edit = async (req, res, next) => {
    const {bookID, editionID, genereID, title, subtitle, quantity, book_condition, description, pages, price, authors} = req.body;

    try {
        const requestedBook = await selectBookByID(bookID);
        const payload = {
            editionID :         editionID       ?       editionID       :  requestedBook[0].editionID  ,
            genereID :          genereID        ?       genereID        :  requestedBook[0].genereID  ,
            title :             title           ?       title           :  requestedBook[0].title  ,
            subtitle :          subtitle        ?       subtitle        :  requestedBook[0].subtitle  ,
            quantity :          quantity        ?       quantity        :  requestedBook[0].quantity  ,
            book_condition :    book_condition  ?       book_condition  :  requestedBook[0].book_condition  ,
            description :       description     ?       description     :  requestedBook[0].description  ,
            pages :             pages           ?       pages           :  requestedBook[0].pages  ,
            price :             price           ?       price           :  requestedBook[0].price  ,
            authors :           authors         ?       authors         :  requestedBook[0].authors  
        }

        const status  = await updateBook(payload, bookID);
        res.status(201).send(status);
    } 
    catch (error) {
        res.send(error);
    }
    
}