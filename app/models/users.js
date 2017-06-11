'use strict';

module.exports = (sequelize, DataTypes)=>{
	const User = sequelize.define("User",{
		name:{
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		classMethods:{
			associate:function(models){

			}
		}

	})
	return User;

}