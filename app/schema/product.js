'use strict';


import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
	

export const Product = new GraphQLObjectType({
	  name: 'Product',
	  description: 'Product schema',
	  fields () {
	    return {
	      name: {
	        type: GraphQLString
	      }
	    };
	  }
	});

 

