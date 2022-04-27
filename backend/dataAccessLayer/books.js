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

    deleteImageByID: (payload) => {
        const sqlStatement = 'DELETE FROM bookImages WHERE imageID = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, payload, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    selectImageByImageID: (variable) => {
        const sqlStatement = 'SELECT * FROM bookImages WHERE imageID  = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, variable, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    insertPromotion: (payload) => {
        const sqlStatement = 'INSERT INTO promotions SET ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, payload, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    deletePromotion: (variable) => {
        const sqlStatement = 'DELETE FROM promotions WHERE bookID = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, variable, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    getAllPromotions: () => {
        const sqlStatement = 'SELECT * FROM promotions';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    /* Selectors */
    selectAllBooks: (variable) => {
        const sqlStatement = 'SELECT * FROM books';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, variable, (error, response) => {
                if (response.length === 0) return reject(false);
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    selectAllPromotions: (variable) => {
        const sqlStatement = 'SELECT * FROM promotions';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, variable, (error, response) => {
                if (response.length === 0) return reject(false);
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    selectLastAddedBook: () => {
        const sqlStatement = 'SELECT * FROM books ORDER BY bookID DESC LIMIT 1';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

}