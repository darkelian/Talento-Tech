const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');
const City = require('./cityModel');
const genderEnum = require('./genderEnum');
const documentTypeEnum = require('./documentTypeEnum');

const People = sequelize.define('People', {
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
        values: Object.keys(documentTypeEnum),
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
        values: Object.keys(genderEnum),
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
    tableName: 'People'
});

City.hasMany(People, { as: 'city_people', foreignKey: 'cityId' });
People.belongsTo(City, {
    foreignKey: "cityId",
});

User.hasMany(People, { as: 'user_people', foreignKey: 'userId' });
People.belongsTo(User, {
    foreignKey: "userId",
});

module.exports = People;