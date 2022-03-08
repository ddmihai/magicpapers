const {insertUser} = require('../../dataAccessLayer/usersLayers.js');
const bcrypt = require('bcrypt');


/* 
    This is a middleware that call the asynchronous insertUser function from data access object.
    Get the req.body elements, hash the password, create payload
    
    Try - catch block "awayting" the promise from the data object. 
    If the user is inserted, the server send the 201 status.
    if there are errors, the catch block send status of 500 and check for duplicate error to be send to frontend  
*/
exports.createUser = async (req, res, next) => {
    const { first_name, last_name, email, password, gender, age} = req.body;
    const hash =  await bcrypt.hash(password, 10);

    const payload = {
        first_name  : first_name,
        last_name   : last_name,
        email       : email,
        password    : hash,
        gender      : gender,
        age         : age       
    }

    try {
        await insertUser(payload);
        res.status(201).send('User created');
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') res.status(500).send('This email is allready in use!');
        else res.status(500).send('Something went wrong!');
    }
} 