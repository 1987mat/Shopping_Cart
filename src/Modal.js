import React from 'react';
import { Link } from 'react-router-dom';

const Modal = (props) => {
  return (
    <div
      className={props.showModal ? 'd-flex flex-row popup card p-3' : 'd-none'}
    >
      <img
        src={props.itemImage}
        alt={props.itemName}
        style={{ height: '22em', width: '17em', margin: '2em' }}
      />
      <div>
        <h3 style={{ color: '#282828' }}>
          <b>{props.itemName}</b>
        </h3>
        <p style={{ color: '#282828' }}>{props.itemDescription}</p>
        <div>
          <button className="btn btn-sm">
            <b>S</b>
          </button>
          <button className="btn btn-sm">
            <b>M</b>
          </button>
          <button className="btn btn-sm">
            <b>L</b>
          </button>
          <button className="btn btn-sm">
            <b>XL</b>
          </button>
        </div>
        <div>
          <p className="mt-5 ml-2" style={{ color: '#282828' }}>
            <b>$ {props.itemPrice}</b>
          </p>
          <button
            onClick={() =>
              props.addToCart(props.itemImage, props.itemName, props.itemPrice)
            }
            className="btn btn-md btn-primary"
          >
            Add To Cart
          </button>
        </div>
        <button
          onClick={props.closeModal}
          className="btn btn-md ml-2 go-back-btn"
        >
          Go Back
        </button>

        {props.addedItem ? (
          <Link to="/cart">
            <button className="btn btn-md btn-success mt-5 checkout-btn">
              Go To Checkout
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
