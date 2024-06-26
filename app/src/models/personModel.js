const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');
const City = require('./cityModel');
const GenderEnum = require('./genderEnum');
const documentTypeEnum = require('./documentTypeEnum');

const Person = sequelize.define('Person', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    names: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastNames: {
        type: DataTypes.STRING,
        allowNull: false
    },
    typeDocument: {
        type: DataTypes.ENUM,
        values: Object.values(documentTypeEnum),
        allowNull: false
    },
    numberDocument: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    gender: {
        type: DataTypes.ENUM,
        values: Object.values(GenderEnum),
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    cityId: {
        type: DataTypes.INTEGER,
        references: {
            model: City,
            key: 'id'
        }
    }
}, {
    tableName: 'persons'
});

module.exports = Person;