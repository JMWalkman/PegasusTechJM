module.exports = (sequelize, DataTypes) => {
    let modelName = 'Manufacturer'; 
    // sequelize asume que el nombre de la tabla es el mismo pero en plural
    let atributes = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }
    let config = {
        tableName: 'manufacturers',
        timestamps: false
    }

    const Manufacturer = sequelize.define(modelName, atributes, config);

    return Manufacturer
};