// routes/user.js
const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

// Definir todas las rutas antes de exportar el módulo
router.post('/user', userController.createUser);
router.put('/user/:userId', userController.updateUser);
router.delete('/user/:userId', userController.deleteUser);
router.post('/login', userController.login);

// Exportar el router al final del archivo
module.exports = router;
