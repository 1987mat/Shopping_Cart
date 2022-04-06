import React from 'react';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Contact = () => {
  const [formSubmission, setFormSubmission] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setFormSubmission(!formSubmission);
  };

  return (
    <div>
      <Header />
      <div className="contact-container">
        {/* Show form or message if form is submitted */}
        {formSubmission ? (
          <div className="success-message m-5 text-center">
            <h5>
              Thank you for contacting us! We typically respond within 48 hours.
            </h5>
          </div>
        ) : (
          <form className="form d-flex flex-column" onSubmit={submitForm}>
            <h2 className="text-center m-5">
              <b>Get in touch!</b>
            </h2>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            ></input>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            ></input>
            <textarea
              name="comments"
              rows="4"
              placeholder="Type your message here..."
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
