const { ApolloServer, gql } = require('apollo-server-express');

const createApolloServer = () => {
  // Construct a schema, using GraphQL schema language
  const typeDefs = gql`
    type Query {
      hello: String
      goodbye: String
    }
  `;

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      goodbye: () => 'Goodbye!',
    },
  };
  return new ApolloServer({ typeDefs, resolvers });
};

module.exports = createApolloServer;
