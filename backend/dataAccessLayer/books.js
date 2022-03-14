const db = require('../connection/connection.js');

module.exports = {
    insertBook: (payload) => {
        const sqlStatement = 'INSERT INTO books SET ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, payload, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },


    
}