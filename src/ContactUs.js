import React, { useState } from "react";
import axios from 'axios';
import { url } from './url';
import './ContactUs.css'
const ContactUs = (isLoggedIn) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // handle form submission
      console.log("Name:", name);
      console.log("Message:", message);
            console.log("Phone:", phone);
            const token = localStorage.getItem("token");
            const config = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
      const response = await axios.post(`${url}/contact`, {
        name,
        message,
        phone,
      },config
      );
            console.log({ response });
            alert("Thank you for contacting us. We will get back to you soon.");
    } catch (err) {
    
      console.error({err});
      alert("Please try again");
    }
  };

  return (
    <div className="container">
                  {isLoggedIn ? (
                          <>
                                  <h2>Contact Us</h2>
                                  <form onSubmit={handleSubmit}>
                                          <div className="form-group">
                                                  <label htmlFor="name">Name:</label>
                                                  <input
                                                          type="text"
                                                          className="form-control"
                                                          id="name"
                                                          value={name}
                                                          onChange={(e) => setName(e.target.value)}
                                                          required
                                                  />
                                          </div>
                                          <div className="form-group">
                                                  <label htmlFor="message">Message:</label>
                                                  <textarea
                                                          className="form-control"
                                                          id="message"
                                                          rows="3"
                                                          value={message}
                                                          onChange={(e) => setMessage(e.target.value)}
                                                         
                                                  ></textarea>
                                          </div>
                                          <div className="form-group">
                                                  <label htmlFor="phone">Phone:</label>
                                                  <input
                                                          type="tel"
                                                          className="form-control"
                                                          id="phone"
                                                          value={phone}
                                                          onChange={(e) => setPhone(e.target.value)}
                                                         
                                                          
                                                  />
                                                 
                                          </div>
                                          <button type="submit" className="btn btn-primary">
                                                  Submit
                                          </button>
                                  </form>
                          </>) : (
                          <p>Please <Link to="/login">login</Link> or <Link to="/register">register</Link> to continue.</p>
                  )}
    </div>
  );
};

export default ContactUs;
