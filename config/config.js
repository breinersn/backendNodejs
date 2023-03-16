const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lafacil2023',
    database: 'backend_nodejs'
});

db.connect(function(err){
    if (err) throw err;
    console.log('DATABASE CONNECTED!');
});

module.exports = db;