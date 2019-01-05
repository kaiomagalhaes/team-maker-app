import ApolloClient from 'apollo-boost';
import nodeFetch from 'node-fetch';
import withApollo from 'next-with-apollo';
import { RestLink } from 'apollo-link-rest';
import {
  DEV_API_ENDPOINT,
  DEV_ENDPOINT,
  PROD_API_ENDPOINT,
  PROD_ENDPOINT,
  REQUEST_CREDENTIALS,
} from 'config';

function createClient({ headers }) {
  const isDevEnv = process.env.NODE_ENV === 'development';
  global.Headers = nodeFetch.Headers;

  return new ApolloClient({
    clientState: {
      resolvers: {},
      defaults: {},
    },
    restLink: new RestLink({
      customFetch: nodeFetch,
      uri: isDevEnv ? DEV_API_ENDPOINT : PROD_API_ENDPOINT,
    }),
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: REQUEST_CREDENTIALS,
        },
        headers,
      });
    },
    uri: isDevEnv ? DEV_ENDPOINT : PROD_ENDPOINT,
  });
}

export default withApollo(createClient);
