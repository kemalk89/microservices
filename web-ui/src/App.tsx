import { Link, Outlet } from 'react-router-dom'
import { useBasketStore } from './basket/basket-state'

import './App.css'
import { useUserStore } from './user/user-state';

function App() {
  const currentUser = useUserStore((state) => state.currentUser);
  const basketItems = useBasketStore((state) => state.items);

  const renderLoginLogout = () => {
    if (currentUser) {
      return (
        <>
          Hallo <Link to="profile">{currentUser.username}</Link> {' '}
          <Link to="logout">Logout</Link>
        </>
      );
    }

    return (
      <Link to="login">Login</Link>
    );
  }

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
            {renderLoginLogout()}
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
