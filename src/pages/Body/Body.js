import React from "react";
import "./Body.css";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";
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

        <div className="swiper-container">
          <CardSlider />
        </div>
      </div>
    </section>
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
