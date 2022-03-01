import React from 'react';
import Header from './Header';

const Shop = () => {
  return (
    <div>
      <Header />
      <main className="card p-5">
        <div className="d-flex justify-content-around m-5">
          {/* Loop throught items in array and render here */}
          <div className="card">item goes here</div>
          <div className="card">item goes here</div>
          <div className="card">item goes here</div>
          <div className="card">item goes here</div>
          <div className="card">item goes here</div>
          <div className="card">item goes here</div>
          <div className="card">item goes here</div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
