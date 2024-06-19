const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Tutor = require('./tutorModel');
const Materia = require('./materiaModel');

const Subject = sequelize.define('Subject', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
      },
    tutorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Tutor,
            key: 'id'
        },
    },    
    materiaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Materia,
            key: 'id'
        }
    }
});

module.exports = Subject;