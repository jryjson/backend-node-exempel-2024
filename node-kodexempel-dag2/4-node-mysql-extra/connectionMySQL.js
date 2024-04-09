const mysql = require('mysql');
const connectionMySQL = mysql.createConnection({
    host     : 'localhost',
    user     : 'rootuser',
    password : 'sitar123',
    database : 'nodeMysql20240402'
});

module.exports = connectionMySQL;