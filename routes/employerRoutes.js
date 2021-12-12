const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const inputCheck = require('../utils/inputCheck');

// Get all employers alphabetized by roles id
router.get('/employers', (req, res) => {
    const sql = `SELECT * FROM employers ORDER BY role_id`;

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

// Get a single employer
router.get('/employer/:id', (req, res) => {
    const sql = `SELECT * FROM employers WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

// Create a employer
router.post('/employer', ({ body }, res) => {
    // Data validation
    const errors = inputCheck(body, 'first_name', 'last_name', 'roles_id', 'manager_id' );
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }

    const sql = `INSERT INTO employers ('first_name', 'last_name', 'roles_id', 'manager_id) VALUES (?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.roles_id, body.manager_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

// Update a employer's managers
router.put('/employer/:id', (req, res) => {
    // Data validation
    const errors = inputCheck(req.body, 'manager_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }

    const sql = `UPDATE employers SET manager_id = ? WHERE id = ?`;
    const params = [req.body.email, req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.deletedRow) {
            res.json({
                message: 'Employer not found'
            });
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: result.deletedRow
            });
        }
    });
});

// Delete a employer
router.delete('/employer/:id', (req, res) => {
    const sql = `DELETE FROM employers WHERE id = ?`;

    db.query(sql, req.params.id, (err, result) => {
        if (err) {
            res.status(400).json({ error: res.message });
        } else if (!result.deletedRow) {
            res.json({
                message: 'Employer not found'
            });
        } else {
            res.json({
                message: 'deleted',
                changes: result.deletedRow,
                id: req.params.id
            });
        }
    });
});

module.exports = router;