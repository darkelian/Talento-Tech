const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('./config/passport');
const sequelize = require('./config/database');
const app = express();
const port = 4000;

// Importar modelos
const City = require('./models/cityModel');
const Person = require('./models/personModel');
const Reservation = require('./models/reservationModel');
const ReservationType = require('./models/reservationTypeModel');
const Student = require('./models/studentModel');
const Subject = require('./models/subjectModel');
const Tutor = require('./models/tutorModel');
const TutorSubject = require('./models/tutorSubjectModel');
const User = require('./models/userModel');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

// Rutas de autenticación
app.get('/auth', passport.authenticate('oauth2'));

app.get('/auth/callback',
  passport.authenticate('oauth2', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

// Importar las rutas
const users = require('./routes/userRoutes');
const students = require('./routes/studentRoutes');
const cities = require('./routes/cityRoutes'); // Asegúrate de que la ruta es correcta

// Crear las rutas del navegador, las rutas del back inician con '/api'
app.use('/api/user', users);
app.use('/api', students);
app.use('/api/cities', cities);

// Sincronizar la base de datos y luego iniciar el servidor
sequelize.sync({ force: true }) // `force: true` recrea las tablas en cada reinicio (útil para desarrollo)
  .then(() => {
    console.log('Database & tables created!');
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
