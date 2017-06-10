import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import moment from 'moment';


//define the database conneciton
const sequelize = new Sequelize('demo_sequelize_db', 'root', '', {
	host: 'localhost',
	dialect: 'mariadb'
});


let db = {};


//load all files in models directory except the index.js
fs.readdirSync(__dirname)
	.filter((file)=>(file.indexOf('.')!==0) && (file !== 'index.js'))
	.forEach((file)=>{
		
		//prepare a file path and import the file
		const model = sequelize.import(path.join(__dirname, file));

		//parepare a set of db modles 
		db[model.name] = model;
	});
	

Object.keys(db).forEach((modelName) =>{
	if('associate' in db[modelName]){
		db[modelName].associate(db);
	}
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
