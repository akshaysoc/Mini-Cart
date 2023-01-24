import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './Components/LandingPage/home';
import Userhome from './Components/LandingPage/UserHome';
import Login from './Components/Login/Login';
import Forgot from './Components/Login/ForgotPassword';
import Register from './Components/Registration/register';
import Product from './Components/pages/Products';
import ProductDetail from './Components/pages/DetailViewProduct';
import Cart from './Components/pages/Cart';
import Check from './Components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/regis',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/userhome',
    element: <Userhome />,
  },
  {
    path: '/product',
    element: <Product/>
  },
  {
    path: '/productdetail/:id',
    element:<ProductDetail />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/checkout/:id',
    element: <Check />
  },
  {
    path: '/forgot',
    element: <Forgot />
  },
])

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
