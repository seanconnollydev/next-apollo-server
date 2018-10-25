const { ApolloServer, gql } = require('apollo-server-express');

const createApolloServer = () => {
  // Construct a schema, using GraphQL schema language
  const typeDefs = gql`
    type Query {
      hello: String
      goodbye: String
      phrases: [Phrase!]!
    }

    type Mutation {
      addPhrase(phrase: String!): Phrase!
    }

    type Phrase {
      text: String
    }
  `;

  const phrases = [];

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      goodbye: () => 'Goodbye!',
      phrases: () => phrases,
    },
    Mutation: {
      addPhrase: (root, args) => {
        phrases.push({ text: args.phrase });

        return {
          text: args.phrase,
        };
      },
    },
  };
  return new ApolloServer({ typeDefs, resolvers });
};

module.exports = createApolloServer;
