import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CardSlider.css"; // Kart stillerini içe aktarın

const CardSlider = ({ cards }) => {

  
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={7} // Aynı anda görünen kart sayısı
      navigation
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="card">gasdas</div>
  
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
