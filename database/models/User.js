const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    let moduleName = 'users';
    let atributes = {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            defaultValue: 'Sin Definir'
        },
        gender: {
            type: DataTypes.STRING,
            defaultValue: 'Sin Definir'
        },
        title: {
            type: DataTypes.INTEGER,
            defaultValue: 'user'
        },
        token: {
            type: DataTypes.STRING,
        },
        authenticated: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        profileImage: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'defaultUserImage.png'
        }
    }
    let config = {
        tableName: 'users',
        timestamps: true,
        firstName: 'first_name',
        lastName: 'last_name',
        profileImage: 'profile_image',
        createdAt: 'created_date',
        updatedAt: 'updated_at'
    }

    const User = sequelize.define(moduleName, atributes, config);

    return User
}