const _ = require('lodash');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {}
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {}
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
