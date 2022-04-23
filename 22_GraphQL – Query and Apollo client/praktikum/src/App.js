import './App.css';
import Home from './component/Home'
import client from './component/apollo-client'
import {ApolloProvider} from '@apollo/client'


function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Home />
    </div>
    </ApolloProvider>
  );
}

export default App;
