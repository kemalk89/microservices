import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

import App from './App';
import { Basket } from './basket/basket';
import { Imprint } from './imprint/imprint';
import './index.css';
import { ProductList } from './product/product-list';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>The page you requested could not be found!</div>,
    children: [
      { path: "products", element: <ProductList /> },
      { path: "basket", element: <Basket /> },
      { path: "imprint", element: <Imprint /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
