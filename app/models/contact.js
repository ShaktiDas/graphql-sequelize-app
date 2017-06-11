'use strict';

module.exports = (sequlize, DataTypes) =>{
	const Contact = sequlize.define('Contact',{
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},{
		classMethods:{
			associate:function(models){
				Contact.Creator = Contact.belongsTo(models.User, {as: 'Creator', foreignKey: 'createdBy'});
				Contact.Owner = Contact.belongsTo(models.User, {as: 'Onser', foreignKey: 'ownerId'});
				Contact.Collaborators = Contact.belongsToMany(models.User, {as: 'Collaborators', through: 'ContactCollaborators', foreignKey: 'contactId', otherKey: 'userId'});
				Contact.Followers = Contact.belongsToMany(models.User, {as: 'Followers', through: 'ContactFollowers', foreignKey: 'contactId', otherKey: 'userId'});
				Contact.SuppliedProducts = Contact.belongsToMany(models.Product, {as: 'Suppliers', through: 'ProductSuppliers', foreignKey: 'contactId', otherKey: 'productId'})
			}
		}
	});

	return Contact;
}