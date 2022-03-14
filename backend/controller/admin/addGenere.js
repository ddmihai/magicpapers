const {createGenere} = require('../../dataAccessLayer/generes.js');

exports.add = async (req, res, next) => {
    const {genere_name, disclaimer} = req.body;

    try 
    {
        await createGenere({genere_name, disclaimer});
        res.status(201).send('Genere added');
    } 
    catch (error) {
        res.status(500).send('Something went wrong.');
    }
}