const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit:4,
    host: 'localhost',
    user: 'root',
    password: '',
    database:'magicpapers'
  });


  db.getConnection((err,connection)=> {
    if(err) throw err;
    console.log('Database connected successfully');
    connection.release();
  });

  module.exports = db;