const {selectUser} = require('../../dataAccessLayer/usersLayers.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* 
    Get the body elements, query the db for email, compare password, 
    create JWT token, send payload to frontend 
*/
exports.login = async (req, res, next) => {
    const {email, password} = req.body;
    let user;

    try {
        user = await selectUser(email);
        const match = await bcrypt.compare(password, user[0].password);

        if (match) {
            const token = jwt.sign(
                { userId: user[0].userID },
                'MAGIC_PAPERS_TOKEN',
                { expiresIn: '24h' });

            res.status(200).send({
                userID: user[0].userID, 
                first_name: user[0].first_name,
                last_name: user[0].last_name,
                email: user[0].email,
                gender: user[0].gender,
                age: user[0].age,
                userAvatar: user[0].userAvatar,
                join_date: user[0].join_date,
                token: token
            });
        }
        else res.status(404).send('Worng credentials!');

    } catch (error) {
        if (!user) res.status(404).send('Worng credentials!');
        if (error) res.send(error);
    }
}