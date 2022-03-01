const db = require('../connection/connection.js');

/* Promise based queries to database */
module.exports = {
    
    /* Insert user payload */
    insertUser: (parameters) => {
        const sqlStatement = 'INSERT INTO users SET ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, parameters, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    /* Select user */
    selectUser: (variable) => {
        const sqlStatement = 'SELECT * FROM users WHERE email = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, variable, (error, response) => {
                if (response.length === 0) return reject(false);
                if (error) return reject(error);
                return resolve(response);
            })
        })
    }


}