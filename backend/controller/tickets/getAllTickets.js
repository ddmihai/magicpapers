const {selectTickets} = require('../../dataAccessLayer/ticketsLayers.js');

exports.get = async (req, res, next) => {
    const {userID} = req.body;

    try 
    {
        const tickets = await selectTickets(userID);
        res.status(200).send(tickets);
    } 
    
    catch (error) 
    {
        res.status(500).send(error);
    }
}