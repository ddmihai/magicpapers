const {selectAllGeneres} = require('../../dataAccessLayer/generes.js');

exports.getAllGeneres = async (req, res, next) => {
    try {
        const genereList = await selectAllGeneres();
        if (genereList.length === 0) res.status(200).send('No genere founded.');
        else res.status(200).send(genereList);    
    } 
    catch (error) {
        res.status(500).send(error);
    }
}