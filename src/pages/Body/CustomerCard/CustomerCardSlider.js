import React, { useRef, useState } from "react";
import "../Customer.css";
import { SwiperSlide, Swiper } from "swiper/react";
import CustomerCard from "./CustomerCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
const swiperParams = {
  direction: "horizontal",
  slidesPerView: 4,
  loop: false, // Loop devre dışı
  autoplay: false, // Otomatik oynatmayı devre dışı
  allowSlideNext: true, // Sonraki slayta geçişi engelle
  allowSlidePrev: true, // Önceki slayta geçişi engelle

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        // 768 piksel veya daha küçük ekranlarda noktaları etkinleştirin
        clickable: true,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
};

const CustomerCardSlider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperRef = useRef(null);
  const slicedData = data.slice(0, 17);

  return (
    <div className="customer-wrapper">
      {" "}
      <Box
        w={"1188px"}
        h={"100%"}
        position={"relative"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        display={"flex"}
      >
        <Box
          h={"24px"}
          cursor={"pointer"}
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="customer-icon"
        ></Box>
        <Swiper
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          onSwiper={(swiper) => slicedData.length}
          {...swiperParams}
          ref={swiperRef}
          className="customer-swiper"
          style={{
            display: "flex",
            minHeight: "255px",
            height: "100%",
            maxHeight: "410px",
          }}
        >
          {slicedData.map((card, index) => (
            <SwiperSlide key={index} className="customer-slider">
              <CustomerCard card={card} />
            </SwiperSlide>
          ))}{" "}
        </Swiper>
        <Box
          className="customer-icon"
          h={"24px"}
          cursor={"pointer"}
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <ChevronRightIcon w={"24px"} h={"100%"} />
        </Box>
      </Box>{" "}
      <div className="swiper-info">
        <a style={{ color: "#da4b07" }} className="swiper-info-text">
          {" "}
          {currentSlide + 1}{" "}
        </a>{" "}
        <a> /</a> <a className="swiper-info-text">{slicedData.length} </a>
      </div>
    </div>
  );
};

export default CustomerCardSlider;
