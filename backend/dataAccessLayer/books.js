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

    selectBookByID: (variable) => {
        const sqlStatement = 'SELECT * FROM books WHERE bookID = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, variable, (error, response) => {
                if (response.length === 0) return reject(false);
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    updateBook: (payload, bookID) => {
        const update = 'UPDATE books SET ? WHERE bookID = ?';
        return new Promise((resolve, reject) => {
            db.query(update, [payload, bookID], (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    insertBookImage: (payload) => {
        const sqlStatement = 'INSERT INTO bookImages SET ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, payload, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

}