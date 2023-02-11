import React from "react";
import Button from "../Buttons/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">Vine's</div>
        <ul className="link-items">
          <div className="active-link">
            <li>
              <a href="#about" id="active">
                Home
              </a>
            </li>
            <span></span>
          </div>
          <li className="not-active">
            <a href="#services">About Us</a>
          </li>
          <li className="not-active">
            <a href="#contact">Contact Us</a>
          </li>
          <li className="not-active">
            <a href="#contact">Enrolment</a>
          </li>
        </ul>
        <div className="buttons">
          <Button title={"Apply Now"} cName={"primary-button"}></Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
