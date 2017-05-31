import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import {resolver} from 'graphql-sequelize';
import _ from 'lodash';

import {
  Connection, 
  DBSchema
} from './db';

let GraphqlSchema = {};


GraphqlSchema.Contact = new GraphQLObjectType({
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

GraphqlSchema.Product = new GraphQLObjectType({
  name: 'Product',
  description: 'Product schema',
  fields () {
    return {
      name: {
        type: GraphQLString
      },
      price:{
        type: GraphQLFloat
      }
    };
  }
});

GraphqlSchema.Category = new GraphQLObjectType({
  name: 'Category',
  description: 'Category schema',
  fields () {
    return {
     name: {
        type: GraphQLString
     },
     id: {
        type: GraphQLInt
     },
     createdAt:{
      type: GraphQLString
     }
    };
  }
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => {
    return {
      products: {
        type: new GraphQLList(GraphqlSchema.Product),
        args: {
          id: {
            type: GraphQLInt
          },
          name: {
            type: GraphQLString
          }
        },
        resolve: resolver(DBSchema.Product)
      },
      categories:{
        type: new GraphQLList(GraphqlSchema.Category),
        resolve: resolver(DBSchema.Category)
      },
      contacts:{
        type: new GraphQLList(GraphqlSchema.Contact),
        resolve: resolver(DBSchema.Contact)
      }

    };
  }
});


/*
const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions to set stuff',
  fields () {
    return {
      addPerson: {
        type: Person,
        args: {
          firstName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          lastName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          email: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve (source, args) {
          return Db.models.person.create({
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email.toLowerCase()
          });
        }
      }
    };
  }
});

*/

const Schema = new GraphQLSchema({
  query: Query,
  //mutation: Mutation
});

export default Schema;