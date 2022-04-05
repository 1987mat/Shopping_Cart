import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="title-link">
          <h1 className="display-5 font-weight-bold">TrueStyle</h1>
        </Link>
        <ul className="d-flex list-unstyled">
          <li className="m-1">
            <NavLink activeclassname="active" className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="m-1">
            <NavLink activeclassname="active" className="nav-link" to="/shop">
              Shop
            </NavLink>
          </li>
          <li className="m-1">
            <NavLink
              activeclassname="active"
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="m-1">
            <NavLink className="nav-link" to="/cart">
              <i className="nav-link fa fa-shopping-cart"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
