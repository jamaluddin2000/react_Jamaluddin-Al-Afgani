import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://real-polecat-61.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers : {
        'x-hasura-admin-secret' : 'tC745Kuj3icUyzOWAgZGsq4kxtrpORGZNgVg53haXGVLUG57VKspGS95GS7GX6vV'
    }
  });

  export default client