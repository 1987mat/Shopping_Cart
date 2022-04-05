import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import image2 from './assets/images/section1.jpg';
import image3 from './assets/images/section2.jpg';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container-home">
          <div className="hero-div">
            <div className="home text-center">
              <h2>
                <Link className="visit-link" to="/shop">
                  <button className=" visit-link btn btn-primary btn-light btn-lg p-2">
                    <span className="home-text">SHOP NOW!</span>
                  </button>
                </Link>
              </h2>
            </div>
          </div>
          <div className="section-wrapper">
            <img src={image2} alt="section"></img>
            <img src={image3} alt="section2"></img>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
