// Dependencies Imported into app
const db = require('./config/connection');
const inquirer = require('inquirer');
require('console.table');

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
            else () {

            }

        });

};

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


function viewDepartments() {
    
    const sql = `SELECT departments.*, roles.name 
            AS role_name 
            FROM departments
            LEFT JOIN roles 
            ON departments.role_id = roles.id`;

    db.query(sql, (err, rows) => {
        if (err) {
        }
        console.table(rows);
        mainMenu()
    });
};

function viewEmpByMgr() {

    let employeeArray = [];

    for(i = 0; i < tracker{0}.length; i++) {
        employeeArray.push(tracker[0][i].Employee);
    }

    inquirer .prompt([
        {
            name: 'employee',
            type: 'list',
            message: 'Select employee to change.',
            choices: employeeArray,
        },
        {
            name: 'manager',
            type: 'list',
            message: 'Select the manager of Employee.',
            choices: employeeArray,
        },
    ])
    .then((answer) => {
        let employeeId;
        let managerId;
        
        
        }
    }

};

function viewEmpByDept() {

}


function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your first name?",
                name: 'first_name'
            },
            {
                type: 'input',
                message: "What is your last name?",
                name: "last_name"
            },
            {
                type: 'input',
                message: "What is your role id?",
                name: "role_id"
            },
            {
                type: 'input',
                message: "What is your manager's id?",
                name: "manager_id"

            }
        ])
        .then((data) => {
            const sql = `INSERT INTO employee ('first_name', 'last_name', 'roles_id', 'manager_id) VALUES (?,?,?,?)`;


            db.query(
                "INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)",

                [data.first_name, data.last_name, data.roles_id, data.manager_id],

                (err, data) => {
                    if (err) {
                    }
                    console.table(data);
                    mainMenu();
                }
            );
        });

}


function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is their title?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'What is their salary?',
                name: 'salary'
            },
            {
                type: 'input',
                message: 'What is their department_id?',
                name: 'department_id'
            }
        ])
        .then((data) => {
            const sql = `SELECT * FROM roles WHERE id = ?`;

            db.query(
                "SELECT * FROM roles WHERE id = ?",

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


function addDepartment() {
    inquirer 
        .prompt([
            {
                type: 'list',
                message: "What is your department?",
                name: '',
                choices: ['Sales', 'Service', 'Parts', 'Finance']
            }
    ])
        .then((data) => {
            const sql = `INSERT INTO department (name) VALUES (?,?,?,?)`;
            
            db.query(
                "INSERT INTO department (name) VALUES (?,?,?,?)",

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



function updateEmployeeRole() {
    const sql = `UPDATE employee SET role_id = ? WHERE id =?`;

    db.query(
        "UPDATE employee SET role_id = ? WHERE id =?",

        (err, result) => {
            if (err) {
                console.log(err.message);
            } else if (!result.deleteRow) {
                console.log('Employee not found');
            } else {
                console.log('success');
                mainMenu();
            }
        }
    )

}
    

function updateEmployeeMgr() {
    // update employees by manager
    const sql = `UPDATE employee SET manager_id = ? WHERE id = ?`;


    db.query(
        "INSERT employee SET manager_id = ? WHERE id = ?",

        (err, result) => {
            if (err) {
                console.log(err.message);
            } else if (!result.deleteRow) {
                console.log('Employee not found');
            } else {
                console.log('success');
                mainMenu();
            }
        };




function deleteEmployee() {
    // Delete a employee 
    const sql = `DELETE FROM employee WHERE id = ?`;

    db.query(sql, req.params.id, (err, result) => {
        if (err) {
           console.log(err.message);
        } else if (!result.deletedRow) {
           console.log('Employee not found');
        } else {
           console.log('deleted');
        }
    });

};


function deleteRole() {
    // Delete a role 
    const sql = `DELETE FROM role WHERE id = ?`;


    db.query(sql, (err, result) => {
        if (err) {
        console.log(err.message);
        } else if (!result.deletedRow) {
        console.log('Role not found');
        } else {
        console.log('deleted');
        }
    }

};

function deleteDept() {
    //DELETE a department
const sql = `DELETE FROM departments WHERE id = ?`;

db.query(sql, params, (err, result) => {
    if (err) {
        
    } else if (!result.deletedRow) {
        
            message: ('Department not found')
        
    } else {
        
            message: ('deleted')
            changes: result.deletedRow,

};

function viewDeptBuds() {
    // Get the total employees for all of the departments
    const sql = `SELECT departments.*, roles.name AS role_name,
    COUNT(department_id)
    AS count FROM employees
    LEFT JOIN departments ON employees.department_id = department.id
    LEFT JOIN roles ON departments.role_id = roles.id
    GROUP BY department_id
    ORDER BY count DESC`;

db.query(sql, (err, rows) => {
if (err) {
}
console.table(rows);
mainMenu();
});


// Create a total budget of the combined salaries of all employees in each department

const sql = `INSERT INTO employees (employer_id, department_id) VALUES (?,?)`;
// const params = [body.employers_id, body.department_id];

db.query(sql, (err, result) => {
if (err) {
console.table(data);

}










    // // SELECT FROM a single employee
    // const sql = `SELECT * FROM employers WHERE id = ?`;

    // db.query(sql, params, (err, rows) => {
    //     if (err) {
    //     }
    //     console.table(rows);
    // });



    


    




    




    //     const sql = `SELECT departments.*, roles.name
    //     AS role_name
    //     FROM departments
    //     LEFT JOIN roles
    //     ON departments.role_id = roles.id
    //     WHERE departments.id = ?`;

    //     db.query(sql, (err, row) => {
    //         if (err) {
    //         }
    //         console.table(row);
    //         mainMenu();
    //     });
    // }
    



// // Update a department's role 
// const sql = `UPDATE department SET role_id = ? WHERE id = ?`;

// db.query(
//     "UPDATE department SET role_id = ? WHERE id = ?",

//     [data.roles_id],


//     (err, result) => {
//         if (err) {
    
//         } else if (!result.deletedRow) {
    
//         message: ('Department not found')
    
//         } else {

//         message: ('success')
       
//         changes: result.deletedRow
//     }
// }



            
        
    








        

    
