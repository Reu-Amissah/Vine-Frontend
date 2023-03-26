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
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fetchTask = this.fetchTask.bind(this);
  }

  handleChange(e, name) {
    this.setState({ [name]: e.target.value });
  }

  handleSubmit(e) {
    console.log(this.state.name, this.state.email, this.state.message);
    e.preventDefault();
  }
  // componentDidMount() {
  //   this.fetchTask();
  // }

  // fetchTask() {
  //   fetch("http://127.0.0.1:8000/contacts")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({ contactItems: data });
  //     });
  // }

  render() {
    // var contactItems = this.state.contactItems;
    // var { contactItems } = this.state;

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
              <form onSubmit={this.handleSubmit}>
                <div className="form-header">
                  <h3>Contact Form</h3>
                </div>
                <div className="input-fields-container">
                  <div className="input-fields">
                    <InputFields
                      iconName={faUser}
                      placeHolder="Enter your fullname"
                      value={this.state.name}
                      onChange={(e) => this.handleChange(e, "name")}
                    ></InputFields>
                    <InputFields
                      iconName={faEnvelope}
                      placeHolder="Enter your email"
                      value={this.state.email}
                      onChange={(e) => this.handleChange(e, "email")}
                    ></InputFields>
                  </div>
                  <div className="input-box">
                    <MessageBox
                      value={this.state.message}
                      onChange={(e) => this.handleChange(e, "message")}
                    ></MessageBox>
                  </div>
                </div>
                <Button
                  type={"submit"}
                  title={"Submit"}
                  cName={"submit-button"}
                  iconName={"icon-display"}
                ></Button>
                <div>
                  {/* {contactItems.map((contacts) => (
                    <p key={contacts.name}>{contacts.name}</p>
                  ))} */}
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
