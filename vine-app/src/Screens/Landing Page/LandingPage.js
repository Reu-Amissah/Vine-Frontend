import React from "react";
import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Welcome from "../../components/Welcome/Welcome";
import Mission from "../../components/Mission/Mission";
import Programs from "../../components/Programs/Programs";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="body-div">
        <header>
          <Navbar></Navbar>
        </header>
        <section className="welcome-section">
          <Welcome></Welcome>
        </section>
        <section style={{ marginTop: "40px" }}>
          <Mission></Mission>
        </section>
        <section style={{ marginTop: "40px" }}>
          <Programs></Programs>
        </section>
        <section className="contact-us-section" style={{ marginTop: "40px" }}>
          <ContactUs></ContactUs>
        </section>
        <section className="footer-section">
          <Footer></Footer>
        </section>
      </div>
    );
  }
}

export default LandingPage;
