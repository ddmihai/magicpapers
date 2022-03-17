const {updateBook, insertPromotion} = require('../../dataAccessLayer/books.js');

exports.add = async (req, res, next) => {
    const {bookID, new_price, remove_time} = req.body;

    /**
     *      Set boolean to false
     *      Insert promotion detail
     **/ 

    try {
        await updateBook({available: false}, bookID);
        await insertPromotion({
            bookID, new_price, remove_time
        });
        /* Trigger the automation delete from table */
        require('../../services/automatedRemovePromotion.js')();
        res.status(201).send('promotion added');
    } 
    catch (error) {
        if (error.code === 'ER_NO_REFERENCED_ROW_2' || error.errorno === 1452)  res.status(500).send('Invalid book ID');
        else if (error.code === 'ER_DUP_ENTRY')                                 res.status(500).send('The book is allready promoted');
        else                                                                    res.status(500).send('Somethine went wrong');
    }
}