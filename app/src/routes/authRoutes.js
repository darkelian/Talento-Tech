// routes/authRoutes.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secretKey = 'talento-tech';

const users = []; // En un entorno real, deberías usar una base de datos

// Ruta para registrar un nuevo usuario
router.post('/register',
    [
        body('username').isString().notEmpty().withMessage('Username is required'),
        body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ],
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).error(errors.array().map(err => err.msg).join(', '));
        }

        try {
            const { username, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            users.push({ username, password: hashedPassword });
            res.success(null, 'User registered');
        } catch (err) {
            next(err);
        }
    }
);

// Ruta para hacer login
router.post('/login',
    [
        body('username').isString().notEmpty().withMessage('Username is required'),
        body('password').isString().notEmpty().withMessage('Password is required')
    ],
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).error(errors.array().map(err => err.msg).join(', '));
        }

        try {
            const { username, password } = req.body;
            const user = users.find(u => u.username === username);
            if (!user) {
                return res.status(400).error('User not found');
            }
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(400).error('Invalid password');
            }
            const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
            res.success({ token }, 'Login successful');
        } catch (err) {
            next(err);
        }
    }
);

// Middleware para verificar el token
function authenticateToken(req, res, next) {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    if (!token) return res.status(401).error('Access Denied');
    try {
        const verified = jwt.verify(token, secretKey);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).error('Invalid Token');
    }
}

// Ruta protegida
router.get('/profile', authenticateToken, (req, res) => {
    res.success(`Hello ${req.user.username}`);
});

module.exports = router;
