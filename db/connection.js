// Import mysql file
const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection({
        host: 'localhost',
        // Mysql username,
        user: process.env.DB_USER,
        // Mysql Password
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    module.exports = db;