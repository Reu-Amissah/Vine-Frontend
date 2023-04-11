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

        <div className="programs-text-container">
          <div className="programs-title">
            <h2 className="programs-header">Events</h2>
            <span className="programs-span"></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </p>
          <Button
            title={"View More"}
            cName={"view-more"}
            iconName={"icon-display"}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
