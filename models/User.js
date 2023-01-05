module.exports = (sequelize, DataTypes) => {
    let alias = 'users';
    let atributes = {
        nombre: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
    }
    let config = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, atributes, config);

    return User
}

// const { DataTypes } = require('sequelize');
// // const sequelize = require('../database');
// const sequelize = require('../models/index.js'); 

// let atributes = {
//     nombre: { type: DataTypes.STRING },
//     email: { type: DataTypes.STRING },
//     password: { type: DataTypes.STRING },
// }
// let config = {
//     timestamps: false
// }

// const User = sequelize.define('users',atributes, config);

// module.exports = User;