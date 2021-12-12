const db = require('./db/connection');
const inquirer = require('inquirer');
require('console.table');

db.connect(err => {
    mainMenu()
});

function mainMenu() {
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'Menu',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departmets', 'Add department']
    }).then(data =>{
        if (data.Menu === 'View All Employees') {
            viewEmployees()
        }
        else if (data.Menu === 'Add Employee') {
            addEmployee()
        }
        else if (data.Menu === 'Update Employee Role') {
            updateEmployee()
        }
        else if (data.Menu === 'View All Roles') {
            viewRoles()
        }
        else if (data.Menu === 'Add Role') {
            addRole()
        }
        else if (data.Menu === 'View All Departments') {
            viewDepartments()
        }
        else if (data.Menu === 'Add Department') {
            addDepartment()
        }
        
    })

}

function viewEmployees() {
    const sql = `SELECT * FROM employee ORDER BY role_id`;

    db.query(sql, (err, rows) => {
        if (err) {   
        }
        console.table(rows)
        mainMenu()
    });


}

function addEmployee() {
    inquirer.prompt([
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
        const sql = `INSERT INTO employers ('first_name', 'last_name', 'roles_id', 'manager_id) VALUES (?,?,?,?)`;
        // // const params = [body.first_name, body.last_name, body.roles_id, body.manager_id];

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

function updateEmployee() {

}

function viewRoles() {

}

function addRole() {

}

function viewDepartments() {

}

function addDepartment() {

}