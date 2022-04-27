const db = require('../connection/connection.js');

module.exports = {
    createGenere: (payload) => {
        const slq = 'INSERT INTO genere SET ?';
        return new Promise((resolve, reject) => {
            db.query(slq, payload, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

     /* Select genere */
     selectGenere: (variable) => {
        const sqlStatement = 'SELECT * FROM genere WHERE genereID = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, variable, (error, response) => {
                if (response.length === 0) return reject(false);
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

      /* Select genere */
      selectAllGeneres: () => {
        const sqlStatement = 'SELECT * FROM genere';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

     /* Update genere */
     updateGenere: (payload, genereID) => {
        const update = 'UPDATE genere SET ? WHERE genereID = ?';
        return new Promise((resolve, reject) => {
            db.query(update, [payload, genereID], (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },
}