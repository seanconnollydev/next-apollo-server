const { ApolloServer, gql } = require('apollo-server-express');

const createApolloServer = () => {
  // Construct a schema, using GraphQL schema language
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };
  return new ApolloServer({ typeDefs, resolvers });
};

module.exports = createApolloServer;
