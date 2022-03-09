const {deleteTicket} = require('../../dataAccessLayer/ticketsLayers.js');


/* 
    This function can be used by admin, and also by the author that created the ticket
*/
exports.delete = async (req, res, next) => {
    const {userID, tiketID} = req.body;

    try 
    {
        await deleteTicket(tiketID);
        res.status(200).send('Ticket deleted.');
    } 
    
    catch (error) 
    {
        res.status(500).send(error);
    }
}