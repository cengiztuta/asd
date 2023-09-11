import React from "react";
import "./Body.css";
import "swiper/css/navigation";
import "swiper/css";
import NewCardSlider from "./NewCardSlider";
import Benefits from "../../Benefits/Benefits";
import Offer from "./Offer";
import Howuse from "./Howuse";
import News from "./News";
import Calculator from "./Calculator";
import Customers from "./Customers";
const Body = () => {
  return (
    <div className="body">
      <section>
        <NewCardSlider />
      </section>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <Benefits />
      </section>
      <section>
        <Offer />
      </section>
      <section>
        <Howuse />{" "}
      </section>
      <section>
        <News />
      </section>
      <section>
        <Calculator />
      </section>
      <section>
        <Customers />
      </section>
    </div>
  );
};

export default Body;
