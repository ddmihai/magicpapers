const db = require('../connection/connection.js');

module.exports = {
    createEdition: (payload) => {
        const slq = 'INSERT INTO edition SET ?';
        return new Promise((resolve, reject) => {
            db.query(slq, payload, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

     /* Select edition */
     selectEdition: (variable) => {
        const sqlStatement = 'SELECT * FROM edition WHERE editionID = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, variable, (error, response) => {
                if (response.length === 0) return reject(false);
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

     /* Update edition */
     updateEdition: (payload, editionID) => {
        const update = 'UPDATE edition SET ? WHERE editionID = ?';
        return new Promise((resolve, reject) => {
            db.query(update, [payload, editionID], (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },
}