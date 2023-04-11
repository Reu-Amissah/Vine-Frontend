import React from "react";
import "./InputFields.css";

const MessageBox = ({ value, onChange }) => {
  return (
    <div>
      <div className="input-header">Message</div>
      <textarea
        rows={3}
        name="message-box"
        type="text"
        className="msg-box"
        placeholder="Enter message"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default MessageBox;
