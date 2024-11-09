import React from "react";
import "./para.css";
import { Image } from "react-bootstrap";

const Para = () => {
  return (
    <div>
      <div className="paraSetup">
        <p className="para-para">
          At <strong>Muscle House</strong>, we’re dedicated to fueling your fitness goals with
          top-tier workout gear and equipment. From beginners to pros, we’ve got
          the essentials to support every step of your fitness journey!"
        </p>
        <button>Start Sweating</button>
      </div>
      <div className="paraImageWrapper">
        <Image
          className="paraImage"
          src={require("../../assets/gym photo3.jpg")}
        ></Image>
        <div class="overlay-text">
          <h2>100% Results Guaranteed</h2>
          <h5>
            "Strength grows in moments when you think you can’t go on, but keep
            going anyway."
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Para;
