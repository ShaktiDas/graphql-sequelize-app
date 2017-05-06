import Sequelize from 'sequelize';
import _ from lodash;
import Faker from 'faker';

const Conn = new Sequelize("demo_sequelize_db",	"root",	"");

//define schema 
const Person = Conn.define('person', {
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

const Post = Conn.define('post',{
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

Conn.sync({force: true}).then(()=>{


	//create some fake person
	_.times(10, ()=>{
		return Person.create({
			firstName: Faker.name.firstName(),
			lastName: Faker.name.lastName(),
			email: Faker.internet.email()
		});
	});


});

export default Conn;
