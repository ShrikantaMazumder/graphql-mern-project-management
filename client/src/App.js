import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
import Clients from './components/Clients';
import Header from './components/Header';
import './index.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <Clients />
      </div>
    </ApolloProvider>
  );
}

export default App;
