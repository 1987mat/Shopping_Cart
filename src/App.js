import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="home text-center">
          <h2>
            <Link className="visit-link" to="/shop">
              <button className=" visit-link btn btn-primary btn-light btn-lg p-2">
                <span className="home-text">SHOP NOW!</span>
              </button>
            </Link>
          </h2>
        </div>
      </main>
    </div>
  );
};

export default App;
