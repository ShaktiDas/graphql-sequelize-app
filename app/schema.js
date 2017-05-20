import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import Sequelize from 'sequelize';
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
  name: 'Contact',
  description: 'Contact schema',
  fields () {
    return {
     name: {
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
          },
          orderBy:{
            type: new GraphQLList( new GraphQLList(GraphQLString))
          }
        },
        resolve: resolver(DBSchema.Product, {
          before: (opts, args)=>{
            const options = _.extend({order: []}, opts);
            console.log(options);
            if(args.orderBy){
              options.order = options.order.concat(args.orderBy);
            }
               console.log(options);
            return options;
          }
        })
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