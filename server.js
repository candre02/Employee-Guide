// Importing files
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const express = require('express');

// Password Protect imported file
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Mysql username,
        user: 'root',
        // Mysql Password
        password: '',
        database: 'dealership'
    }
    );

    // Start server after db connection
    db.connection(err =>{
        if (err) throw err;
        console.log(`Connected to the dealership database`);
        app.listen(PORT, () =>{
            console.log(`Server running on port ${PORT}`);
        });
    });

    // Query database and delete from
    let deletedRow 

    db.query(`DELETE FROM departments WHERE id = ?`, deletedRow, (err, result) =>{
        if (err) {
            console.log(err);       
        } 
            console.log(result);
    });

    // Query database and select from
    db.query('SELECT * FROM departments', function (err, results) {
        console.log(results);
    });

    // Default response for any other request (Not Found)
    app.use((req, res) => {
        res.status(404).end();
    });