// controllers/user.js
const users = require('../data/user');

exports.createUser = (req, res) => {
    const { email, name, password } = req.body;
    const newUser = { id: users.length + 1, email, name, password };
    users.push(newUser);
    res.status(201).send('Usuario creado con éxito');
};


exports.updateUser = (req, res) => {
    const { userId } = req.params;
    const { email, name } = req.body;
    const user = users.find(u => u.id === parseInt(userId));
    if (user) {
        if (email) user.email = email;
        if (name) user.name = name;
        res.send('Usuario actualizado con éxito');
    } else {
        res.status(404).send('Usuario no encontrado');
    }
};


exports.deleteUser = (req, res) => {
    const { userId } = req.params;
    const index = users.findIndex(u => u.id === parseInt(userId));
    if (index !== -1) {
        users.splice(index, 1);
        res.send('Usuario eliminado con éxito');
    } else {
        res.status(404).send('Usuario no encontrado');
    }
};


exports.login = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.send('Inicio de sesión exitoso');
    } else {
        res.status(401).send('Credenciales inválidas');
    }
};
