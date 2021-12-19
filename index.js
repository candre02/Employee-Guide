// Dependencies Imported into app
const db = require('./config/connection');
const inquirer = require('inquirer');

require('console.table');

// let employeeArr = [];

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
                'View All Departments', 
                // 'View Employee by Manager', 
                // 'View Employee by Department', 
                'Add Employee', 
                'Add Role', 
                'Add Department', 
                'Update Employee Role', 
                'Update Employee Manager', 
                'Delete Employee',
                'Delete Role',
                'Delete Department',
                // 'View Department Budgets'
            ]
        })
        .then(data => {
            console.log(data)
            if (data.Menu === 'View All Employees') {
                viewEmployees();
            }
            else if (data.Menu === 'View All Roles') {
                viewRoles();
            }
            else if (data.Menu === 'View All Departments') {
                viewDepartments();
            }
            // else if (data.Menu === 'View Employee by Manager') {
            //     viewEmpByMgr();
            // }
            // else if (data.Menu === 'View Employee by Department') {
            //     viewEmpByDept();
            // }
            else if (data.Menu === 'Add Employee') {
                addEmployee();
            }
            else if (data.Menu === 'Add Role') {
                addRole();
            }
            else if (data.Menu === 'Add Department') {
                addDepartment();
            }
            else if (data.Menu === 'Update Employee Role') {
                updateEmployeeRole();
            }
            else if (data.Menu === 'Update Employee Manager') {
                updateEmployeeMgr();
            }
            else if (data.Menu === 'Delete Employee') {
                deleteEmployee();
            }
            else if (data.Menu === 'Delete Role') {
                deleteRole();
            }
            else if (data.Menu === 'Delete Department') {
                deleteDept();
            }
            // else if (data.Menu === 'View Department Budgets') {
            //     viewDeptBuds();
            // }
           
            
          

            

        });
};

// View all Employees---finished--works
function viewEmployees() {
    const sql = `SELECT * FROM employee ORDER BY role_id`;

    db.query(sql, (err, rows) => {
        if (err) {
        }
        console.table(rows)
        mainMenu()
    });
};

// View All  Roles-- finished-works
function viewRoles() {
    const sql = `SELECT * FROM role;`;

    db.query(sql, (err, rows) => {
        if (err) {
        }
        console.table(rows);
        mainMenu();
    });
};


// View all departments --- works--finished
function viewDepartments() {
    const sql = `SELECT * FROM department;`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.table(rows);
        mainMenu();
    });
};




    

// View Employee by Manager
// function viewEmpByMgr() {
//     inquirer .prompt([
//         {
//             type: 'input',
//             name: 'employee',
//             message: 'Select Employee to change'
            
//         },
//         {
//             type: 'input',
//             name: 'manager',
//             message: 'Select the Manager of Employee'
           
//         },
//     ])
//     .then(data => {
//         employeeArr.push(data);
//         console.log(employeeArr);

//         let changeEmp = 'Employee';
//         let managerOfEmp = 'Manager';


//         if (data === "Select Employee to change") {
//             console.log(changeEmp)
//         } else {
//             (data === "Select the Manager of Employee") 
//             console.log(managerOfEmp)
//         }
//            mainMenu();

//      });
// }


// View Employee by department
// function viewEmpByDept() {
//     inquirer .prompt([
//         {
//             type: 'input',
//             name: 'employee',
//             message: 'Select employee to change'
//         },
//         {
//             type: 'list',
//             name: 'department',
//             message: 'Select the Department of Employee',
//             choices: ['Sales', 'Service', 'Parts', 'Finance'],
//             filter: function(choice){
//                 if (choice === 'Sales') {
//                     return 1;
//                 }
//                 if (choice === 'Service') {
//                     return 2;
//                 }
//                 if (choice === 'Parts') {
//                     return 3;
//                 }
//                 if (choice === 'Finance') {
//                     return 4;
//                 }
//             }
//         }
//     ])
//     .then(data => {
//         employeeArr.push(data);
//         console.log(employeeArr);

//         let empChange = 'Employee';
//         let deptOfEmp = 'Department';

//         if (data === "Select employee to change") {
//             console.log(empChange)
//         } else {
//             (data === "Select the Department of Employee")
//             console.log(deptOfEmp)
//         }
//           mainMenu();
//     });
// }

//------- ADD EMPLOYEE ----works ------finished---
// Add Employee
function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your employee's first name?",
                name: 'first_name'
            },
            {
                type: 'input',
                message: "What is your employee's last name?",
                name: "last_name"
            },
            {
                type: 'list',
                message: "What is your employee's role?",
                name: "role_id",
                choices: ['1', '3', '5', '7']
            },
            {
                type: 'list',
                message: "What is your employee's manager?",
                name: "manager_id",
                choices: ['2', '4', '6', '8']

            }
        ])
        .then((data) => {
            const sql = `INSERT INTO employee ('first_name', 'last_name', 'role_id', 'manager_id) VALUES (?,?,?,?)`;
           console.log(data)

            db.query(
                "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",

                [data.first_name, data.last_name, data.role_id, data.manager_id],

                (err, data) => {
                    if (err) {
                    }
                    console.table(data);
                    mainMenu();
                }
            );
        });

}

// ADD ROLE-------work--finished----
function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of the role?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'What is the salary of the role?',
                name: 'salary'
            },
            {
                type: 'list',
                message: 'Which department does the role belong to?',
                name: 'department_id',
                choices: ['Service', 'Parts', 'Sales', 'Finance'],
                filter: function(choice){
                    if (choice === 'Sales') {
                        return 1;
                    }
                    if (choice === 'Service') {
                        return 2;
                    }
                    if (choice === 'Parts') {
                        return 3;
                    }
                    if (choice === 'Finance') {
                        return 4;
                    }
                }
            }
        ])
        .then((data) => {
            console.log(data)
            // const sql = `SELECT * FROM roles WHERE id = ?`;
            const sql = `INSERT INTO role ('title', 'salary', 'department_id') VALUES (?,?,?)`;

            db.query(
                "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)",
                // "SELECT * FROM roles WHERE id = ?",


                [data.title, data.salary, data.department_id],

                (err, data) => {
                    if (err) {
                    }
                    console.table(data);
                    mainMenu();
                }
            );
        });

}

// ADD DEPT------works----- finished
function addDepartment() {
    inquirer 
        .prompt([
            {
                type: 'list',
                name: 'name',
                message: "What is the name of the department?",
                choices: ['Sales', 'Service', 'Parts', 'Finance']
            }
    ])
        .then((data) => {
            const sql = `INSERT INTO department (name) VALUES (?)`;
            
            db.query(
                "INSERT INTO department (name) VALUES (?)",

                [data.name],

                (err, data) => {
                    if (err) {
                    }
                    console.table(data);
                    mainMenu();
                }
            );
        });
 };





//  update employee by role----- works---- finihed----
function updateEmployeeRole() {
    inquirer .prompt([
        {
            type: 'input',
            name: 'employee',
            message: "Which employee's role do you want to update?"
        },
        {
            type: 'input',
            name: 'role_id',
            message: "What is the role's id new role?"
        }
    ])
    .then((data) => {
        console.log(data)
        const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
        
        db.query(
            "UPDATE employee SET role_id = ? WHERE id = ?",

            [data.role_id, data.employee],

            (err, data) => {
                if (err) {
                    console.log(err)
                }
                console.table(data)
                mainMenu();
            }
        )}
    )
        }
    
//  Update employees by manager----(Bonus)---works/finished
function updateEmployeeMgr() {
    inquirer .prompt([
        {
            type: 'input',
            name: 'employee',
            message: "Which employee's role do you want to update?"
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "What is the manager's id new manager?"
        }
    ])
    .then((data) => {
        console.log(data)
        const sql = `UPDATE employee SET manager_id = ? WHERE id = ?`;

        db.query(
            "UPDATE employee SET manager_id = ? WHERE id = ?",

            [data.manager_id, data.employee],

            (err, data) => {
                if (err) {
                    console.log(err);
                }
                    console.table(data);
                    mainMenu();
                }
                );
            });
        };
    

// Delete a employee----works/finished----(Bonus)----
function deleteEmployee() {
    console.log('deleteEmployee')

    inquirer .prompt([
        {
            type: 'input',
            name: 'employee',
            message: "Which employee do you want to deleted?"
        }
    ])
    .then((data) => {
        const sql = `DELETE FROM employee WHERE id = ?`;

        db.query(
            `DELETE FROM employee WHERE id = ?`, 

        [data.employee],

         
        (err, data) => {
            if (err) {
               console.log(err);
            } 
               console.table(data);
               mainMenu();
        });
    })
};
    
    

// Delete Role----works--- finished---- (bonus)
function deleteRole() {
    inquirer .prompt([
        {
            type: 'input',
            name: 'role',
            message: "Which role do you want to deleted?"
        }
    ])
    .then((data) => {
        const sql = `DELETE FROM role WHERE id = ?`;

        db.query(
            `DELETE FROM role WHERE id = ?`,

            [data.role],
    
            (err, data) => {
                if (err) {
               console.log(err);
            } 
               console.table(data);
               mainMenu();
         });
    });
}

     
    
// DELETE a department----finished--(bonus)
function deleteDept() {
    inquirer .prompt([
        {
            type: 'input',
            name: 'department',
            message: "Which department do you want to delete?"
        }
    ])
    .then((data) => {
        const sql = `DELETE FROM departments WHERE id = ?`;

        db.query(
            `DELETE FROM department WHERE id = ?`, 

            [data.department],

            (err, data) => {
                if (err) {
                   console.log(err);
                } 
                   console.table(data);
                   mainMenu();
                })
            });
        };











// Get the total employees for all of the departments
// function viewDeptBuds() {
//     inquirer .prompt([
//         {
//             type: 'input',
//             name: 'department',
//             message: "What is the total budget of a department?"

//         },
//         {
//             type: 'list',
//             name: ''
//         }
//     ])
//     .then((data) => {
//         const sql = `SELECT department.*, role.id AS role_id,
//         COUNT(department_id)
//         AS count FROM employee
//         LEFT JOIN department ON employee.department_id = department.id
//         LEFT JOIN role ON department.role_id = role.id
//         GROUP BY department_id
//         ORDER BY count DESC`;

//         db.query(
//             `SELECT department.*, role_name AS role_name,
//         COUNT(department_id)
//         AS count FROM employee
//         LEFT JOIN department ON employee.department_id = department.id
//         LEFT JOIN role ON department.role_id = role.id
//         GROUP BY department_id
//         ORDER BY count DESC`,

//         [data.department],

//         (err, data) => {
//             if (err) {
//                 console.log(err)
//             }
//             console.table(data);
//             mainMenu();
//         })
//     });
// }

    
   




// // // Create a total budget of the combined salaries of all employees in each department

// // const sql = `INSERT INTO employees (employer_id, department_id) VALUES (?,?)`;
// // // const params = [body.employers_id, body.department_id];

// // db.query(sql, (err, result) => {
// // if (err) {
// // console.table(data);

// // }













    








            
        
    








        

    
