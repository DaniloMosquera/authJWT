const pool = require('../config/db');

async function getEmployees(req, res) {
    try {
        const client = await pool.connect();
        const result = await pool.query('SELECT * FROM employees');
        client.release();
        res.json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

async function getEmployee(req, res) {
    const { id } = req.params;
    const query = 'SELECT * FROM employees WHERE employee_id = $1';
    const values = [id];
    try {
        const client = await pool.connect();
        const result = await pool.query(query, values);
        client.release();
        res.json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

async function postEmployee(req, res) {
    const { employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id } = req.body;
    const query = `
        INSERT INTO employees 
        (employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,commission_pct,manager_id,department_id) 
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
        RETURNING *`;
    const values = [employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id];
    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error en el servidor' });
    }
}

async function putEmployee(req, res) {
    const { employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id } = req.body;
    const query = `
        UPDATE employees SET 
        first_name = $2, last_name = $3, email = $4, phone_number = $5, hire_date = $6, job_id = $7, salary = $8, commission_pct = $9, manager_id = $10, department_id = $11
        WHERE employee_id = $1  
        RETURNING *`;
    const values = [employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id];
    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error en el servidor' });
    }
}

async function deleteEmployee(req, res) {
    const { id } = req.params;
    const query = 'DELETE FROM employees WHERE employee_id = $1';
    const values = [id];
    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error en el servidor' });
    }
}


module.exports = {
    getEmployees,
    getEmployee,
    postEmployee,
    putEmployee,
    deleteEmployee
};