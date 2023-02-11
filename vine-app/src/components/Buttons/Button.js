import React from "react";
import "./Button.css";

const Button = ({ title, cName }) => {
  return <div className={cName}>{title}</div>;
};

export default Button;
