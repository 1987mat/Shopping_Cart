import React from 'react';

const Modal = (props) => {
  return (
    <div
      className={
        props.showModal
          ? 'd-flex flex-row justify-content-around popup card p-5'
          : 'd-none'
      }
    >
      <img
        src={props.itemImage}
        alt={props.itemName}
        style={{ height: '22em', width: '17em' }}
      />
      <div>
        <h3>{props.itemName}</h3>
        <p>{props.itemDescription}</p>
        <p>$ {props.itemPrice}</p>
        <button className="btn btn-md btn-primary m-2">Add To Cart</button>
        <button onClick={props.closeModal} className="btn btn-md">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Modal;
