
import db from './models';


/*

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

import Sequelize from 'sequelize';

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
     },
     products:{
      type: new GraphQLList(GraphqlSchema.Product),
      resolve: resolver(DBSchema.Product)
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
      },
      totalProducts:{
        type: GraphqlSchema.Category ,
        resolve: resolver(DBSchema.Product.Category)
      },
      productCategory:{
        type: GraphqlSchema.Category,
        resolve: resolver(DBSchema.Product.Category)
      }
    };
  }
});







////////////////////



let taskType = new GraphQLObjectType({
  name: 'Task',
  description: 'A task',
  fields:{
    id:{
      type: new GraphQLNonNull(GraphQLInt),
      description: "Task id"
    },
    title:{
      type: GraphQLString,
      description: "Task description"
    }
  }
});

let userType = new GraphQLObjectType({
  name: "User",
  description: "A user",
  fields:{
    id:{
      type: new GraphQLNonNull(GraphQLInt),
      description: "User Id"
    },
    name:{
      type: GraphQLString,
      description: "User name"
    },
    tasks:{
      type: new GraphQLList(taskType),
      resolve: resolver(DBSchema.User.Tasks)
    }
  }

});

/////////////////







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
          limit:{
            type: GraphQLInt
          },
          order:{
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
      },
      users:{
        type: new GraphQLList(userType),
        args:{
          limit:{
            type: GraphQLInt
          },
          order:{
            type: GraphQLString
          }
        },
        resolve: resolver(DBSchema.User)
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






/*

const Schema = new GraphQLSchema({
  query: Query,
  //mutation: Mutation
});

export default Schema;
*/