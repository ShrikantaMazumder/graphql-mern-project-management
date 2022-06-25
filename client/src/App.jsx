import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AddClientModal from "./components/AddClientModal";
import Clients from "./components/Clients";
import Header from "./components/Header";
import "./index.css";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <AddClientModal />
        <Clients />
      </div>
    </ApolloProvider>
  );
}

export default App;