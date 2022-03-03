const {selectUserByID, updateUser} = require('../../dataAccessLayer/dao.js');
const bcrypt = require('bcrypt');

/* 
    This function purpose is to be execute only within the user dashboard. 
    Create another function to reset password by email
*/
exports.edit = async(req, res, next) => {
    const {userID, first_name, last_name, password, gender, age} = req.body;

    /* Try catch blocks */
    try {
        const requestedUser = await selectUserByID(userID);
        const hash =  await bcrypt.hash(password, 10);
        const payload = {
            first_name:   first_name  ?  first_name  : requestedUser[0].first_name ,
            last_name:    last_name   ?  last_name   : requestedUser[0].last_name ,
            password:     password    ?  hash        : requestedUser[0].password ,
            gender:       gender      ?  gender      : requestedUser[0].gender ,
            age:          age         ?  age         : requestedUser[0].age 
        };
        await updateUser( payload, userID);
        res.status(201).send('User updated!');
        
        /* Catch errors */
    } catch (error) {
        if (error) res.status(500).send(error);

    }
}