import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

import App from './App';
import { Basket } from './basket/basket';
import { Imprint } from './imprint/imprint';
import { ProductList } from './product/product-list';
import { UserLogin } from './user/user-login';
import { UserLogout } from './user/user-logout';

import './index.css';
import { UserProfile } from './user/user-profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>The page you requested could not be found!</div>,
    children: [
      { path: "products", element: <ProductList /> },
      { path: "basket", element: <Basket /> },
      { path: "imprint", element: <Imprint /> },
      { path: "login", element: <UserLogin /> },
      { path: "logout", element: <UserLogout /> },
      { path: "profile", element: <UserProfile /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
