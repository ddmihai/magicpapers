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
            });
        });
    },

    /* Select by ID user */
    selectUserByID: (variable) => {
        const sqlStatement = 'SELECT * FROM users WHERE userID = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, variable, (error, response) => {
                if (response.length === 0) return reject(false);
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },


    /* Update user */
    updateUser: (payload, userID) => {
        const update = 'UPDATE users SET ? WHERE userID = ?';
        return new Promise((resolve, reject) => {
            db.query(update, [payload, userID], (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    }

}