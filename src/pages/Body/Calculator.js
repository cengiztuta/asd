import React, { useEffect, useRef, useState } from "react";
import "./Calculator.css";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "swiper/css/navigation";
import Card1 from "./CalculateCards/Card1";
import Card2 from "./CalculateCards/Card2";
import Card3 from "./CalculateCards/Card3";
import Card4 from "./CalculateCards/Card4";
import Card5 from "./CalculateCards/Card5";
import Card6 from "./CalculateCards/Card6";
import Card7 from "./CalculateCards/Card7";
import Card10 from "./CalculateCards/Card10";
const swiperParams = {
  direction: "horizontal",
  slidesPerView: 3,
  loop: false, // Loop devre dışı
  autoplay: false, // Otomatik oynatmayı devre dışı
  allowSlideNext: true, // Sonraki slayta geçişi engelle
  allowSlidePrev: true, // Önceki slayta geçişi engelle

  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: '20px',
      pagination: {
        // 768 piksel veya daha küçük ekranlarda noktaları etkinleştirin
        clickable: true,
      },
    },
    768: {
      slidesPerView: 1,
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
const Calculator = () => {
  const CardArray = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card10];
  const swiperRef = useRef(null);
  return (
    <div className="calculator">
      <div className="calculator-container">
        <h3 className="Benefits-title"> BUY PRAGUE COOL PASS / CARD</h3>
        <div className="wrapper">
          <div className="wrapper-content">
            <Box
              h={"24px"}
              cursor={"pointer"}
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="calc-slide-icon"
            >
              <ChevronLeftIcon w={"24px"} h={"100%"} />
            </Box>

            <Swiper {...swiperParams} ref={swiperRef}>
              {CardArray.map((CardComponent, index) => (
                <SwiperSlide key={index} {...swiperParams}>
                  <CardComponent />
                </SwiperSlide>
              ))}
            </Swiper>
            <Box
              h={"24px"}
              cursor={"pointer"}
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="calc-slide-icon"
            >
              <ChevronRightIcon w={"24px"} h={"100%"} />
            </Box>
          </div>
        </div>
        <div class="tips">
          <div class="first-tip-block">
            <li class="list-text">
              {" "}
              Prague CoolPass/Card is valid for consecutive days, not hours.
            </li>
            <li class="list-text">
              {" "}
              Child/Student Pass is valid for children 6-16 years old and
              students on daily studies up to 26 years old.
            </li>
          </div>
          <div class="second-tip-block">
            <li class="second-list-text">
              {" "}
              Any national or international student ID is OK. You do not need it
              when buying Pass, but you could be asked to show it when entering
              the attractions with a student CoolPass.
            </li>
          </div>
          <div className="third-tip-block">
            {" "}
            <h>ADULT 16+ years</h> <p className="third-m"> STUDENT 16 - 26 years </p>{" "}
            <p> CHILD 6-16 years </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
