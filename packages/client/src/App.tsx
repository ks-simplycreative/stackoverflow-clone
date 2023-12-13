import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";
import { client } from "./gql/client";
import './App.css'
import { routes } from './pages/routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router}></RouterProvider>
    </ApolloProvider>
  )
}

export default App
