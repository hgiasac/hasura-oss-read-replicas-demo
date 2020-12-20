import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { OperationDefinitionNode } from 'graphql';
import { WebSocketLink } from '@apollo/client/link/ws';
import { DATA_HOST, DATA_READONLY_HOST, DATA_WS_HOST } from './env';

const createClient = () => {

  const mutationLink = new HttpLink({
    uri: DATA_HOST,
  });
  
  const queryLink = new HttpLink({
    uri: DATA_READONLY_HOST,
  });
  
  const subscriptionLink = new WebSocketLink({
    uri: DATA_WS_HOST,
    options: {
      reconnect: true,
      lazy: true,
    }
  });
  
  // compose subscription, mutation and query links for each endpoint
  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query) as OperationDefinitionNode;
  
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    subscriptionLink,
    split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query) as OperationDefinitionNode;
  
        return kind === 'OperationDefinition' && operation === 'mutation';
      },
      mutationLink,
      queryLink
    )
  );
  
  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
}

export default createClient;
