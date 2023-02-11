import React from "react";
import "./Button.css";

const Button = ({ title, cName }) => {
  return (
    <div style={buttonStyles} className={cName}>
      {title}
    </div>
  );
};

const buttonStyles = {
  fontSize: "14px",
};

export default Button;
