import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://glowing-lynx-37.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers : {
        'x-hasura-admin-secret' : '8CRGeUxrFAB3V9VVgSKTpYSzdCB2SDVOuD67FCIPe6oLvoaljpjcyuPQ74Zm5cYU'
    }
  });

  export default client