const {selectEdition, updateEdition} = require('../../dataAccessLayer/edition.js');

exports.edit = async (req, res, next) => {
    try {
        const requested = await selectEdition(req.body.editionID);
        const titlePayload = {
            title: req.body.title   ?   req.body.title : requested[0].title   
        }
        await updateEdition(titlePayload, req.body.editionID);
        res.status(200).send('Edited');
    } catch (error) {
        res.status(500).send('Soemthing went wrong');        
    }
}