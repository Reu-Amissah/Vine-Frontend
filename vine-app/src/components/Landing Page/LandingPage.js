import React from "react";
import './LandingPage.css'
import Navbar from "../Navbar/Navbar";

function LandingPage() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <section id="about">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id ullamcorper malesuada, urna orci commodo orci, id feugiat risus tellus id magna.</p>
        </section>
        <section id="services">
          <h1>Our Services</h1>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
        <section id="contact">
          <h1>Contact Us</h1>
          <form>
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
            <label>Message:</label>
            <textarea placeholder="Enter your message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>Copyright &copy;2022</footer>
    </div>
  );
}

export default LandingPage;
