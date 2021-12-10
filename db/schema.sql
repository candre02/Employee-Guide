DROP DATABASE IF EXISTS dealership;
CREATE DATABASE dealership;

USE dealership;

CREATE TABLE department (
    id INTEGER PRIMARY KEY,
    dept_name VARCHAR(30)
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(30),
    department_id INTEGER
);

CREATE TABLE employee (
    employee_id INTEGER PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roles_id INTEGER,
    manager_id INTEGER NOT NULL
);


