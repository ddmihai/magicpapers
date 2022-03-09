const db = require('../connection/connection.js');

module.exports = {

      /* Insert ticket payload */
      insertTicket: (parameters) => {
        const sqlStatement = 'INSERT INTO tickets SET ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, parameters, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    /* Delete ticket */
    deleteTicket: (parameters) => {
        const sqlStatement = 'DELETE FROM tickets WHERE tiketID = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, parameters, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    selectTickets: (parameters) => {
        const sqlStatement = 'SELECT * FROM tickets WHERE userID = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, parameters, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    selectTicketByID: (parameters) => {
        const sqlStatement = 'SELECT * FROM tickets WHERE tiketID = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, parameters, (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    updateAticket: (payload, tiketID) => {
        const sqlStatement = 'UPDATE tickets SET ? WHERE tiketID = ?';
        return new Promise((resolve, reject) => {
            db.query(sqlStatement, [payload, tiketID], (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    }


}