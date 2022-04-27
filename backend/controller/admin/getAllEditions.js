const {selectAllEditions} = require('../../dataAccessLayer/edition.js');

exports.getAllEditions = async (req, res, next) => {
    try {
        const editions = await selectAllEditions();
        if (editions.length === 0) res.status(200).send('No genere founded.');
        else res.status(200).send(editions);    
    } 
    catch (error) {
        res.status(500).send(error);
    }
}