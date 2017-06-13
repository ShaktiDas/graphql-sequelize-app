'use strict';


import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
	

export const Contact = new GraphQLObjectType({
	  name: 'Contact',
	  description: 'Contact schema',
	  fields () {
	    return {
	      name: {
	        type: GraphQLString
	      },
	      email:{
	        type: GraphQLString
	      }
	    };
	  }
	});

 

