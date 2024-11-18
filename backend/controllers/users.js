const pool = require('../config/db');

async function getUsers(req, res) {
    try {
        const client = await pool.connect();
        const result = await pool.query('SELECT * FROM users');
        client.release();
        res.json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

async function postUser(req, res) {
    const { name, email, password } = req.body;
    const query = `
        INSERT INTO users (name, email, password) 
        VALUES ($1, $2, $3) 
        RETURNING *`;
    const values = [name, email, password];
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
    getUsers,
    postUser
}