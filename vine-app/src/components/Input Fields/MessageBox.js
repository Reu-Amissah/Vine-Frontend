import React from "react";
import "./InputFields.css";

const MessageBox = () => {
  return (
    <div>
      <div className="input-header">Message</div>
      <textarea
        rows={5}
        name="message-box"
        type="text"
        className="msg-box"
      ></textarea>
    </div>
  );
};

export default MessageBox;
