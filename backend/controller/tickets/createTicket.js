const {insertTicket} = require('../../dataAccessLayer/ticketsLayers.js');


/* 
    Create ticket 
*/
exports.add = async (req, res, next) => {
    const {userID, content} = req.body;

    try 
    {
        await insertTicket({
            userID: userID,
            content: content
        });

        res.status(201).send('Ticket added.');
    } 
    
    catch (error) 
    {
        res.status(500).send('Internal error.');
    }
}