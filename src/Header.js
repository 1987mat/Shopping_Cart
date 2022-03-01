import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#484848' }}>
      <Link className="home-link link" to="/">
        <h1 className="display-5 font-weight-bold">Mat's Shop</h1>
      </Link>

      <ul className="d-flex list-unstyled">
        <li className="m-3">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="m-3">
          <Link className="link" to="/shop">
            Shop
          </Link>
        </li>
        <li className="m-3">
          <Link to="/cart">
            <i className="link fa fa-shopping-cart"></i>
            <span className="link">(0)</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
