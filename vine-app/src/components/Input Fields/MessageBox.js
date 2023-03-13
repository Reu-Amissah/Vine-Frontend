import React from "react";
import "./InputFields.css";

const MessageBox = () => {
  return (
    <div>
      <div className="input-header">Message</div>
      <textarea
        rows={3}
        name="message-box"
        type="text"
        className="msg-box"
        placeholder="Enter message"
      ></textarea>
    </div>
  );
};

export default MessageBox;
