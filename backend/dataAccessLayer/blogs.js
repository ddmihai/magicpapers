const db = require('../connection/connection.js');

module.exports = {
 
    insertBlog: (payload) => {
        const sqlStatement = 'INSERT INTO blog SET ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, payload, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

  
    insertPost: (payload) => {
        const sqlStatement = 'INSERT INTO posts SET ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, payload, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

   
    selectPostByID: (parameters) => {
        const sqlStatement = 'SELECT * FROM posts WHERE postID = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, parameters, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    
     updatePost: (payload, postID) => {
        const update = 'UPDATE posts SET ? WHERE postID = ?';
        return new Promise((resolve, reject) => {
            db.query(update, [payload, postID], (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    
    insertComment: (payload) => {
        const sqlStatement = 'INSERT INTO comments SET ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, payload, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    selectAllBlogs: () => {
        const sqlStatement = 'SELECT * FROM blog';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    selectAllBlogsFromCategory: variable => {
        const sqlStatement = 'SELECT * FROM posts WHERE blogID = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, [variable], (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

}