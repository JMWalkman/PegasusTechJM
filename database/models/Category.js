module.exports = (sequelize, DataTypes) => {
    let modelName = 'Category'; 
    // sequelize asume que el nombre de la tabla es el mismo pero en plural
    let atributes = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        category: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        }
    }
    let config = {
        tableName: 'categories',
        timestamps: false
    }

    const Category = sequelize.define(modelName, atributes, config);

    return Category
};