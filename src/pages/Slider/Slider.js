import React from "react";
import "./Slider.css";
import Header from "../Header/Header";
import ImageSlider from "./ImageSlider";
const Slider = () => {
  return (
    <div className="Slider">
      <ImageSlider />
      <section
        style={{
          justifyContent: "center",
        }}
      >
        <div className="header-content">
          <div className="header-content-title">
            <h1 className="header-content-title-one">
              PRAGUE CARD IS NOW "COOLPASS"
            </h1>
            <h3 className="header-content-title-two">
              Visit the best city attractions included in Prague CoolPass
            </h3>
          </div>
        </div>
      </section>
      <section className="underbar">
        <p className="underbar-text">
          Now you have a choice! Download the new DIGITAL PRAGUE COOLPASS
          straight to your mobile or collect the PHYSICAL PRAGUE CARD upon
          arrival
        </p>
      </section>
    </div>
  );
};

export default Slider;
