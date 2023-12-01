

const mysql = require('mysql2/promise'); 

const pool = mysql.createPool({
  host: 'regulus.cotuca.unicamp.br',
  user: 'BD23520',
  password: 'BD23520',
  database: 'BD23520',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
