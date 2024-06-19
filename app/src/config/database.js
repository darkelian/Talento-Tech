// src/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tutoria', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
