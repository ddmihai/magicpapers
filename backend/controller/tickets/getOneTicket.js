const {selectTicketByID} = require('../../dataAccessLayer/ticketsLayers.js');

exports.getOneTicket = async (req, res, next) => {
    const tiketID = req.params.id;

    try {
        const requested = await selectTicketByID(tiketID);
        res.status(200).send(requested);    
    } 
    catch (error) {
        res.send(error);
    }
    
}