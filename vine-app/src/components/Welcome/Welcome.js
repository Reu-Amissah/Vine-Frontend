import React from "react";
import "./Welcome.css";
import welcomeImage from "../../assets/descriptionImg.svg";
import Button from "../Buttons/Button";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="container-welcome">
        <div className="welcome-text">
          <h1>
            Ghana’s #1 Basic <br />
            School with top notch <br />
            educational Facilities
          </h1>
          <p>
            Enroll your children into the hands of well <br />
            trained professional tutors in Ghana
          </p>
          <Button title={"Get Started"} cName={"get-started"}></Button>
        </div>

        <div className="welcome-img-container">
          <img src={welcomeImage} alt="welcomeImage" className="welcome-img" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
