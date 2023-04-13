import React from "react";
import Button from "../Buttons/Button";
import "./Navbar.css";
// import { NavLink } from "react-router-dom";

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
            <span className="link-span"></span>
          </div>
          {/* <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "not-active"
              }
            >
              try
            </NavLink>
          </li> */}
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
          <Button
            title={"Apply Now"}
            cName={"primary-button"}
            iconName={"icon-display"}
          ></Button>
          <Button
            title={"Donate"}
            cName={"secondary-button"}
            iconName={"icon-display"}
          ></Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
