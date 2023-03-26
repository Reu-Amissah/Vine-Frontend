import React from "react";
import "./InputFields.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputFields = ({ iconName, placeHolder, value, onChange }) => {
  return (
    <div>
      <div className="input-header">Name</div>
      <div className="input-content">
        <FontAwesomeIcon
          icon={iconName}
          style={{
            color: "#B3B3B3",
            fontSize: "16px",
          }}
        />
        <input
          type={"text"}
          name="Name"
          className="text-box"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputFields;
