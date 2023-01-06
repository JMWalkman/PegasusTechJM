module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let atributes = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        manufacturer_id: { type: DataTypes.INTEGER },
        line_id: { type: DataTypes.INTEGER },
        variation: { type: DataTypes.STRING(50) },
        category_id: { type: DataTypes.INTEGER },
        description: { type: DataTypes.STRING(500) },
        price: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discount: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stock: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        images: { type: DataTypes.STRING },
        createdAt: { type: DataTypes.DATE },
        updatedAt: { type: DataTypes.DATE }
    }
    let config = {
        tableName: 'products',
    }

    const Product = sequelize.define(alias, atributes, config);

    return Product
}