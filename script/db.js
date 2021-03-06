import mysql from 'mysql';
const mysql = require('mysql');
const dbConfig = require('./config/db.config');

let connection = mysql.createPool(config:{
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    insecureAuth: true

}

);
module.exports = connection;