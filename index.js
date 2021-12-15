// Dependencies Imported into app
const db = require('./config/connection');
const inquirer = require('inquirer');

require('console.table');

let employeeArr = [];

db.connect(err => {
    mainMenu()
});

function mainMenu() {
    inquirer.prompt(
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'Menu',
            choices: [
                'View All Employees', 
                'View All Roles', 
                'View All Departmets', 
                'View Employee by Manager', 
                'View Employee by Department', 
                'Add Employee', 
                'Add Role', 
                'Add department', 
                'Update Employee Role', 
                'Update Employee Manager', 
                'Delete Employee',
                'Delete Role',
                'Delete Department',
                'View Department Budgets'
            ]
        })
        .then(data => {
            if (data.Menu === 'View All Employees') {
                viewEmployees()
            }
            else if (data.Menu === 'View All Roles') {
                viewRoles()
            }
            else if (data.Menu === 'View All Departments') {
                viewDepartments()
            }
            else if (data.Menu === 'View Employee by Manager') {
                viewEmpByMgr()
            }
            else if (data.Menu === 'View Employee by Department') {
                viewEmpByDept()
            }
            else if (data.Menu === 'Add Employee') {
                addEmployee()
            }
            else if (data.Menu === 'Add Role') {
                addRole()
            }
            else if (data.Menu === 'Add Department') {
                addDepartment()
            }
            else if (data.Menu === 'Update Employee Role') {
                updateEmployeeRole()
            }
            else if (data.Menu === 'Update Employee Manager') {
                updateEmployeeMgr()
            }
            else if (data.Menu === 'Delete Employee') {
                deleteEmployee()
            }
            else if (data.Menu === 'Delete Role') {
                deleteRole()
            }
            else if (data.Menu === 'Delete Department') {
                deleteDept()
            }
            else if (data.Menu === 'View Department Budgets') {
                viewDeptBuds()
            }
            
          

            

        });
};

// -----------view all employees and roles work well --------------------------------------------------

function viewEmployees() {
    const sql = `SELECT * FROM employee ORDER BY role_id`;

    db.query(sql, (err, rows) => {
        if (err) {
        }
        console.table(rows)
        mainMenu()
    });
};

function viewRoles() {
    const sql = `SELECT * FROM roles`;

    db.query(sql, (err, rows) => {
        if (err) {
        }
        console.table(rows);
        mainMenu();
    });
};

// -----------nothing appears for view all depts as in no chart--------------------------------------------------

// function viewDepartments() {
//     const sql = `SELECT * FROM departmets`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//         }
//         console.table(rows);
//         mainMenu();
//     });
// };



// function viewDepartments() {
//     const sql = `SELECT departments.*, role.name
//     AS role_name
//     FROM departments
//     LEFT JOIN role
//     ON departments.role_id = role.id
//     WHERE departments.id = ?`;
    
//     // const sql = `SELECT departments.*, role.name 
//     //         AS role_name 
//     //         FROM departments
//     //         LEFT JOIN roles 
//     //         ON departments.role_id = role.id`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//         }
//         console.table(rows);
//         mainMenu()
//     });
// };

    //-------------------------THIS WORKS------VIEW--EMPLOYEE BY MANAGER -----------(BONUS)---------------------------------------------------------------------


function viewEmpByMgr() {

    

    inquirer .prompt([
        {
            type: 'input',
            name: 'employee',
            message: 'Select Employee to change',
            
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Select the Manager of Employee',
           
        },
    ])
    .then(data => {
        employeeArr.push(data);
        console.log(employeeArr);

        let changeEmp = 'Employee';
        let managerOfEmp = 'Manager';


        if (data === "Select Employee to change") {
            console.log(changeEmp)
        } else {
            (data === "Select the Manager of Employee") 
            console.log(managerOfEmp)
        }
           mainMenu();

     });
}

//------------------------------------VIEW EMPLOYEE BY DEPT----------works---------------------(BONUS)---------------------------------------------------------------

function viewEmpByDept() {
    inquirer .prompt([
        {
            type: 'input',
            name: 'employee',
            message: 'Select employee to change'
        },
        {
            type: 'input',
            name: 'department',
            message: 'Select the Department of Employee'
        },
    ])
    .then(data => {
        employeeArr.push(data);
        console.log(employeeArr);

        let empChange = 'Employee';
        let deptOfEmp = 'Department';

        if (data === "Select employee to change") {
            console.log(empChange)
        } else {
            (data === "Select the Department of Employee")
            console.log(deptOfEmp)
        }
          mainMenu();
    });
}

//----------------------- ADD EMPLOYEE WORKS--------------------------------------------------

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

//-------------ADD ROLE----------------------------NOT SURE IF THESE ARE CORRECT FORMAT OR STRUCTURE----------------------------ADD DEPT----------------------------------

// // function addRole() {
// //     inquirer
// //         .prompt([
// //             {
// //                 type: 'input',
// //                 message: 'What is their title?',
// //                 name: 'title'
// //             },
// //             {
// //                 type: 'input',
// //                 message: 'What is their salary?',
// //                 name: 'salary'
// //             },
// //             {
// //                 type: 'input',
// //                 message: 'What is their department_id?',
// //                 name: 'department_id'
// //             }
// //         ])
// //         .then((data) => {
// //             const sql = `SELECT * FROM roles WHERE id = ?`;

// //             db.query(
// //                 "SELECT * FROM roles WHERE id = ?",

// //                 [data.title, data.salary, data.department_id],

// //                 (err, data) => {
// //                     if (err) {
// //                     }
// //                     console.table(data);
// //                     mainMenu();
// //                 }
// //             );
// //         });

// // }


// // function addDepartment() {
// //     inquirer 
// //         .prompt([
// //             {
// //                 type: 'list',
// //                 message: "What is your department?",
// //                 name: 'department',
// //                 choices: ['Sales', 'Service', 'Parts', 'Finance']
// //             }
// //     ])
// //         .then((data) => {
// //             const sql = `INSERT INTO department (name) VALUES (?,?,?,?)`;
            
// //             db.query(
// //                 "INSERT INTO department (name) VALUES (?,?,?,?)",

// //                 [data.name],

// //                 (err, data) => {
// //                     if (err) {
// //                     }
// //                     console.table(data);
// //                     mainMenu();
// //                 }
// //             );
// //         });
// //  };


//-------------------------------------UPDATE BY ROLE --------------NEED TO EDIT/ DOESNT WORK YET/ERRORS-------------UPDATE--- BY MANAGER-------(BONUS)-----------------------
//  update employee by role
// function updateEmployeeRole() {
//     const sql = `UPDATE employee SET role_id = ? WHERE id =?`;

//     db.query(
//         "UPDATE employee SET role_id = ? WHERE id = ?",

//         (err, result) => {
//             if (err) {
//                 console.log(err.message);
//             } else if (!result.deleteRow) {
//                 console.log('Employee not found');
//             } else {
//                 console.log('success');
//                 mainMenu();
//             }
//         }
//     )

// }
    
//    update employees by manager
// function updateEmployeeMgr() {

//     const sql = `UPDATE employee SET manager_id = ? WHERE id = ?`;

//     db.query(
//         "UPDATE employee SET manager_id = ? WHERE id = ?",

//         (err, result) => {
//             if (err) {
//                 console.log(err.message);
//             } else if (!result.deleteRow) {
//                 console.log('Employee not found');
//             } else {
//                 console.log('success');
//                 mainMenu();
//             }
//         }
//     )};

// ------------------------------made changes 342 thru 386----------------------NOT SURE IF THEY WORK YET--------------------(BONUS)---------------------------------

// let deletedRow = '';


// function deleteEmployee() {
//     // Delete a employee 
//     const sql = `DELETE FROM employee WHERE id = ?`;

//     db.query(`DELETE FROM employee WHERE id = ?`, deletedRow, (err, result) => {
//         if (err) {
//            console.log(err);
//         } 
//            console.log(result);
//            mainMenu();
//     });
// };


// // function deleteRole() {
// //     // Delete a role 
// //     const sql = `DELETE FROM role WHERE id = ?`;


//     db.query(`DELETE FROM role WHERE id = ?`, deletedRow, (err, result) => {
//         if (err) {
//            console.log(err);
//         } 
//            console.log(result);
//            mainMenu();
//      });
// };

// // function deleteDept() {
// //     //DELETE a department
// // const sql = `DELETE FROM departments WHERE id = ?`;

//     db.query(`DELETE FROM department WHERE id = ?`, deletedRow, (err, result) => {
//         if (err) {
//            console.log(err);
//         } 
//            console.log(result);
//            mainMenu();
//        });
// // };






// ----------------THIS IS THE TOTAL DEPTS (BONUS)------------------------------------------------------------------------------------------






// // function viewDeptBuds() {
// //     // Get the total employees for all of the departments
// //     const sql = `SELECT departments.*, roles.name AS role_name,
// //     COUNT(department_id)
// //     AS count FROM employees
// //     LEFT JOIN departments ON employees.department_id = department.id
// //     LEFT JOIN roles ON departments.role_id = roles.id
// //     GROUP BY department_id
// //     ORDER BY count DESC`;

// // db.query(sql, (err, rows) => {
// // if (err) {
// // }
// // console.table(rows);
// // mainMenu();
// // });


// // // Create a total budget of the combined salaries of all employees in each department

// // const sql = `INSERT INTO employees (employer_id, department_id) VALUES (?,?)`;
// // // const params = [body.employers_id, body.department_id];

// // db.query(sql, (err, result) => {
// // if (err) {
// // console.table(data);

// // }






//-----------------------------------EXTRA STTUFF NOT SURE IF I NEED THEM-----------------------------------------------------------------------



// //     // // SELECT FROM a single employee
// //     // const sql = `SELECT * FROM employers WHERE id = ?`;

// //     // db.query(sql, params, (err, rows) => {
// //     //     if (err) {
// //     //     }
// //     //     console.table(rows);
// //     // });



    




// // // // Update a department's role 
// // // const sql = `UPDATE department SET role_id = ? WHERE id = ?`;

// // // db.query(
// // //     "UPDATE department SET role_id = ? WHERE id = ?",

// // //     [data.roles_id],


// // //     (err, result) => {
// // //         if (err) {
    
// // //         } else if (!result.deletedRow) {
    
// // //         message: ('Department not found')
    
// // //         } else {

// // //         message: ('success')
       
// // //         changes: result.deletedRow
// // //     }
// // // }



            
        
    








        

    
