// src/app.js
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Rutas de autenticación
app.get('/auth', passport.authenticate('oauth2'));

app.get('/auth/callback',
  passport.authenticate('oauth2', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
// Importar las Rutas
//app.use('/users', require('./routes/userRoutes'));
const users = require("./routes/userRoutes")
const students = require("./routes/studentRoutes")

//Creamos la ruta del navegador, las rutas del back inician con '/api'
app.use('/apis', users)
app.use('/api', students)

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
