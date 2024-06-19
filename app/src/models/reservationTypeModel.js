const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const reservationType = sequelize.define('reservationType', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  description : {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
}
});

module.exports = reservationType;