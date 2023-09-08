import React, { useState, useEffect } from "react";
import "./Howuse.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const HowUseCard = ({ card }) => {
  const { descriptions } = card;
  const api = "https://static2.praguecoolpass.com/";

  const [howUse, setHowUse] = useState([]);
  const getHowUse = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b"
      );
      return response.data.how_to_use.web_images;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchTranslate = async () => {
    const data = await getHowUse();
    setHowUse(data);
  };

  useEffect(() => {
    fetchTranslate();
  }, []);

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
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <div className="how-use-wrapper">
      <div className="how-use-steps">
        <Swiper
          modules={[Pagination]}
          pagination={{
            type: "custom",
            clickable: true,
          }}
          {...swiperParams}
          className="how-use-swiper"
        >
          {howUse.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="how-use-step-new">
                <div
                  className="how-use-step-image"
                  style={{ backgroundImage: `url(${api}${item})` }}
                >
                  <a className="how-use-m-link"></a>
                  <div style={{ display: "block" }}> </div>
                  <a className="how-use-m-link"></a>
                </div>
                <div className="how-use-step-number">{index + 1} </div>
                <div className="how-use-step-text">{card[index]}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HowUseCard;
