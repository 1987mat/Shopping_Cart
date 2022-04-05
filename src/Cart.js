import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Cart = (props) => {
  return (
    <div>
      <Header />
      <main className="content">
        <div className="cart card mx-auto p-4" style={{ width: '50%' }}>
          <div className="d-flex flex-row justify-content-around">
            <div>
              <div>Image here</div>
              <h5>{props.cartArr}</h5>
            </div>
            <p>Price here</p>
          </div>
          <hr></hr>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
