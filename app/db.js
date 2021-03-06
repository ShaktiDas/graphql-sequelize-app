'use strict';

import Sequelize from 'sequelize';
import _ from 'lodash';
import Faker from 'faker';


const Connection = new Sequelize("demo_sequelize_db",	"root",	"");

//define schema 


//define contact schema
//Take a look here for sequlize types: http://docs.sequelizejs.com/manual/tutorial/models-definition.html
let DBSchema = {};


DBSchema.Contact = Connection.define('contact', {
	firstName: {
		type: Sequelize.STRING,
		allowNull:false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull:false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		}
	}

});

//define product schema
DBSchema.Product = Connection.define('product', {
	name:{
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.DOUBLE,
		allowNull:false
	}

});

//define catgory schema
DBSchema.Category = Connection.define('category', {
	name:{
		type: Sequelize.STRING,
		allowNull: false
	}
});

DBSchema.Product.Category = DBSchema.Product.belongsTo(DBSchema.Category, {foreignKey: "categoryId"});


DBSchema.User = Connection.define('user',{
  name: Sequelize.STRING
});

DBSchema.Task = Connection.define('task',{
  title: Sequelize.STRING
});

DBSchema.User.Tasks = DBSchema.User.hasMany(DBSchema.Task, {as: "tasks"});



//define relationships

//DBSchema.Product.Categories = DBSchema.Product.hasMany(DBSchema.Category, {as: 'categories'});

//DBSchema.Category.Products = DBSchema.Category.hasMany(DBSchema.Product, {as: 'products'});


//force:true will reset the database. We shouldn't use it in production
const Sync = () =>{
	return Connection.sync({force: true})
};



//create some demo data
const createDemoData = () => {
	return Sync().then(()=>{
	
	//create some products
		
		_.times(10, ()=> {
	    	return DBSchema.Category.create({
	      		name: Faker.random.word()
	    	}).then(category => {
		   	//we'll get the category here  
		  });
		});
		
		_.times(10, ()=> {
	    	return DBSchema.Product.create({
	      		name: Faker.commerce.productName(),
	      		price: Faker.commerce.price(),
	      		categoryId:_.random(1, 10)
	    	}).then(product => {
			   	//we'll get the product here  
			 

		  });
		});


		_.times(10, ()=> {
	    	return DBSchema.Category.create({
	      		name: Faker.random.word()
	    	}).then(category => {
		   	//we'll get the category here  
		  });
		});

		

	})

}


createDemoData();



export {DBSchema};
export default Connection;


/*
Connection.sync().then(function(){

	//insert new row in database.

	/*
	Article.create({
		title: "Hello world",
		body: "This is demo text..."
	});
	*/

	//find the article
	/*
	Article.findById(1).then(function(article){
		console.log(article.dataValues);
	});
	*/

	//find all articles
	/*
	Article.findAll().then(function(articles){
		console.log(articles.length);
	});
	*/


	//crate a demo row if there is no data in the database..
	/*
	Article.findAll().then(function(articles){
		
		console.log("Found", articles.length, "articles.");
		if(articles.length===0){
			Article.create({
				title: "Hello world",
				body: "This is demo text..."
			});
		}

	});


});

*/
