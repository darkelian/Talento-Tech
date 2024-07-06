// src/config/database.js
const { Sequelize } = require('sequelize');
const { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } = require("./config.js")

const sequelize = new Sequelize(
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: 'postgres',
        define: {
            timestamps: false
        },
    });

module.exports = sequelize;
