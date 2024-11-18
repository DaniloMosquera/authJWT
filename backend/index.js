const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(require("./routes/users"));
app.use(require("./routes/employees"));

// Ruta de prueba para generar un token 
app.post('/login', (req, res) => {
    // Simulación de usuario 
    const user = { id: 1, username: 'admin' };
    const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
    res.json({ token });
});

app.listen(port);
console.log(`Servidor escuchando en el puerto ${port}`);