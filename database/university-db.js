const mysql = require('mysql');
// This Creates the connection to the database 
const connection = mysql.createConnection({
    port: 3306,
    database: 'gmook_cs355sp21',
    user: 'gmook_cs355sp21',
    password: 'mo5552877',
    debug: false,
    host: '127.0.0.1'
});

module.exports = connection;