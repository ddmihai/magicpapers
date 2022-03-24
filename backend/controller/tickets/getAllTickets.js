const {selectTickets} = require('../../dataAccessLayer/ticketsLayers.js');

exports.get = async (req, res, next) => {
    const userID = req.params.id;
    // res.send(userID)
    
    try 
    {
        const tickets = await selectTickets(userID);
        res.send(tickets);
    } 

    catch (error) 
    {   
        console.log(error);
        res.status(500).send(error);
    }
}