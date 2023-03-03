import React from "react";
import "./LandingPage.css";
import Navbar from "../Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
import Mission from "../Mission/Mission";
import Programs from "../Programs/Programs";
import ContactUs from "../ContactUs/ContactUs";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <section className="welcome-section">
          <Welcome></Welcome>
        </section>
        <section>
          <Mission></Mission>
        </section>
        <section>
          <Programs></Programs>
        </section>
        <section className="contact-us-section">
          <ContactUs></ContactUs>
        </section>
      </div>
    );
  }
}

export default LandingPage;
