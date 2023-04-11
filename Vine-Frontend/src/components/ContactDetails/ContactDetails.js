import React from "react";
import "./ContactDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactDetails = ({ text, iconName }) => {
  return (
    <div className="contact-component">
      <FontAwesomeIcon
        icon={iconName}
        // className={iconName}
        style={{
          marginLeft: "20px",
          color: "#00227A",
          fontSize: "20px",
          paddingBottom: "20px",
        }}
      />
      {text}
    </div>
  );
};

export default ContactDetails;
