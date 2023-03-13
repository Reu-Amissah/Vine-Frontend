import React from "react";
import "./ContactUs.css";
import ContactDetails from "../ContactDetails/ContactDetails";
import InputFields from "../Input Fields/InputFields";
import MessageBox from "../Input Fields/MessageBox";
import Button from "../Buttons/Button";
import {
  faPhone,
  faLocation,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      contactItems: [],
    };
    this.fetchTask = this.fetchTask.bind(this);
  }

  componentWillMount() {
    this.fetchTask();
  }

  fetchTask() {
    fetch("http://127.0.0.1:8000/contacts/contact-post")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          contactItems: data,
        })
      );
  }

  render() {
    var contactItems = this.state.contactItems;
    console.log(contactItems);

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
                  <div className="input-fields">
                    <InputFields
                      iconName={faUser}
                      placeHolder="Enter your fullname"
                    ></InputFields>
                    <InputFields
                      iconName={faEnvelope}
                      placeHolder="Enter your email"
                    ></InputFields>
                  </div>
                  <div className="input-box">
                    <MessageBox></MessageBox>
                  </div>
                </div>
                <Button
                  title={"Submit"}
                  cName={"submit-button"}
                  iconName={"icon-display"}
                ></Button>
                {/* <div>
                  {contactItems.map((contacts) => (
                    <p>{contacts}</p>
                  ))}
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
