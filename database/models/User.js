const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    let alias = 'users';
    let atributes = {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: { type: DataTypes.STRING },
    }
    let config = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, atributes, config);

    return User
}