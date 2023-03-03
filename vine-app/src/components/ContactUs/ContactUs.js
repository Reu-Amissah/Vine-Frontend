import React from "react";
import "./ContactUs.css";
import ContactDetails from "../ContactDetails/ContactDetails";
// import InputFields from "../Input Fields/InputFields";
import {
  faPhone,
  faLocation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
    this.fetchTask = this.fetchTask.bind(this);
  }

  componentWillMount() {
    this.fetchTask();
  }

  fetchTask() {
    fetch("http://127.0.0.1:8000/contacts")
      .then((response) => response.json())
      .then((data) => console.log("Data", data));
  }

  render() {
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
  }
}

export default ContactUs;
