import React, { useState } from 'react';
import Header from './Header';
import imagesArr from './Images';
import Modal from './Modal';

const Shop = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [itemImage, setItemImage] = useState(null);
  const [item, setItem] = useState(null);
  const [itemPrice, setItemPrice] = useState(null);
  const [itemDescription, setItemDescription] = useState(null);

  const openModal = (item) => {
    setModalStatus(!modalStatus);
    setItemImage(item.src);
    setItem(item.title);
    setItemPrice(item.price);
    setItemDescription(item.description);
  };

  const closeModal = () => {
    setModalStatus(!modalStatus);
  };

  return (
    <div>
      <Header />
      <main className="content card p-5">
        <div className="d-flex flex-wrap justify-content-around m-5 content-wrapper">
          {imagesArr.map((item, index) => (
            <button
              key={index}
              className="item-link btn bg-transparent"
              onClick={() => openModal(item)}
            >
              <div className="image-item card border-0 ml-2 mb-5">
                <img
                  src={item.src}
                  alt={item.title}
                  style={{ height: '22em', width: '17em' }}
                ></img>
                <div
                  className="p-2 text-center"
                  style={{ backgroundColor: '#fffff0' }}
                >
                  <h4 className="item-title">{item.title}</h4>
                  <p className="item-price">
                    <b>$ {item.price}</b>
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <Modal
          showModal={modalStatus}
          itemImage={itemImage}
          itemName={item}
          itemPrice={itemPrice}
          itemDescription={itemDescription}
          closeModal={closeModal}
        />
      </main>
    </div>
  );
};

export default Shop;
