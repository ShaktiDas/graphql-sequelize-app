module.exports = (sequlize, DataTypes) =>{
	const Contact = sequlize.define('Contact',{
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},{
		classMethods:{
			associate:function(models){
				Contact.Test = Contact.Testing;
			}

		}
	});

	return Contact;
}