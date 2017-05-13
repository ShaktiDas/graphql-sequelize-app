
import http from 'http';
import Sequelize from 'sequelize';
import _ from 'lodash';
import Faker from 'faker';

http.createServer((req, res)=>{
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end('Hello World');
}).listen(1337, '127.0.0.1');

console.log("Babel is working!");


const Connection = new Sequelize("demo_sequelize_db",	"root",	"");

//define schema 

//define articles schema 
const Article = Connection.define('article',{
	title: Sequelize.STRING,
	body: Sequelize.TEXT
});


//define person schema
const Person = Connection.define('person', {
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

//define post schema
const Post = Connection.define('post',{
	title:{
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.STRING,
		allowNull:false
	}

});

//define relationships

Person.hasMany(Post);
Post.belongsTo(Person);

Connection.sync({force: true}).then(()=>{


	//create some fake person and posts

	_.times(10, ()=> {
    return Person.create({
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      email: Faker.internet.email()
    }).then(person => {
	      return person.createPost({
	        title: `Sample post by ${person.firstName}`,
	        content: 'here is some content'
	      });
	    });
	  });

});
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

export default Connection;

