import React from 'react';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import createApolloClient from './shared/apollo';
import UserScreen from './components/user';

function App() {

  const [client] = React.useState(createApolloClient());

  if (!client) {
    return (<div>Loading...</div>)
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="container">
          <UserScreen />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
