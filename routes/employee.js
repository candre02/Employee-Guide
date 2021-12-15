// Importing files
// const express = require('express');
// const router = express.Router();
// const db = require('../config/connection');


// View Employees
// function viewEmployees() {
//     const sql = `SELECT * FROM employee ORDER BY role_id`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//         }
//         console.table(rows)
//         mainMenu()
//     });
// };

// Add an Employee
// function addEmployee() {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 message: "What is your first name?",
//                 name: 'first_name'
//             },
//             {
//                 type: 'input',
//                 message: "What is your last name?",
//                 name: "last_name"
//             },
//             {
//                 type: 'input',
//                 message: "What is your role id?",
//                 name: "role_id"
//             },
//             {
//                 type: 'input',
//                 message: "What is your manager's id?",
//                 name: "manager_id"

//             }
//         ])
//         .then((data) => {
//             const sql = `INSERT INTO employee ('first_name', 'last_name', 'roles_id', 'manager_id) VALUES (?,?,?,?)`;


//             db.query(
//                 "INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)",

//                 [data.first_name, data.last_name, data.roles_id, data.manager_id],

//                 (err, data) => {
//                     if (err) {
//                     }
//                     console.table(data);
//                     mainMenu();
//                 }
//             );
//         });

// }
