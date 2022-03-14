const {createEdition} = require('../../dataAccessLayer/edition.js');

exports.add = async (req, res, next) => {
    const {title} = req.body;

    try 
    {
        await createEdition({title});
        res.status(201).send('Edition added');
    } 
    catch (error) {
        res.status(500).send(error);
    }
}