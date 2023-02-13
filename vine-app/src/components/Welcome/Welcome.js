import React from "react";
import "./Welcome.css";
import welcomeImage from "";

const Welcome = () => {
  return (
    <div>
      <div>
        <p>Ghana’s #1 Basic School with top notch educational Facilities</p>
      </div>
      <div>
        <img src={welcomeImage} alt="welcomeImage" />
      </div>
    </div>
  );
};

export default Welcome;
