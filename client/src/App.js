import Header from './components/Header';
import{ ApolloProvider, ApolloClient, InMemoryCache}
from '@apollo/client';
import Clients from './components/Clients';
import AddClientModal from './components/AddClientModel';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients:{
          merge(existing, incoming){
            return incoming;
          }
        },
        projects:{
          merge(existing, incoming){
            return incoming;
          }
        }
      }
    }
  }
});




const client = new ApolloClient({
  uri:  'http://localhost:3000/graphql',
  cache,
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Header />
    <div className='container'>
      <AddClientModal />
      <Clients />
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
