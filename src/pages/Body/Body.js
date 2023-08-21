import React from "react";
import "./Body.css";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import CardSlider from "./CardSlider";

const Body = () => {
  return (
    <section
      id="top-attractions"
      style={{ justifyContent: "center", display: "flex" }}
      className="asdfghj"
    >
      <div className="top-prague-att">
        <a className="top-title">TOP PRAGUE ATTRACTIONS INCLUDED IN COOLPASS</a>
        <div className="carousel-container">
          <div className="card-slide-left-icon"> </div>
          <div className="card-slide"> </div>
          <div className="card-slide"> </div>
          <div className="card-slide"> </div>
          <div className="card-slide"> </div>
          <div className="card-slide-right-icon"> </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
