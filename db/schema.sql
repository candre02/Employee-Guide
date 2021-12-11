
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(50),
    department_id INTEGER
);


CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER 
);


















-- CREATE TABLE department (
--     id INTEGER PRIMARY KEY,
--     dept_name VARCHAR(30)
-- );

-- CREATE TABLE role (
--     id INTEGER PRIMARY KEY,
--     title VARCHAR(30),
--     salary DECIMAL(30),
--     department_id INTEGER
-- );

-- CREATE TABLE employee (
--     employee_id INTEGER PRIMARY KEY,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     roles_id INTEGER,
--     manager_id INTEGER NOT NULL
-- );


