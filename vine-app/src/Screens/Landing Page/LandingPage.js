import React from "react";
import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Welcome from "../../components/Welcome/Welcome";
import Mission from "../../components/Mission/Mission";
import Programs from "../../components/Programs/Programs";
import ContactUs from "../../components/ContactUs/ContactUs";

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
