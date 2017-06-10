module.exports = (sequlize, DataTypes)=>{
	const Product = sequlize.define('Product', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},{
		classMethods:{
			associate:function(models){
				Product.Creator = Product.belongsTo(models.User, {as: "Creator", foreignKey:"createdBy"});
				Product.Suppliers = Product.belongsToMany(models.Contact, {as: "Suppliers", through: "ProductSuppliers", foreignKey: "productId", otherKey:"contactId"});

			}
		}
	})

	return Product;
}