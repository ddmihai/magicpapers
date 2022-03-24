const {selectUserByID} = require('../../dataAccessLayer/usersLayers.js');

exports.getUserBID = async (req, res, next) => {
    const {userID} = req.body;
    try {
        const user = await selectUserByID(userID);
        console.log(user);
        res.send(user);    
    } 
    catch (error) {
        res.send(error);
    }
} 