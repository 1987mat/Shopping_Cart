import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <Link className="home-link" to="/">
          <h1>Mat's Shop</h1>
        </Link>
        <nav>
          <ul className="nav-list">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="link" to="/cart">
                <i class="fa fa-shopping-cart"></i>
                <span>(0)</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="home">
          <h2>
            <Link className="visit-link" to="/shop">
              <button>Visit the shop!</button>
            </Link>
          </h2>
        </div>
      </main>
      <footer className="footer">
        Developed by Mat
        <a href="https://github.com/1987mat" target="_blank" rel="noreferrer">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </footer>
    </div>
  );
};

export default App;
