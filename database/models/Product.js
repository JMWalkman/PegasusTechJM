module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let atributes = {
        id: { 
            type: DataTypes.INTEGER,
            primanyKey: true,
            autoIncrement: true
        },
        manufacturer_id: { type: DataTypes.INTEGER },
        line_id: { type: DataTypes.INTEGER },
        variation: { type: DataTypes.STRING(50) },
        category_id: { type: DataTypes.INTEGER },
        description: { type: DataTypes.STRING(500) },
        price: { type: DataTypes.INTEGER },
        discount: { type: DataTypes.INTEGER },
        stock: { type: DataTypes.INTEGER },
        rating: { type: DataTypes.INTEGER },
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