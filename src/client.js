import { ApolloClient, InMemoryCache } from '@apollo/client';

import { typeDefs, resolvers } from './resolvers';

const client = new ApolloClient({
  uri: null,
  cache: new InMemoryCache(),
  typeDefs,
  resolvers,
});

export { client };
