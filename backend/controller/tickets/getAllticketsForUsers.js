const { getAllTickets } = require('../../dataAccessLayer/ticketsLayers.js');

exports.get = async (req,res,next) => {
    try {
        const ticketList = await getAllTickets();
        res.send(ticketList);    
    } 
    catch (error) {
        res.send(error)
    }
}