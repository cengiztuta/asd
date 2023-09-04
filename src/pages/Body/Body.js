import React, { useState, useEffect } from "react";
import "./Body.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

import "swiper/css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";
import CardSlider from "./CardSlider";
import NewCardSlider from "./NewCardSlider";
import { Card } from "@chakra-ui/react";
import Benefits from "../../Benefits/Benefits";
import { Box } from "@chakra-ui/react";
import Offer from "./Offer";
import Howuse from "./Howuse";
import News from "./News";
import Calculator from "./Calculator";
import Customers from "./Customers";
import axios from "axios";
const Body = () => {
  return (
    <div className="body">
      <section
        id="top-attractions"    
      >
       
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
