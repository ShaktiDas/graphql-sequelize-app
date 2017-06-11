'use strict';

module.exports = () =>{
	
	const Contact = new GraphQLObjectType({
	  name: 'Contact',
	  description: 'Contact schema',
	  fields () {
	    return {
	      firstName: {
	        type: GraphQLString
	      },
	      lastName:{
	        type: GraphQLString
	      },
	      email:{
	        type: GraphQLString
	      }
	    };
	  }
	});

	return Contact;
}