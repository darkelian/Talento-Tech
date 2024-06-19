const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Rol = require('./rolModel');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rolId: {
    type: DataTypes.INTEGER,
    references: {
      model: Rol,
      key: 'id'
    }
  }
});

module.exports = User;