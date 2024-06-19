const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Person = require('./personModel');

const Tutor = sequelize.define('Tutor', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  profesion: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
},
 personId: {
    type: DataTypes.INTEGER,
    references: {
        model: Person,
        key: 'id'
    }
}
});

module.exports = Tutor;