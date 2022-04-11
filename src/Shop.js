import Header from './Header';
import imagesArr from './Images';
import Modal from './Modal';
import Footer from './Footer';
import { useState } from 'react';

const Shop = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [itemID, setItemID] = useState(null);
  const [itemImage, setItemImage] = useState(null);
  const [itemName, setItemName] = useState(null);
  const [itemPrice, setItemPrice] = useState(null);
  const [itemDescription, setItemDescription] = useState(null);
  const [addedItem, setAddedItem] = useState(false);
  const [count, setCount] = useState(0);
  const [cartArr, setCartArr] = useState([]);

  const openModal = (item) => {
    setModalStatus(!modalStatus);
    setItemID(item.id);
    setItemImage(item.src);
    setItemName(item.title);
    setItemPrice(item.price);
    setItemDescription(item.description);
  };

  const closeModal = () => {
    setModalStatus(!modalStatus);
    setAddedItem(false);
  };

  const addToCart = (image, title, price) => {
    const obj = { image, title, price };
    console.log(obj);
    setAddedItem(true);
    setCount(count + 1);
    setCartArr(cartArr.concat(obj));
    console.log(cartArr);
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
                  style={{ backgroundColor: '#DCDCDC' }}
                >
                  <h4 className="item-title" style={{ color: '#282828' }}>
                    <b>{item.title}</b>
                  </h4>
                  <p className="item-price" style={{ color: '#282828' }}>
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
          itemName={itemName}
          itemPrice={itemPrice}
          itemDescription={itemDescription}
          itemID={itemID}
          closeModal={closeModal}
          addToCart={addToCart}
          addedItem={addedItem}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
