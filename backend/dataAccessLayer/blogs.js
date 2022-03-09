const db = require('../connection/connection.js');

module.exports = {
    /* Insert blog payload */
    insertBlog: (payload) => {
        const sqlStatement = 'INSERT INTO blog SET ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, payload, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    /* Insert blog payload */
    insertPost: (payload) => {
        const sqlStatement = 'INSERT INTO posts SET ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, payload, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    /* Select blog */
    selectPostByID: (parameters) => {
        const sqlStatement = 'SELECT * FROM posts WHERE postID = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, parameters, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

     /* Update post */
     updatePost: (payload, postID) => {
        const update = 'UPDATE posts SET ? WHERE postID = ?';
        return new Promise((resolve, reject) => {
            db.query(update, [payload, postID], (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

}