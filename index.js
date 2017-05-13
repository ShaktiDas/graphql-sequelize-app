
import http from 'http';
import Sequelize from 'sequelize';
import _ from 'lodash';
import Faker from 'faker';

http.createServer((req, res)=>{
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end('Hello World');
}).listen(1337, '127.0.0.1');

console.log("Babel is working!");


let connection = new Sequelize("demo_sequelize_db",	"root",	"");

let Article = connection.define('article',{
	title: Sequelize.STRING,
	body: Sequelize.TEXT
});

connection.sync().then(function(){

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

