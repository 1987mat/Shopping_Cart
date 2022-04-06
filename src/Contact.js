import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <h2 className="text-center m-5">Get in touch!</h2>
        <form className="form d-flex flex-column">
          <input type="text" name="firstName" placeholder="First Name"></input>
          <input type="text" name="lastName" placeholder="Last Name"></input>
          <input type="email" name="email" placeholder="Email"></input>
          <textarea name="comments" placeholder=""></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
