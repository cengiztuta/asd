import React from "react";
import "./Body.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";
import CardSlider from "./CardSlider";
import { Card } from "@chakra-ui/react";
import Benefits from "../../Benefits/Benefits";

const Body = () => {
  return (
    <div>
      <section
        id="top-attractions"
        style={{ justifyContent: "center", display: "flex" }}
        className="asdfghj"
      >
        <CardSlider />
      </section>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <Benefits />
      </section>
    </div>
  );
};

export default Body;

{
  /* <div className="carousel-container">
<div className="card-slide-left-icon"> </div>

<div className="card-slide"> </div>
<div className="card-slide"> </div>
<div className="card-slide"> </div>
<div className="card-slide"> </div>
<div className="card-slide"> </div>
<div className="card-slide"> </div>
<div className="card-slide"> </div>
<div className="card-slide"> </div>

<div className="card-slide-right-icon"> </div>
</div> */
}

{
  /* <Swiper
spaceBetween={50}
slidesPerView={4}
onSlideChange={() => console.log("slide change")}
onSwiper={(swiper) => console.log(swiper)}
>
<SwiperSlide>
  <div className="card-slide"> </div>
</SwiperSlide>
<SwiperSlide>
  <div className="card-slide"> </div>
</SwiperSlide>
<SwiperSlide>
  <div className="card-slide"> </div>
</SwiperSlide>
</Swiper> */
}
