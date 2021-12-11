const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// Get the total employees for all of the departments
router.get('/employees', (req, res) => {
    const sql = `SELECT departments.*, roles.name AS role_name,
                 COUNT(department_id)
                 AS count FROM employees
                 LEFT JOIN departments ON employees.department_id = department.id
                 LEFT JOIN roles ON departments.role_id = roles.id
                 GROUP BY department_id
                 ORDER BY count DESC`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });             
});

// Create a total budget of the combined salaries of all employees in each department
router.post('/employee', ({ body }, res) => {
    // Data validation
    const errors = inputCheck(body, 'employer_id', 'department_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }

    const sql = `INSERT INTO employees (employer_id, department_id) VALUES (?,?)`;
    const params = [body.employers_id, body.department_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
    });
});

module.exports = router;