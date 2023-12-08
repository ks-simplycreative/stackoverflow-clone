import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { routes } from './pages/routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
