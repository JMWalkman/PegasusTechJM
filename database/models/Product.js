module.exports = (sequelize, DataTypes) => {
    let modelName = 'Product';
    let atributes = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        line_id: {
            type: DataTypes.INTEGER
        },
        variation: {
            type: DataTypes.STRING(50)
        },
        category_id: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING(500)
        },
        price: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        discount: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        stock: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        rating: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        images: { 
            type: DataTypes.STRING,
            defaultValue: 'defaultProductImage'
        },
    }
    let config = {
        tableName: 'products',
        timestamps: true,
        // lineId: 'line_id',
        // categoryId: 'category_id',
        // createdAt: 'created_date',
        // updatedAt: 'updated_at'
    }

    const Product = sequelize.define(modelName, atributes, config);

    return Product
}