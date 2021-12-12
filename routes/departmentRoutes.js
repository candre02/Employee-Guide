

// Get all department's and their role's 
router.get('departments', (req, res) => {
    const sql = `SELECT departments.*, roles.name 
                    AS role_name 
                    FROM departments
                    LEFT JOIN roles 
                    ON departments.role_id = roles.id`;

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

// Get a single department with the their role's
router.get('/department/:id', (req, res) => {
    const sql = `SELECT departments.*, roles.name
                AS role_name
                FROM departments
                LEFT JOIN roles
                ON departments.role_id = roles.id
                WHERE departments.id = ?`;
const params = [req.params.id];

db.query(sql, params, (err, row) => {
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

// Create a department: post route
router.post('/department', ({ body }, res) => {
    const errors = inputCheck(
        body,
        'first_name',
        'last_name',
        'dept_name'
    );
    if (errors) {
        res.status(400).json({ error: errors});
        return;
    }

    const sql = `INSERT INTO department (name) 
                VALUES (?,?,?,?)`;
    
    const params = [
        body.first_name,
        body.last_name,
        body.dept_name,
        body.role_id
    ];
    
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

// Update a department's role, put routes
router.put('/department/:id', (req, res) => {
    const errors = inputCheck(req.body, 'role_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }

    const sql = `UPDATE departments SET role_id = ?
                 WHERE id = ?`;
    
    const params = [req.body.role_id, req.params.id];
    
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.deletedRow) {
            res.json({
                message: 'Department not found'
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

// Delete a department, delete route
router.delete('/department/:id', (req, res) => {
    const sql = `DELETE FROM departments WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: res.message });
        } else if (!result.deletedRow) {
            res.json({
                message: 'Department not found'
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