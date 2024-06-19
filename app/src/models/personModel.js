const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');
const City = require('./cityModel');

const Person = sequelize.define('Person', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userId : {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    cityId : {
        type: DataTypes.INTEGER,
        references: {
            model: City,
            key: 'id'
        }
    }
});

module.exports = Person;