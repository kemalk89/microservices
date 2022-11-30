import { Link, Outlet } from 'react-router-dom'
import { useBasketStore } from './basket/basket-state'

import './App.css'

function App() {

  const basketItems = useBasketStore((state) => state.items);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="basket">Basket ({basketItems.length})</Link>
          </li>
          <li>
            <Link to="imprint">Imprint</Link>
          </li>
          <li>
            <input placeholder='Search' />
            <button>Search</button>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
