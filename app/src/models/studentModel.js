const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Person = require('./personModel');

const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    personId: {
        type: DataTypes.INTEGER,
        references: {
            model: Person,
            key: 'id'
        }
    }},
    { tableName: 'Students' }
);

module.exports = Student;