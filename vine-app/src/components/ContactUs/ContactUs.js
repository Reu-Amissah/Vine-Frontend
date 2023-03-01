import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import ContactDetails from "../ContactDetails/ContactDetails";
import InputFields from "../Input Fields/InputFields";
import {
  faPhone,
  faLocation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://127.0.0.1:8000/")
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log("data", result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, []);
  }

  return (
    <div className="contact-us-container">
      <div className="container-contact-us">
        <div className="contact-us-header-text">
          <h2>Get in touch!</h2>
          We'd like to hear from you. Make enquiries below
        </div>

        <div className="contact-details-section">
          <ContactDetails
            text={"+233 243 7777 61"}
            iconName={faPhone}
          ></ContactDetails>
          <ContactDetails
            text={"Madina-Accra, Ghana"}
            iconName={faLocation}
          ></ContactDetails>
          <ContactDetails
            text={"reujoyamissah@gmail.com"}
            iconName={faEnvelope}
          ></ContactDetails>
        </div>

        <div className="contact-form">
          <div className="contact-form-container">
            <form>
              <div className="form-header">
                <h3>Contact Form</h3>
              </div>
              <div className="input-fields-container">
                <div className="input-fields">Input Fields</div>
                <div className="input-box">Message Box</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
