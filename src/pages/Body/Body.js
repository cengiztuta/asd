import React from "react";
import "./Body.css";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import ReactCardSlider from "react-card-slider-component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";

const Body = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const images = [
    require("../images/image1.jpeg"),
    require("../images/image2.jpeg"),
    require("../images/image3.jpeg"),

    // Diğer resimler
  ];

  return (
    <section
      id="top-attractions"
      style={{ justifyContent: "center", display: "flex" }}
      className="asdfghj"
    >
      <div className="top-prague-att">
        <a className="top-title">TOP PRAGUE ATTRACTIONS INCLUDED IN COOLPASS</a>
        <div className="carousel-container">
          <div className="swiper-container">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
            >
              <SwiperSlide>
                <div className="card-slide"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-slide"> </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-slide"> </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-slide"> </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-slide"> </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-slide"> </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-slide"> </div>
              </SwiperSlide>
            </Swiper>
          </div>
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
