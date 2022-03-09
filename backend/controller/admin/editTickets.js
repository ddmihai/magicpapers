const {updateAticket} = require('../../dataAccessLayer/ticketsLayers.js');

exports.edit = async (req, res, next) => {
    const {tiketID, response} = req.body;
    try 
    {
        if (!response) return res.status(304).send('The record was not modified. Please provide a content.'); 
        const payload = {
            response: response,
            seen_admin: 1
        };
        const updateStatus = await updateAticket(payload, tiketID);
        if (updateStatus) return res.status(201).send('Ticket updated!');
    } 
    
    /* Catch block for errors */
    catch (error) 
    {
        res.status(500).send(error);
    }
}