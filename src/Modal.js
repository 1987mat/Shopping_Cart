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
        <h3>{props.itemName}</h3>
        <p>{props.itemDescription}</p>
        <p>$ {props.itemPrice}</p>
        <div className="d-flex flex-row">
          <button
            onClick={() =>
              props.addToCart(props.itemImage, props.itemName, props.itemPrice)
            }
            className="btn btn-md btn-primary"
          >
            Add To Cart
          </button>
          <button onClick={props.closeModal} className="btn btn-md ml-2">
            Go Back
          </button>
        </div>
        {props.addedItem ? (
          <Link to="/cart">
            <button className="btn btn-md btn-success mt-5">
              Go To Checkout
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
