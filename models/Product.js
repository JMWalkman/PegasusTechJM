const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let atributes = {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
    let config = {
        tableName: 'products',
        timestamps: false
    }

    const Product = sequelize.define(alias, atributes, config);

    return Product
}