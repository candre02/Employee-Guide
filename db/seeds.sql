
INSERT INTO department (name)
VALUES 
("Sales"),
("Service"),
("Parts"),
("Finance");


INSERT INTO role (title, salary, department_id)
VALUES 
("Sales Consultant", "30000", "1"),
("Sales Lead", "60000", "1"),
("Service Advisor", "65000", "2"),
("Service Manager", "80000", "2"),
("Parts Associate", "34000", "3"),
("Parts Manager", "50000", "3"),
("Accountant", "60000", "4"),
("Account Manager", "80000", "4");



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Stacey", "Smith", "1", "2"),
("Frank", "Duryea", "2", NULL),
("Lindsey", "Longhorn", "3", "4"),
("Karl", "Benz", "4", NULL),
("Wilma", "Westchester", "5", "6"),
("Charles", "Duryea", "6", NULL),
("Megan", "Mills", "7", "8"),
("John", "Law", "8", NULL);
