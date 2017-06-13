'use strict';


import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
	

export const User = new GraphQLObjectType({
	  name: 'User',
	  description: 'User schema',
	  fields () {
	    return {
	      name: {
	        type: GraphQLString
	      }
	    };
	  }
	});

 

