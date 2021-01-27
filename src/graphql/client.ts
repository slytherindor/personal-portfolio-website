import {ApolloClient, InMemoryCache} from '@apollo/client';
import {SERVER_URL} from '../config/apiEndpoints';

export const client = new ApolloClient({
  uri: `${SERVER_URL}/graphql`,
  cache: new InMemoryCache(),
});
