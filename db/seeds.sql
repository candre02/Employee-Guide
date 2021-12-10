INSERT INTO department (id, dept_name)
VALUES 
(1, "Sales"),
(2, "Service"),
(3, "Parts"),
(4, "Finance");

INSERT INTO role (id, title, salary, department_id)
VALUES 
(1, "Sales Consultant", "30000", "Sales"),
(2, "Sales Lead", "60000", "Sales"),
(3, "Service Advisor", "65000", "Service"),
(4, "Service Manager", "80000", "Service"),
(5, "Parts Associate", "34000", "Parts"),
(6, "Parts Manager", "50000", "Parts"),
(7, "Accountant", "60000", "Finance"),
(8, "Account Manager", "80000", "Finance");


INSERT INTO employee (id, first_name, last_name, roles_id, manager_id)
VALUES
(1, "Stacey", "Smith", "Sales Consultant", "Frank Duryea"),
(2, "Frank", "Duryea", "Sales Lead", "null"),
(3, "Lindsey", "Longhorn", "Service Advisor", "Karl Benz"),
(4, "Karl", "Benz", "Service Manager", "null"),
(5, "Wilma", "Westchester", "Parts Associate", "Charles Duryea"),
(6, "Charles", "Duryea", "Parts Manager", "null"),
(7, "Megan", "Mills", "Accountant", "John Law"),
(8, "John", "Law", "Account Manager", "null");
