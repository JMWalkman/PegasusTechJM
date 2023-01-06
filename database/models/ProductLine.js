module.exports = (sequelize, DataTypes) => {
    let modelName = 'ProductLine'; 
    // sequelize asume que el nombre de la tabla es el mismo pero en plural
    let atributes = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        manufacturerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        line: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    }
    let config = {
        tableName: 'product_lines',
        manufacturerId: 'manufacturer_id',
        timestamps: false
    }

    const ProductLine = sequelize.define(modelName, atributes, config);

    return ProductLine
};