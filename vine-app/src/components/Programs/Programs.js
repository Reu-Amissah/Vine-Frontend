import React from "react";
import "./Programs.css";
import Button from "../Buttons/Button";
import programsImage from "../../assets/programsImg.svg";

const Programs = () => {
  return (
    <div className="programs-container">
      <div className="container-programs">
        <div className="programs-img-container">
          <img
            src={programsImage}
            alt="programsImage"
            className="programs-img"
          />
        </div>

        <div className="programs-text">
          <h1>
            Ghana’s #1 Basic <br />
            School with top notch educational Facilities
          </h1>
          <p>
            Enroll your children into the hands of well <br />
            trained professional tutors in Ghana
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
