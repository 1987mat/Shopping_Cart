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
              <button className="btn btn-primary btn-light btn-lg p-2">
                Visit the shop!
              </button>
            </Link>
          </h2>
        </div>
      </main>
    </div>
  );
};

export default App;
