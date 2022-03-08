const {silenceUser} = require('../../dataAccessLayer/usersLayers.js');


exports.add = async(req, res, next) => {
    const {
        silencedID,     /* This is the user need to be silenced*/
        end_date
    } = req.body;

    const payload = {
        userID: silencedID,
        end_date: end_date
    }

    try {
        await silenceUser(payload);

        /* Node Cronjobs */
        require('../../services/automaticUnsilence.js')();
        res.status(201).send('User silenced');
    } 
    catch (error) {
        res.status(500).send(error);    
    }
}