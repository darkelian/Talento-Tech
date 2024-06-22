const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Tutor = require('./tutorModel');
const Subject = require('./subjectModel');

const TutorSubject = sequelize.define('TutorSubject', {
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
    subjectId: {
        type: DataTypes.INTEGER,
        references: {
            model: Subject,
            key: 'id'
        }
    }},
    { tableName: 'TutorSubjects' }
);

module.exports = TutorSubject;