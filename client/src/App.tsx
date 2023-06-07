import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';

import { Footer, Header } from './components';
import { Home, ProductDetails, Products, Search } from './pages';

const Layout = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products/:id', element: <Products /> },
      { path: '/product/:id', element: <ProductDetails /> },
      { path: '/search', element: <Search /> },
    ],
  },
]);

const App = () => <div>App</div>;

export default App;
