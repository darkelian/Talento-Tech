const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./studentModel');
const Tutor = require('./tutorModel');
const ReservationType = require('./reservationTypeModel');

const Reservation = sequelize.define('Reservation', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
      },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: false
    },
    date_start: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: false
    },
    date_end: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: false
    },
    cancelled: {
        type: DataTypes.TEXT('tiny'),
        allowNull: false,
        unique: true
    },
    studentId : {
        type: DataTypes.INTEGER,
        references: {
            model: Student,
            key: 'id'
        }
    },
    tutorId : {
        type: DataTypes.INTEGER,
        references: {
            model: Tutor,
            key: 'id'
        }
    },
    reservationTypeId : {
        type: DataTypes.INTEGER,
        references: {
            model: ReservationType,
            key: 'id'
        }
    }
});

module.exports = Reservation;