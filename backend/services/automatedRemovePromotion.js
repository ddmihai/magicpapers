const {getAllPromotions, deletePromotion, updateBook} = require('../dataAccessLayer/books.js');
let cron = require('node-schedule');
/**
 *  The table from promotions give me all the elements that once mapped, I can use the elements
 *  to handle all the operations required
 */
module.exports = async () => {
    try 
    {
            const promotedBooks = await getAllPromotions();
            promotedBooks.map(async promotion => {
                let time = {
                    year:       promotion.remove_time.getFullYear(),
                    month:      promotion.remove_time.getUTCMonth() + 1,
                    day:        promotion.remove_time.getUTCDate(),
                    hour:       promotion.remove_time.getHours(),
                    minutes:    promotion.remove_time.getMinutes(),
                    dayofWeek:  promotion.remove_time.getUTCDay()
                }   

                /* Create timestamp and execute it for every mapped promotion */
                let deadline = `${time.year}-${time.month}-${time.day} ${time.hour}:${time.minutes}:00 *`;
                cron.scheduleJob(deadline, function(){
                    deletePromotion(promotion.bookID);
                    updateBook({available: true}, promotion.bookID);
                    console.log('Deleted.');
                  });
            });         
    } 

    // Catch block
    catch (error) 
    {
        if (error) return error;
    }
}