const { Router } = require('express');
const authenticateToken = require('../middleware/auth');
const router = Router();

var { getEmployees, getEmployee, postEmployee, putEmployee, deleteEmployee } = require('../controllers/employees');

router.get('/employees', authenticateToken, getEmployees);
router.get('/employee/:id', authenticateToken, getEmployee);
router.post('/employee', authenticateToken, postEmployee);
router.put('/employee', authenticateToken, putEmployee);
router.delete('/employee/:id', authenticateToken, deleteEmployee);

module.exports = router;